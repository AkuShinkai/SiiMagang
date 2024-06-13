<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectUserApprentices extends Model
{
    protected $table = 'submissions';

    protected $fillable = [
        'project_id',
        'user_apprentices_id',
    ];
}

