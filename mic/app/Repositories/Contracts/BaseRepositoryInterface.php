<?php

namespace App\Repositories\Contracts;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

interface BaseRepositoryInterface
{
    /**
     * Get all
     * @param int $page
     * @param int $perPage
     * @param string $sort
     * @param string $direction
     * @param array $params
     * @return Collection
     */
    public function all(int $page = 0, int $perPage = 10, string $sort = 'id', string $direction = 'desc', array $params = []): Collection;

    /**
     * Get all
     * @param int $page
     * @param int $perPage
     * @return array
     */
    public function info(int $page = 0, int $perPage = 10): array;

    /**
     * Get by id
     * @param int $id
     * @return Model
     */
    public function getById(int $id): Model;

    /**
     * Create
     * @param array $attributes
     * @return Model
     */
    public function create(array $attributes): Model;

    /**
     * Update
     * @param int $id
     * @param array $attributes
     * @return Model
     */
    public function update(int $id, array $attributes): Model;

    /**
     * Delete
     * @param int $id
     * @return void
     */
    public function delete(int $id): void;
}
