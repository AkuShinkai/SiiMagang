<?php

// app/Http/Controllers/LogbookController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Logbook;

class LogbookController extends Controller
{
    public function index()
    {
        return Logbook::all();
    }

    public function store(Request $request)
    {
        $userId = $request->session()->get('user_id');

        $validatedData = $request->validate([
            'date' => 'required',
            'activity' => 'required'
        ]);
        $validatedData['user_profile_id'] = $userId;

        $logbook = Logbook::create($validatedData);
        return response()->json($logbook, 201);
    }

    public function show(Logbook $logbook)
    {
        return $logbook;
    }

    public function update(Request $request, Logbook $logbook)
    {
        $logbook->update($request->all());
        return $logbook;
    }

    public function destroy(Logbook $logbook)
    {
        $logbook->delete();
        return response()->json(null, 204);
    }
}
