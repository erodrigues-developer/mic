<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginService
{
    private const DEVICE_NAME = 'front';

    /**
     * Login
     * @param string $email
     * @param string $password
     * @return array
     */
    public function login(string $email, string $password): array
    {
        /** @var User */
        $user = User::where('email', $email)->first();
        $permissions = $user->role->permissions->pluck('permission')->toArray();
        $menus = array_unique(array_filter(array_map(function ($permission) {
            return explode('-', $permission)[1] ?? null;
        }, $permissions)));

        if (!$user || !Hash::check($password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        cache()->put("menu.user.$user->id", $menus);
        $token = $user->createToken(self::DEVICE_NAME, $permissions);
        return [
            'token' => $token->plainTextToken,
            'info' => [
                'user' => $user,
                'menus' => cache()->get("menu.user.$user->id"),
            ],
        ];
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

    /**
     * Get info
     * @return array
     */
    public function info(): array
    {
        $user = Auth::user();
        return [
            'user' => $user,
            'menus' => cache()->get("menu.user.$user->id")
        ];
    }
}
