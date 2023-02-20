<?php

namespace App\Services;

use App\Repositories\Contracts\ProviderRepositoryInterface;

class ProviderService extends BaseService
{
    public function __construct(
        ProviderRepositoryInterface $repository
    ) {
        parent::__construct($repository);
    }
}
