<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Logbook extends Model
{
    protected $table = 'logbooks'; // Nama tabel yang terkait dengan model Logbook

    protected $fillable = [
        'date',
        'activity',
        'user_profiles_id',
    ];

    // Relasi dengan model UserProfile
    public function userProfile()
    {
        return $this->belongsTo(UserProfile::class, 'user_profiles_id');
    }
}
