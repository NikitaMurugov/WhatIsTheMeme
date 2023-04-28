<?php

namespace App\Events;

use App\Models\Lobby;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class LobbyCreated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public Lobby $lobby;
    /**
     * Create a new event instance.
     */
    public function __construct(Lobby $lobby)
    {
        $this->lobby = $lobby;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('channel-name'),
        ];
    }
}
