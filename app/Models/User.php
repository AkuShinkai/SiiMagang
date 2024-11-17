<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    protected static function boot()
    {
        parent::boot();

        // Event untuk membuat profil pengguna setelah pengguna berhasil didaftarkan
        static::created(function ($user) {
            // Periksa apakah pengguna sudah memiliki profil
            if (!$user->userProfile) {
                // Cari entri SubmissionMember yang sesuai dengan email pengguna yang didaftarkan
                $submissionMember = SubmissionMember::where('email', $user->email)->first();

                // Jika SubmissionMember ditemukan, gunakan namanya untuk membuat profil pengguna
                if ($submissionMember) {
                    $userProfile = new UserProfile();
                    // Atur nama profil dengan nama dari SubmissionMember
                    $userProfile->name = $submissionMember->name;
                    // Menghubungkan profil pengguna dengan pengguna yang baru didaftarkan
                    $userProfile->users_id = $user->id;
                    // Simpan profil pengguna
                    $userProfile->save();
                }
            }
        });
    }

    public function userProfile()
    {
        return $this->hasOne(UserProfile::class, 'users_id');
    }
}
