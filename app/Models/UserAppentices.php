<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAppentices extends Model
{
    protected $table = 'user_apprentices';

    protected $fillable = [

    ];

    // Relasi dengan model User
    public function userProfile()
    {
        return $this->belongsTo(UserProfile::class, 'user_profiles_id');
    }
}
