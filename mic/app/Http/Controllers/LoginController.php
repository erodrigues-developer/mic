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
        $loginData = $this->service->login($request->get('email'), $request->get('password'));
        return response()->json([
            'success' => true,
            ...$loginData,
        ]);
    }

    /**
     * Info
     * @return JsonResponse
     */
    public function info(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'info' => $this->service->info(),
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
