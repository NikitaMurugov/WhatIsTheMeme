<?php

use App\Broadcasting\LobbyChannel;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('channel-name', function ($user) {
    return true;
});
