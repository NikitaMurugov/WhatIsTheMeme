import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import Granim from 'granim';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Lobby/PageCompoents/Footer';
import fakeUsers from '../helpers/fakeUserList';
import Header from '../components/Lobby/PageCompoents/Header';
import { enterLobby } from '../hooks/socketHook';
import { getLobbyData } from '../api/lobby';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';
import Echo from 'laravel-echo';

function App() {
    const navigate = useNavigate();
    const [spectator, setSpectator] = useState(false);
    const params = useParams();
    const lobbyCode = params.code;
    const users = fakeUsers;
    const [lobbyData, setLobbyData] = useState(null);

    useEffect(() => {
        const echo = new Echo({
            broadcaster: 'pusher',
            cluster: 'eu',
            channel: 'qweqwe',
            key: '8ebc7600cc35dc5fd7b1',
            forceTLS: false,
            wsHost: window.location.hostname,
            wsPort: 6001,
            authEndpoint: 'http://memology.test/api/v1/broadcasting/init',
            disableStats: true,
            auth: {
                headers: {
                    user: 'codewithgun1',
                    password: 'gunwithcode'
                }
            }
        });

        echo.channel('channel-name').listen('MessageEvent', (event) => {
            console.log('event', event);
        });

        return () => {
            //TODO exit from lobby handler
        };
    }, []);

    useEffect(() => {
        if (lobbyCode) {
            fetchLobbyData(lobbyCode);
        }
    }, [lobbyCode]);

    const fetchLobbyData = async (key) => {
        const data = await getLobbyData(key);
        setLobbyData(data);
    };

    const joinSocket = (ev) => {
        console.log(ev, 'you are well come');
    };
    const newUserJoin = (ev) => {
        console.log(ev, 'NEW USER JOIN');
    };
    const userLeaveJoin = (ev) => {
        console.log(ev, 'USER LEAVE THE CHANNEL');
    };

    enterLobby(lobbyCode, joinSocket, newUserJoin, userLeaveJoin);

    // useEffect(() => {
    //     new Granim({
    //         element: '#bg',
    //         direction: 'left-right',
    //         opacity: [1, 1],
    //         states: {
    //             'default-state': {
    //                 gradients: [
    //                     ['#232323', '#3d3d3d'],
    //                     ['#3d3d3d', '#3b4364'],
    //                     ['#363636', '#2f2f2f'],
    //                     ['#2f2f2f', '#232323'],
    //                     ['#2f324d', '#2f2f2f']
    //                 ],
    //                 transitionSpeed: 2000
    //             }
    //         }
    //     });
    // }, []);

    if (!lobbyData) {
        return (
            <div className="App font-basic text-white h-full">
                {lobbyData === undefined ? (
                    <button
                        className="absolute bg-slate-300 rounded p-3 text-black left-1/2 top-1/2 translate-x-1/2 translate-y-1/2"
                        onClick={() => navigate('/')}>
                        Произошла ошибка, вернуться на главную
                    </button>
                ) : (
                    <Loader className={'left-1/2 top-1/2 translate-x-1/2 translate-y-1/2 absolute'} />
                )}
            </div>
        );
    }

    return (
        <div className="App font-basic text-white">
            <canvas id={'bg'}></canvas>
            <Header lobbyCode={lobbyCode} spectator={spectator} setSpectator={setSpectator} lobbyData={lobbyData} />
            <main className={'grid grid-cols-footer'}>
                <div></div>
                <div className={'flex flex-col items-center'}>
                    <span className={'text-4xl flex justify-center'}>{lobbyData.creator}</span>
                    <hr className={'w-1/2 m-10 h-1 border-none bg-gray-500 rounded'} />
                </div>
                <div></div>
            </main>
            <Footer spectator={spectator} users={users} />
        </div>
    );
}

export default App;
