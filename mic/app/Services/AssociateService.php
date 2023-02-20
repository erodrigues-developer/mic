<?php

namespace App\Services;

use App\Repositories\Contracts\AssociateRepositoryInterface;

class AssociateService extends BaseService
{
    public function __construct(
        AssociateRepositoryInterface $repository
    ) {
        parent::__construct($repository);
    }
}
