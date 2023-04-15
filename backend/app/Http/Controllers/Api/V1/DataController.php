<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;

class DataController extends Controller
{
    public function index()
    {
        return response()->json([
            'name' => 'what is the meme?',
            'version' => '0.1',
            'session_id' => \Str::random(100),
        ]);
    }
    public function secureIndex()
    {
        return response()->json([
            'name' => 'what is the meme?',
            'version' => '0.1',
            'user' => auth()->user(),
            'session_started' => true,
        ]);
    }
}
