<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LobbyFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'creator' => ["string","required"],
            'people_count' => ["integer", "min:2"],
            'password' => ["string", 'nullable'],
        ];
    }
}
