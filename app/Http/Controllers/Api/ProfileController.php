<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserProfile;
use Illuminate\Support\Facades\Auth; // Import Auth untuk menggunakan method user()

class ProfileController extends Controller
{
    public function show(Request $request)
    {
        $user = $request->user();
        $profile = UserProfile::where('users_id', $user->id)->first();

        // Mendapatkan email dari user menggunakan Auth::user()
        $email = Auth::user()->email;

        // Menambahkan email ke dalam data profil
        $profile->email = $email;

        return response()->json($profile);
    }

    public function update(Request $request)
    {
        $user = $request->user();
        $profile = UserProfile::where('users_id', $user->id)->first();

        // Lakukan validasi data yang diterima dari request jika diperlukan
        $profile->update($request->all());

        return response()->json($profile);
    }
}
