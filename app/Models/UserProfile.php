<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    protected $table = 'user_profiles';

    protected $fillable = [
        'name',
        'birth_date',
        'address',
        'profile_picture',
        'gender',
        'phone',
        'roles',
        'users_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'users_id');
    }

    public function submissions()
    {
        return $this->hasManyThrough(
            Submission::class,
            UserApprentices::class,
            'users_id',
            'id',
            'id',
            'submissions_id'
        );
    }

    public function submissionMembers()
    {
        return $this->hasManyThrough(
            SubmissionMember::class,
            User::class,
            'id',
            'email',
            'users_id',
            'email'
        );
    }
}
