<?php

namespace App\Repositories\Eloquent;

use App\Enums\DataType;
use App\Repositories\Contracts\BaseRepositoryInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

abstract class BaseRepository implements BaseRepositoryInterface
{
    public function __construct(
        protected Model $model
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
    public function all(int $page = 0, int $perPage = 10, string $sort = 'id', string $direction = 'desc', array $params = []): Collection
    {
        return $this->model
            ->skip(($page - 1) * $perPage)
            ->where(function (Builder $query) use ($params) {
                foreach ($params as $key => $value) {
                    $type = $this->model->getConnection()->getDoctrineColumn($this->model->getTable(), $key)->getType()->getName();
                    $query = DataType::tryFrom($type)->where($query, $key, $value);
                }
            })
            ->take($perPage)
            ->orderBy($sort, $direction)
            ->get();
    }

    /**
     * Get all
     * @param int $page
     * @param int $perPage
     * @return array
     */
    public function info(int $page = 0, int $perPage = 10): array
    {
        $totalRecords = DB::table($this->model->getTable())->count();
        $totalPages = ceil($totalRecords / $perPage);
        $lastPage = $totalPages;

        return [
            'total' => $totalPages,
            'last_page' => $lastPage,
        ];
    }

    /**
     * Get by id
     * @param int $id
     * @return Model
     */
    public function getById(int $id): Model
    {
        return $this->model->find($id);
    }

    /**
     * Create
     * @param array $attributes
     * @return Model
     */
    public function create(array $attributes): Model
    {
        return $this->model->create($attributes);
    }

    /**
     * Update
     * @param int $id
     * @param array $attributes
     * @return Model
     */
    public function update(int $id, array $attributes): Model
    {
        $this->model = $this->getById($id);
        $this->model->fill($attributes);
        $this->model->save();
        return $this->getById($this->model->id);
    }

    /**
     * Delete
     * @param int $id
     * @return void
     */
    public function delete(int $id): void
    {
        $this->getById($id)->delete();
    }
}
