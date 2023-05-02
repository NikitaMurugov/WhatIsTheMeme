<?php

use App\Broadcasting\LobbyChannel;
use Illuminate\Support\Facades\Broadcast;


Broadcast::channel('lobby.{lobby}', function () {
    return true;
});
