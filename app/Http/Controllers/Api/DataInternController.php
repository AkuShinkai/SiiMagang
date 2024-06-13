<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserProfile;
use Illuminate\Http\Request;
use App\Models\Submission;
use App\Models\SubmissionMember;

class DataInternController extends Controller
{

    public function index()
{
    // Ambil semua data user profile dengan peran 'apprentice'
    $userProfiles = UserProfile::where('roles', 'apprentice')->get();

    // Inisialisasi array untuk menyimpan data intern
    $dataIntern = [];

    // Loop melalui setiap user profile
    foreach ($userProfiles as $userProfile) {
        // Cari submission yang sesuai berdasarkan ID pengguna (users_id) pada user profile saat ini
        $submissionMember = SubmissionMember::where('name', $userProfile->name)->first();

        // Jika submission member ditemukan, ambil submission terkait
        if ($submissionMember) {
            $submission = $submissionMember->submission;

            // Jika submission ditemukan, tambahkan data ke array $dataIntern
            if ($submission) {
                $dataIntern[] = [
                    'name' => $userProfile->name,
                    'profile_picture' => $userProfile->profile_picture,
                    'institution' => $submission->institution,
                    'position' => $submission->major,
                    'start_date' => $submission->start_date,
                    'end_date' => $submission->end_date,
                ];
            }
        }
    }

    return response()->json($dataIntern);
}

}
