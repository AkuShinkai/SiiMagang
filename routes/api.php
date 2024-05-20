<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\LogbookController;
use App\Http\Controllers\Api\ProfileController;
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

Route::middleware('auth:sanctum')->group(function () {
    route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
});


Route::middleware('auth:api')->group(function () {
    Route::get('/logbooks', [LogbookController::class, 'index']);

    // Rute untuk menambahkan entri logbook baru
    Route::post('/logbooks/add', [LogbookController::class, 'store']);

    // Rute untuk memperbarui entri logbook
    Route::put('/logbooks/{id}', [LogbookController::class, 'update']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [ProfileController::class, 'show']);
    Route::put('/profile', [ProfileController::class, 'update']);
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


// routes/api.php
