<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;
use App\Models\SubmissionMember;

class RegisterRequest extends FormRequest
{
    public $submissionMemberName; // Tambahkan properti untuk menyimpan nama anggota
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        return [
            // 'name' => 'required|string|max:55',
            'email' => [
                'required',
                'email',
                'unique:users,email',
                function ($attribute, $value, $fail) {
                    $submissionMember = SubmissionMember::where('email', $value)->first();
                    if (!$submissionMember || $submissionMember->status !== 'accepted') {
                        $fail('The email address is not authorized for registration.
                        Please make an submissions request first before making an account');
                    } else {
                        $this->submissionMemberName = $submissionMember->name; // Simpan nama anggota
                    }
                }
            ],
            'password' => [
                'required',
                'confirmed',
                Password::min(8)
                    ->letters()
                    ->numbers()
            ]
        ];
    }
}
