<?php

namespace App\Http\Controllers\Api\V1;

use App\Events\EnterToLobby;
use App\Events\LobbyCreated;
use App\Http\Controllers\Controller;
use App\Http\Requests\LobbyFormRequest;
use App\Http\Resources\LobbyResource;
use App\Models\Lobby;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LobbyController extends Controller
{
    public function create(LobbyFormRequest $request)
    {
        $data = $request->validated();
        $data['key'] = Lobby::makeUniqueKey();
        $lobby = Lobby::create($data);
        
        if ($lobby) {
            return response()->json([
                'key' => $lobby->key
            ]);
        }
    }

    public function show(Lobby $lobby)
    {
        broadcast(new EnterToLobby($lobby));
        return new LobbyResource($lobby);
    }
}
