<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    protected $table = 'attendance';

    protected $fillable = [
        'user_profiles_id',
        'datetime',
        'detail',
        'status',
    ];

    public function userProfile()
    {
        return $this->belongsTo(UserProfile::class, 'user_profiles_id');
    }
}

