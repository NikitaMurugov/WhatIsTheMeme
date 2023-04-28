<?php

namespace App\Http\Controllers\Api\V1;

use App\Events\LobbyCreated;
use App\Http\Controllers\Controller;
use App\Http\Requests\LobbyFormRequest;
use App\Http\Resources\LobbyResource;
use App\Models\Lobby;

class LobbyController extends Controller
{
    public function create(LobbyFormRequest $request)
    {
        $lobby = Lobby::query()
            ->create($request->validated());

        broadcast(new LobbyCreated($lobby));

        return new LobbyResource($lobby);
    }
    public function show(Lobby $lobby)
    {
        return new LobbyResource($lobby);
    }
}
