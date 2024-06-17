<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attendance;
use App\Models\SubmissionMember;
use App\Models\UserProfile;

class AttendanceController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'detail' => 'required|in:hadir,alfa,izin,sakit',
            'reason' => 'nullable|string',
        ]);

        // Dapatkan email dari pengguna yang sedang login
        $userEmail = auth()->user()->email;

        // Cari user profile berdasarkan email
        $userProfile = UserProfile::whereHas('user', function ($query) use ($userEmail) {
            $query->where('email', $userEmail);
        })->first();

        if (!$userProfile) {
            return response()->json(['message' => 'User profile not found'], 404);
        }

        // Cek apakah pengguna sudah mengirimkan kehadiran pada tanggal yang sama
        $existingAttendance = Attendance::where('user_profiles_id', $userProfile->id)
            ->whereDate('datetime', now()->toDateString())
            ->first();

        if ($existingAttendance) {
            return response()->json(['message' => 'You have already submitted attendance today'], 400);
        }

        // Simpan data kehadiran
        $attendance = new Attendance();
        $attendance->user_profiles_id = $userProfile->id;
        $attendance->datetime = now();
        $attendance->detail = $validatedData['detail'];
        $attendance->reason = $validatedData['reason'];
        $attendance->status = 'pending'; // Set status default
        $attendance->save();

        return response()->json(['message' => 'Attendance recorded successfully']);
    }


    public function index()
    {
        // Dapatkan ID pengguna yang sedang login
        $userId = auth()->user()->id;
        $userEmail = auth()->user()->email;

        // Dapatkan profil pengguna berdasarkan users_id
        $userProfile = UserProfile::where('users_id', $userId)->first();

        if (!$userProfile) {
            return response()->json(['message' => 'User profile not found'], 404);
        }

        // Cari submission member berdasarkan email
        $submissionMember = SubmissionMember::where('email', $userEmail)->first();

        if (!$submissionMember) {
            return response()->json(['message' => 'Submission member not found'], 404);
        }

        // Ambil data submission terkait
        $submission = $submissionMember->submission;

        // Ambil data kehadiran berdasarkan user_profiles_id
        $attendances = Attendance::where('user_profiles_id', $userProfile->id)
            ->with('userProfile')
            ->get();

        // Buat response data
        $attendanceList = $attendances->map(function ($attendance) use ($submission) {
            return [
                'id' => $attendance->id,
                'user_profile' => [
                    'name' => $attendance->userProfile->name,
                    'institution' => $submission->institution,
                    'major' => $submission->major,
                ],
                'datetime' => $attendance->datetime, // Sesuaikan dengan waktu lokal
                'detail' => $attendance->detail,
                'reason' => $attendance->reason,
                'status' => $attendance->status,
            ];
        });

        return response()->json($attendanceList);
    }


    public function allAttendance()
    {
        $attendance = Attendance::with('userProfile')->get();
        return response()->json($attendance);
    }
}
