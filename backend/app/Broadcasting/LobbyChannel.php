<?php

namespace App\Broadcasting;

use App\Models\Lobby;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class LobbyChannel
{
    /**
     * Create a new channel instance.
     */
    public function __construct()
    {
        Log::info('channel was introduced');
    }

    /**
     * Authenticate the user's access to the channel.
     * @param Lobby $lobby
     * @return array|bool
     */
    public function join(Lobby $lobby): array|bool
    {
        Log::info($lobby);
        return $lobby && !$lobby->is_finished;
    }
}
