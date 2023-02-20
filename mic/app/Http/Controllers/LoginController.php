<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Services\LoginService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LoginController
{
    public function __construct(
        private LoginService $service
    ) {
    }

    /**
     * Login
     * @param LoginRequest $request
     * @return JsonResponse
     */
    public function login(LoginRequest $request): JsonResponse
    {
        $token = $this->service->login($request->get('email'), $request->get('password'));
        return response()->json([
            'success' => true,
            'token' => $token->plainTextToken,
        ]);
    }

    /**
     * Login
     * @param Request $request
     * @return JsonResponse
     */
    public function logout(Request $request): JsonResponse
    {
        $this->service->logout($request->user());
        return response()->json([
            'success' => true,
        ]);
    }
}
