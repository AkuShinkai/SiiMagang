<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Logbook;
use Illuminate\Support\Facades\Auth;

class LogbookController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $profile = $user->userProfile;

        if (!$profile) {
            return response()->json(['error' => 'User profile not found'], 404);
        }

        $logbooks = Logbook::where('user_profiles_id', $profile->id)->get();

        return response()->json($logbooks);
    }

    public function store(Request $request)
    {
        $user = $request->user();
        $profile = $user->userProfile;

        if (!$profile) {
            return response()->json(['error' => 'User profile not found'], 404);
        }

        $request->validate([
            'date' => 'required|date',
            'activity' => 'required|string',
        ]);

        $logbook = new Logbook();
        $logbook->date = $request->date;
        $logbook->activity = $request->activity;
        $logbook->user_profiles_id = $profile->id;
        $logbook->save();

        return response()->json($logbook);
    }

    public function update(Request $request, $id)
    {
        $user = $request->user();
        $profile = $user->userProfile;

        if (!$profile) {
            return response()->json(['error' => 'User profile not found'], 404);
        }

        $logbook = Logbook::findOrFail($id);

        if ($logbook->user_profiles_id != $profile->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $logbook->update($request->all());

        return response()->json($logbook);
    }

    public function allLogbook()
    {
        $logbooks = Logbook::with('userProfile.user')->get();
        $logbookList = $logbooks->map(function ($logbook) {
            return [
                'id' => $logbook->id,
                'date' => $logbook->date,
                'activity' => $logbook->activity,
                'name' => $logbook->userProfile->name,
            ];
        });

        return response()->json($logbookList);
    }
}
