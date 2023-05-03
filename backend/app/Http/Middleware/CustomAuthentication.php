<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CustomAuthentication
{
    public function handle(Request $request, Closure $next)
    {
        //Mocking authenticated user list without database
        $authenticatedUsers = array([
            'codewithgun' => 'gunwithpassword'
        ]);

        $authenticatedUsers = array(
            'codewithgun' => 'gunwithcode'
        );

        $user = $request->header('user');
        $password = $request->header('password');
        if (!array_key_exists($user, $authenticatedUsers)) {
            return response('Unauthorized', 401);
        }
        if ($authenticatedUsers[$user] != $password) {
            return response('Unauthorized', 401);
        }

        $request->setUserResolver(function () use ($user) {
            return $user;
        });

        return $next($request);
    }
}
