<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'start_date', 'end_date', 'repository', 'submissions_id'
    ];

    public function submission()
    {
        return $this->belongsTo(Submission::class, 'submissions_id');
    }
}
