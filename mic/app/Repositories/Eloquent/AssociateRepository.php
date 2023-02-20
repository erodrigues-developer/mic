<?php

namespace App\Repositories\Eloquent;

use App\Models\Associate;
use App\Repositories\Contracts\AssociateRepositoryInterface;

class AssociateRepository extends BaseRepository implements AssociateRepositoryInterface
{
    public function __construct(
        Associate $model
    ) {
        parent::__construct($model);
    }
}
