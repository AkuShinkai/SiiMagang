<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Http\Requests\SubmissionRequest;
use Illuminate\Http\Request;
use App\Models\Submission;
use App\Models\SubmissionMember;

class SubmissionController extends Controller
{
    public function index()
    {
        $submissions = Submission::with('submissionMembers')->get();
        return response()->json($submissions);
    }

    public function store(SubmissionRequest $request)
    {
        $validatedData = $request->validated();

        $submission = Submission::create([
            'institution' => $validatedData['institution'],
            'major' => $validatedData['major'],
            'semester' => $validatedData['semester'],
            'start_date' => $validatedData['start_date'],
            'end_date' => $validatedData['end_date'],
            'file_link' => $validatedData['file_link'],
        ]);

        foreach ($validatedData['members'] as $memberData) {
            SubmissionMember::create([
                'submissions_id' => $submission->id,
                'name' => $memberData['name'],
                'gender' => $memberData['gender'],
                'email' => $memberData['email'],
                'phone' => $memberData['phone'],
            ]);
        }

        return response()->json(['message' => 'Submission and members created successfully'], 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:accepted,rejected',
        ]);

        $submission = Submission::findOrFail($id);

        $submission->update([
            'status' => $request->status,
        ]);

        $submission->submissionMembers()->update(['status' => $request->status]);

        return response()->json(['message' => 'Submission updated successfully'], 200);
    }

    public function show($id)
    {
        // Cari submission berdasarkan ID
        $submission = Submission::findOrFail($id);

        // Kembalikan data submission
        return response()->json($submission);
    }

    public function getMembers($id)
    {
        // Mengambil submission berdasarkan ID
        $submission = Submission::findOrFail($id);

        // Mengambil daftar member dari submission
        $members = $submission->submissionMembers;

        // Mengembalikan daftar member sebagai respons JSON
        return response()->json(['members' => $members], 200);
    }

    public function destroy($id)
    {
        $submission = Submission::findOrFail($id);
        $submission->delete();

        return response()->json(['message' => 'Submission deleted successfully'], 200);
    }

    public function addMember(Request $request, $submissionId)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'gender' => 'required|in:male,female',
            'email' => 'required|email|max:100',
            'phone' => 'required|string|max:15',
            'status' => 'required|in:pending,acc,refused',
        ]);

        $submission = Submission::findOrFail($submissionId);

        $submissionMember = SubmissionMember::create([
            'submissions_id' => $submission->id,
            'name' => $request->name,
            'gender' => $request->gender,
            'email' => $request->email,
            'phone' => $request->phone,
            'status' => $request->status,
        ]);

        return response()->json(['message' => 'Submission member created successfully'], 201);
    }

    public function updateMember(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'gender' => 'required|in:male,female',
            'email' => 'required|email|max:100',
            'phone' => 'required|string|max:15',
            'status' => 'required|in:pending,acc,refused',
        ]);

        $submissionMember = SubmissionMember::findOrFail($id);

        $submissionMember->update([
            'name' => $request->name,
            'gender' => $request->gender,
            'email' => $request->email,
            'phone' => $request->phone,
            'status' => $request->status,
        ]);

        return response()->json(['message' => 'Submission member updated successfully'], 200);
    }

    public function destroyMember($id)
    {
        $submissionMember = SubmissionMember::findOrFail($id);
        $submissionMember->delete();

        return response()->json(['message' => 'Submission member deleted successfully'], 200);
    }
}
