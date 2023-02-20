<?php

namespace App\Http\Controllers;

use App\Services\BaseService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function __construct(
        protected BaseService $service
    ) {
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
            'data' => $data['data'],
        ]);
    }

    /**
     * Get by id
     * @param int $id
     * @return JsonResponse
     */
    public function getById(int $id): JsonResponse
    {
        $data = $this->service->getById($id);

        return response()->json([
            'success' => true,
            'data' => $data,
        ]);
    }

    /**
     * Create
     * @param array $attributes
     * @return JsonResponse
     */
    public function create(Request $request): JsonResponse
    {
        $data = $this->service->create($request->all());

        return response()->json([
            'success' => true,
            'data' => $data,
        ], Response::HTTP_CREATED);
    }

    /**
     * Update
     * @param int $id
     * @param array $attributes
     * @return JsonResponse
     */
    public function update(int $id, Request $request): JsonResponse
    {
        $data = $this->service->update($id, $request->all());

        return response()->json([
            'success' => true,
            'data' => $data,
        ]);
    }

    /**
     * Delete
     * @param int $id
     * @return void
     */
    public function delete(int $id): JsonResponse
    {
        $this->service->delete($id);

        return response()->json([
            'success' => true,
        ], Response::HTTP_NO_CONTENT);
    }
}
