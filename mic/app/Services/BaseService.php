<?php

namespace App\Services;

use App\Repositories\Contracts\BaseRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class BaseService
{
    public function __construct(
        protected BaseRepositoryInterface $repository
    ) {
    }

    /**
     * Get all
     * @param int $page
     * @param int $perPage
     * @param string $sort
     * @param string $direction
     * @param array $params
     * @return array
     */
    public function all(int $page = 0, int $perPage = 10, string $sort = 'id', string $direction = 'desc', array $params = []): array
    {
        return [
            'data' => $this->repository->all(
                $page,
                $perPage,
                $sort,
                $direction,
                $params
            ),
            'info' => $this->repository->info(
                $page,
                $perPage
            ),
        ];
    }

    /**
     * Get by id
     * @param int $id
     * @return Model
     */
    public function getById(int $id): Model
    {
        return $this->repository->getById($id);
    }

    /**
     * Create
     * @param array $attributes
     * @return Model
     */
    public function create(array $attributes): Model
    {
        return $this->repository->create($attributes);
    }

    /**
     * Update
     * @param int $id
     * @param array $attributes
     * @return Model
     */
    public function update(int $id, array $attributes): Model
    {
        return $this->repository->update($id, $attributes);
    }

    /**
     * Delete
     * @param int $id
     * @return void
     */
    public function delete(int $id): void
    {
        $this->repository->delete($id);
    }
}
