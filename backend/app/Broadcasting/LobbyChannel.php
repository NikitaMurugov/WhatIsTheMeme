<?php

namespace App\Broadcasting;

use App\Models\Lobby;
use App\Models\User;

class LobbyChannel
{
    /**
     * Create a new channel instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Authenticate the user's access to the channel.
     * @param Lobby $lobby
     * @return array|bool
     */
    public function join(Lobby $lobby): array|bool
    {
        return $lobby && !$lobby->is_finished;
    }
}
