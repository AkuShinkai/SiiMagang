<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    protected static function boot()
    {
        parent::boot();

        // Event untuk membuat profil pengguna setelah pengguna berhasil didaftarkan
        static::created(function ($user) {
            // Buat instance profil pengguna baru
            $userProfile = new UserProfile();

            // Atur propertinya
            $userProfile->name = $user->name; // Atur nama profil dengan nama pengguna
            // Atur properti lainnya sesuai kebutuhan, misalnya birth_date, address, dll.

            // Hubungkan profil pengguna dengan pengguna yang baru didaftarkan
            $userProfile->users_id = $user->id;

            // Simpan profil pengguna
            $userProfile->save();
        });
    }
}
