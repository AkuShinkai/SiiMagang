<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\UserProfile;
use App\Models\Submission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        // Mengambil submission berdasarkan email pengguna di submission_members
        $submission = Submission::whereHas('submissionMembers', function ($query) use ($email) {
            $query->where('email', $email);
        })->first();

        // Jika submission ditemukan, tambahkan informasi pendidikan ke dalam data profil
        if ($submission) {
            $profile->education = [
                'major' => $submission->major,
                'institution' => $submission->institution,
                'semester' => $submission->semester,
            ];
        }
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
