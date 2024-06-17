<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Submission;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\SubmissionMember;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class ProjectsController extends Controller
{
    public function store(Request $request)
    {
        // Validasi request
        $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'required|string|max:500',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'repository' => 'nullable|url|max:130'
        ]);

        // Dapatkan user yang sedang login
        $user = Auth::user();

        // Cari SubmissionMember berdasarkan email user yang login
        $submissionMember = SubmissionMember::where('email', $user->email)->first();

        if (!$submissionMember) {
            Log::error('No matching submission member found for user: ' . $user->email);
            return response()->json(['error' => 'No matching submission member found for this user.'], 404);
        }

        Log::info('Submissions ID for user ' . $user->email . ': ' . $submissionMember->submissions_id);

        // Buat project baru dengan submissions_id yang sesuai
        $project = Project::create([
            'name' => $request->name,
            'description' => $request->description,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'repository' => $request->repository,
            'submissions_id' => $submissionMember->submissions_id,
        ]);

        return response()->json(['message' => 'Project created successfully.']);
    }

    public function index()
    {
        $user = Auth::user();
        $submissionMember = SubmissionMember::where('email', $user->email)->first();

        if (!$submissionMember) {
            return response()->json(['error' => 'No matching submission member found for this user.'], 404);
        }

        $projects = Project::where('submissions_id', $submissionMember->submissions_id)->get();

        return response()->json($projects);
    }

    public function update(Request $request, $id)
    {
        // Validasi request
        $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'required|string|max:500',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'repository' => 'nullable|url|max:130'
        ]);

        // Dapatkan user yang sedang login
        $user = Auth::user();

        // Cari SubmissionMember berdasarkan email user yang login
        $submissionMember = SubmissionMember::where('email', $user->email)->first();

        if (!$submissionMember) {
            return response()->json(['error' => 'No matching submission member found for this user.'], 404);
        }

        // Cari proyek berdasarkan ID dan submissions_id
        $project = Project::where('id', $id)
            ->where('submissions_id', $submissionMember->submissions_id)
            ->first();

        if (!$project) {
            return response()->json(['error' => 'Project not found.'], 404);
        }

        // Update proyek
        $project->update([
            'name' => $request->name,
            'description' => $request->description,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'repository' => $request->repository
        ]);

        return response()->json(['message' => 'Project updated successfully.']);
    }

    public function destroy($id)
    {
        // Dapatkan user yang sedang login
        $user = Auth::user();

        // Cari SubmissionMember berdasarkan email user yang login
        $submissionMember = SubmissionMember::where('email', $user->email)->first();

        if (!$submissionMember) {
            return response()->json(['error' => 'No matching submission member found for this user.'], 404);
        }

        // Cari proyek berdasarkan ID dan submissions_id
        $project = Project::where('id', $id)
            ->where('submissions_id', $submissionMember->submissions_id)
            ->first();

        if (!$project) {
            return response()->json(['error' => 'Project not found.'], 404);
        }

        // Hapus proyek
        $project->delete();

        return response()->json(['message' => 'Project deleted successfully.']);
    }

    public function allProjects()
    {
        // Ambil semua proyek dengan relasi submission
        $projects = Project::with('submission')->get();

        // Siapkan data proyek untuk dikirim sebagai response
        $projectsData = $projects->map(function ($project) {
            // Ambil submission yang terkait dengan proyek ini
            $submission = $project->submission;

            // Ambil institution dari submission jika ada, jika tidak setel ke 'N/A'
            $education = $submission ? $submission->institution : 'N/A';

            return [
                'id' => $project->id,
                'name' => $project->name,
                'description' => $project->description,
                'start_date' => $project->start_date,
                'end_date' => $project->end_date,
                'repository' => $project->repository,
                'education' => $education, // atau field education lain yang relevan
            ];
        });

        // Mengirim response dalam bentuk JSON
        return response()->json($projectsData);
    }
}
