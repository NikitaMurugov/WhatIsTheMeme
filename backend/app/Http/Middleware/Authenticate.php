<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo(Request $request): ?string
    {
        return $request->expectsJson() ? null : response()->json([
            'message' => 'unsuccessful auth',
            'code' => 403,
            'status' => rand(1000, 9999),
            'success' => false,
        ],403);;
    }
}
