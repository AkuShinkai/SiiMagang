<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserApprentices extends Model
{
    use HasFactory;

    protected $table = 'user_apprentices';

    protected $fillable = [
        'users_id',
        'submissions_id',
    ];

    public function userProfile()
    {
        return $this->belongsTo(UserProfile::class, 'users_id');
    }

    public function submission()
    {
        return $this->belongsTo(Submission::class, 'submissions_id');
    }

    // public function projects()
    // {
    //     return $this->belongsToMany(Project::class, 'project_user_apprentices', 'user_apprentices_id', 'project_id');
    // }

    //new

    // Definisikan relasi dengan model User
    public function user()
    {
        return $this->belongsTo(User::class, 'users_id');
    }

}
