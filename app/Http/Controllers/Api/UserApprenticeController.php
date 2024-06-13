<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserProfile;
use App\Models\Submission;
use App\Models\UserApprentices;
use Illuminate\Http\Request;

// class UserApprenticeController extends Controller
// {
//     public function addUserApprentices()
//     {
//         // Ambil semua user profiles dengan role 'apprentice'
//         $userProfiles = UserProfile::where('roles', 'apprentice')->get();

//         foreach ($userProfiles as $userProfile) {
//             // Dapatkan semua submissions terkait user profile ini
//             $submissions = Submission::whereHas('submiss    ionMembers', function ($query) use ($userProfile) {
//                 $query->where('name', $userProfile->name);
//             })->get();

//             foreach ($submissions as $submission) {
//                 // Masukkan data ke tabel user_apprentices
//                 UserApprentices::create([
//                     'user_profiles_id' => $userProfile->id,
//                     'submissions_id' => $submission->id
//                 ]);
//             }
//         }

//         // Ambil semua user apprentices beserta informasi pengguna dari tabel user_profiles
//         $userApprentices = UserApprentices::with('user')->get();
//         return response()->json($userApprentices);
//         // return response()->json(['message' => 'User apprentices data inserted successfully']);
//     }

//     // UserApprenticeController.php

//     public function getUserApprentices()
//     {
//         // Ambil semua user apprentices
//         $userApprentices = UserApprentices::all();

//         // Mengembalikan daftar user apprentices sebagai respons JSON
//         return response()->json($userApprentices);
//     }
// }
