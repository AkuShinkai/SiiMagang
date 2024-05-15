<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserProfile; // Pastikan Anda telah mengimpor model UserProfile

class ProfileController extends Controller
{
    public function show(Request $request)
    {
        $user = $request->user();
        $profile = UserProfile::where('users_id', $user->id)->first();
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
