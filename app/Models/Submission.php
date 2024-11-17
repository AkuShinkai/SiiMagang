<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Submission extends Model
{
    use HasFactory, HasApiTokens;

    protected $table = 'submissions';

    protected $fillable = [
        'status',
        'submited_at',
        'institution',
        'major',
        'semester',
        'start_date',
        'end_date',
        'file_link'
    ];

    public function submissionMembers()
    {
        return $this->hasMany(SubmissionMember::class, 'submissions_id');
    }

    public function userApprentices()
    {
        return $this->hasMany(UserApprentices::class, 'submissions_id');
    }

    public function userProfiles()
    {
        return $this->hasManyThrough(
            UserProfile::class,
            UserApprentices::class,
            'submissions_id',
            'id',
            'id',
            'users_id'
        );
    }
}
