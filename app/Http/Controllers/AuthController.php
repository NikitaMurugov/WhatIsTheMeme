<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validate = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        $user = User::create([
            'username' => $validate['username'],
            'password' => Hash::make($validate['password'])
        ]);

        auth()->login($user);

        $token = auth()->user()->createToken('accessToken');

        return response()->json([
            'success' => true,
            'message' => 'success logout',
            "id" => $user->id,
            "token" => $token->plainTextToken,
        ], 201);
    }

    public function login(Request $request)
    {
        $validate = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        $user = User::query()
            ->where('username', $validate['username'])
            ->first();

        if ($user && Hash::check($validate['password'], $user->password)) {
            if (auth()->check()) {
                auth()->logout();
            }

            auth()->login($user);
            $token = auth()->user()->createToken('accessToken');

            return response()->json([
                "success" => true,
                "message" => "success login",
                "token" => $token->plainTextToken,
            ], 202);
        } else if (!$user) {

            return response()->json([
                "success" => false,
                "message" => "user not found",
            ], 404);
        }

        return response()->json([
            "success" => false,
            "message" => "validate login",
        ], 400);
    }
    public function logout()
    {
        auth()->logout();
        return response()->json([
            'success' => true,
            'message' => 'success logout',
        ], 200);
    }
}
