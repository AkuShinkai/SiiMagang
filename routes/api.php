<?php

use App\Http\Controllers\Api\AttendanceController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DataInternController;
use App\Http\Controllers\Api\LogbookController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\ProjectsController;
use App\Http\Controllers\Api\SubmissionController;
use App\Http\Controllers\Api\UserApprenticeController;
use App\Models\Logbook;
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



// Rute untuk submission
Route::get('/submissions', [SubmissionController::class, 'index']);
Route::post('/submissions', [SubmissionController::class, 'store']);
Route::get('/submissions/{id}', [SubmissionController::class, 'show']); // Tambahkan rute ini
Route::put('/submissions/{id}', [SubmissionController::class, 'update']);
Route::delete('/submissions/{id}', [SubmissionController::class, 'destroy']);

// Rute untuk submission members
Route::get('/submissions/{id}/members', [SubmissionController::class, 'getMembers']);
Route::post('/submissions/{submissionId}/members', [SubmissionController::class, 'addMember']);
Route::put('/submission-members/{id}', [SubmissionController::class, 'updateMember']);
Route::delete('/submission-members/{id}', [SubmissionController::class, 'destroyMember']);



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

    Route::post('/attendance', [AttendanceController::class, 'store']);
    Route::get('/attendance', [AttendanceController::class, 'index']);

    Route::get('/dataintern', [DataInternController::class, 'index']);

    Route::get('/projects/create', [ProjectsController::class, 'create'])->name('projects.create');
    Route::post('/projects', [ProjectsController::class, 'store'])->name('projects.store');
    Route::get('/projects', [ProjectsController::class, 'index'])->name('projects.index');
    Route::put('/projects/{id}', [ProjectsController::class, 'update']);
    Route::delete('/projects/{id}', [ProjectsController::class, 'destroy']);

    // Route::get('/userApprentices', [UserApprenticeController::class, 'getUserApprentices']);
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


// project

Route::get('/projects/all', [ProjectsController::class, 'allProjects']);
Route::get('/attendance/all', [AttendanceController::class, 'allAttendance']);
Route::get('/logbook/all', [LogbookController::class, 'allLogbook']);
