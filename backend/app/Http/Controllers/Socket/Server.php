<?php

namespace app\commands\worker;

use Workerman\Worker as BaseWorker;
use Workerman\Connection\TcpConnection;
use Workerman\Lib\Timer;

class Worker
{
    const SOCKET_MESSAGE = 'socket.message';
    const SOCKET_CONNECTED = 'socket.connected';

    /**
     * @var bool
     */
    public $showLog = true;

    /**
     * @var string
     */
    public $bindIp = '127.0.0.1';

    /**
     * @var string
     */
    public $transport = 'tcp';
    public $localCert = '';
    public $localKey = '';

    /**
     * @var int
     */
    public $bindPort = 9090;

    /**
     * @var string
     */
    public $realm = 'records-handler';

    /**
     * @var string
     */
    public $cookieValidationKey = '';

    /**
     * @var boolean
     */
    public $enableCookieValidation = true;

    /**
     * @var string[]
     */
    public $csrfParams = [];

    /**
     * @var HandlerCommands
     */
    protected $commands;

    /**
     * @var HandlerManager
     */
    protected $handlerManager;


    /**
     * @var WsSession[]
     */
    protected $sessions;

    /**
     * @var BaseWorker
     */
    protected $ws_worker;

    public function run()
    {
        $context = [];

        if ($this->transport === 'ssl') {
            $context = [
                'ssl' => [
                    'local_cert' => $this->localCert,
                    'local_pk' => $this->localKey,
                    'verify_peer' => false,
                ]
            ];
        }

        $this->ws_worker = new BaseWorker("websocket://{$this->bindIp}:{$this->bindPort}/{$this->realm}", $context);
        $this->ws_worker->transport = $this->transport;
        $this->ws_worker->name = 'records_handler_worker';
        $this->ws_worker->count = 4;
        $this->ws_worker->onWorkerStart = array($this, 'onWorkerStart');
        $this->ws_worker->onConnect = array($this, 'onConnect');
        $this->ws_worker->onMessage = array($this, 'onMessage');
        $this->ws_worker->onClose = array($this, 'onClose');
        $this->ws_worker->onWebSocketConnect = array($this, 'onWebSocketConnect');

        $this->sessions = [];

        BaseWorker::runAll();
    }

    public function onWorkerStart($worker)
    {
        Timer::add(120, [$this, 'doDatabaseReconnect']);
    }

    /**
     * Log message to console
     *
     * @param string $type
     * @param string $message
     * @return void
     */
    public function log($type, $message)
    {
        if ($this->showLog)
            BaseWorker::log("[$type] $message");
    }

    public function broadcast($role, $command, $payload)
    {
        foreach ($this->sessions as $session) {

//            if($session->role === $role) {
//                $session->sendCommand($command, $payload);
//            }

            $session->sendCommand($command, $payload);
        }
    }

    /**
     * @return BaseWorker
     */
    public function getWorker()
    {
        return $this->ws_worker;
    }

    /**
     * @param TcpConnection $connection
     * @param string $buffer Contains request headers
     */
    public function onWebSocketConnect($connection, $buffer)
    {
        $session = $this->getSession($connection->id);
        $cookies = [];

        if (isset($_GET['role']) === false) {
            $connection->close();
            return;
        }

        $role = strval($_GET['role']);
        $session->setRole($role);
        unset ($_GET['role']);

        $session->setCookies($cookies);
        $session->sendCommand(HandlerCommands::SERVER_SUCCESS_AUTH, [
            'id' => $session->getId()
        ]);
    }

    /**
     * @param TcpConnection $connection
     */
    public function onMessage($connection, $data)
    {
        $session = $this->getSession($connection->id);

        if ($session === null) {
            $this->log('onMessage', 'No session for connection');
            return;
        }

        $message = WsMessage::fromJson($data);

        if ($message === null) {
            $this->log('onMessage', "Skip invalid message, data = $data");
            return;
        }

        $this->commands->tryExecute($session, $message);
    }


    public function onConnect($connection)
    {
        /**
         * @var WsSession $session
         */
        $session = Yii::createObject(WsSession::class, [$connection]);
        $this->sessions[$session->getId()] = $session;
    }

    /**
     * @param TcpConnection $connection
     * @return void
     */
    public function onClose($connection)
    {
        $session = $this->getSession($connection->id);
        if ($session === null) {
            $this->log('onClose', 'No session for connection');
            return;
        }

        unset($this->sessions[$session->getId()]);
    }

    /**
     * @param int $id
     * @return WsSession
     */
    public function getSession($id)
    {
        if (isset($this->sessions[$id]))
            return $this->sessions[$id];
        return null;
    }

    public function getSessions()
    {
        return $this->sessions;
    }

    /**
     * @return HandlerManager
     */
    public function getHandlerManager()
    {
        return $this->handlerManager;
    }
}

