<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;


class SubmissionMember extends Model
{
    use HasFactory, HasApiTokens;

    protected $table = 'submission_members';

    protected $fillable = [
        'submissions_id',
        'name',
        'gender',
        'email',
        'phone',
        'status'
    ];

    public function submission()
    {
        return $this->belongsTo(Submission::class, 'submissions_id');
    }
}
