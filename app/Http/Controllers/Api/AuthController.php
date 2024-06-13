<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\SubmissionMember;
use App\Models\User;
use App\Models\UserApprentices;
use App\Models\UserProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email address or password is incorrect'
            ], 422);
        }

        // /** @var User $user */
        // $user = Auth::user();
        // $user->load('userProfile'); // Load user profile relationship

        // Membuat token berdasarkan peran user
        /** @var User $user */
        $user = Auth::user();
        $user->load('userProfile'); // Load user profile relationship
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => $user,
            'roles' => $user->userProfile->roles, // Include roles in response
            'token' => $token
        ]);
    }

    public function register(RegisterRequest $request)
    {
        $data = $request->validated();

        // Cari entri SubmissionMember yang sesuai dengan email pengguna yang didaftarkan
        $submissionMember = SubmissionMember::where('email', $data['email'])->first();

        // Buat pengguna baru
        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $submissionMember ? $submissionMember->name : $data['name'], // Ambil nama dari SubmissionMember jika ada, jika tidak gunakan nama dari data yang divalidasi
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        // Simpan ID pengguna baru
        $userId = $user->id;

        // if ($submissionMember) {
        //     $userApprentice = UserApprentices::create([
        //         'users_id' => $userId,
        //         'submissions_id' => $submissionMember->submissions_id,
        //     ]);
        // }

        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout(Request $request)
    {
        /** @var User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
}
