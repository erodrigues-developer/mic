<?php

namespace App\Http\Controllers;

use App\Http\Resources\AssociateResource;
use App\Services\AssociateService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AssociateController extends Controller
{
    public function __construct(
        AssociateService $service
    ) {
        parent::__construct($service);
    }

    /**
     * Get all
     * @param int $page
     * @param int $perPage
     * @param string $sort
     * @param string $direction
     * @param array $params
     * @return Collection
     */
    public function all(Request $request): JsonResponse
    {
        $data = $this->service->all(
            $request->get('page', 0),
            $request->get('per_page', 10),
            $request->get('sort', 'id'),
            $request->get('direction', 'desc'),
            $request->except(['page', 'per_page', 'sort', 'direction'])
        );

        return response()->json([
            'success' => true,
            'current_page' => $request->get('page', 0),
            'per_page' => $request->get('per_page', 10),
            'total' => $data['info']['total'],
            'last_page' => $data['info']['last_page'],
            'data' => AssociateResource::collection($data['data']),
        ]);
    }
}
