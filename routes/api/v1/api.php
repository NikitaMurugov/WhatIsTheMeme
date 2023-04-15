<?php

use App\Http\Controllers\Api\V1\DataController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Route::get('/user/{id}', [UserController::class, 'show']);
//Route::get('/users', [UserController::class, 'index']);
//Route::post('/user/create', [UserController::class, 'store']);
//Route::put('/user/{id}/update', [UserController::class, 'update']);
//Route::delete('/user/{id}/delete', [UserController::class, 'delete']);


Route::group(['middleware' => 'guest'], function () {
    Route::get('/data', [DataController::class, 'index'])->name('data');
});

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/data/secure',  [DataController::class, 'secureIndex'])->name('data.secure');
});
