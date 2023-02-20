<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Laravel\Sanctum\NewAccessToken;

class LoginService
{
    private const DEVICE_NAME = 'front';

    /**
     * Login
     * @param string $email
     * @param string $password
     * @return NewAccessToken
     */
    public function login(string $email, string $password): NewAccessToken
    {
        /** @var User */
        $user = User::where('email', $email)->first();
        $permissions = $user->role->permissions->pluck('permission')->toArray();

        if (!$user || !Hash::check($password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return $user->createToken(self::DEVICE_NAME, $permissions);
    }

    /**
     * Logout
     * @param User $user
     * @return void
     */
    public function logout(User $user): void
    {
        $user->tokens()->delete();
    }
}
