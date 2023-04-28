  <?php

use App\Http\Controllers\Api\V1\DataController;
  use App\Http\Controllers\Api\V1\LobbyController;
  use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Log;
  use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Router
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::group(['prefix' => '/lobby'],function () {
    Route::post('/create', [LobbyController::class, 'create']);
    Route::get('/{lobby}',  [LobbyController::class, 'show']);
});
