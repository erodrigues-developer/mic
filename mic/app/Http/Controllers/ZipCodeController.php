<?php

namespace App\Http\Controllers;

use App\Http\Resources\ZipcodeResource;
use App\Services\ZipCodeService;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class ZipCodeController extends Controller
{
    public function __construct(ZipCodeService $service)
    {
        parent::__construct($service);
    }

    public function getZipCode(Request $request)
    {
        try {
            $zipCode = $this->service->getZipCode($request->get('zipcode', ''));
            return response()->json([
                'success' => true,
                'data' => empty($zipCode) ? [] : new ZipcodeResource($zipCode),
            ]);
        } catch (Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => $th->getMessage(),
                'file' => $th->getFile(),
                'line' => $th->getLine(),
                'stack' => $th->getTrace(),
            ], Response::HTTP_NOT_FOUND);
        }
    }
}