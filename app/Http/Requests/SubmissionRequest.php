<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class SubmissionRequest extends FormRequest
{
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
            'institution' => 'required|string|max:255',
            'major' => 'required|string|max:255',
            'semester' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'file_link' => 'required|url',
            'members.*.name' => 'required|string|max:255',
            'members.*.gender' => 'required|string|in:female,male',
            'members.*.email' => 'required|email',
            'members.*.phone' => 'required|string',
        ];
    }
}
