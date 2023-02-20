<?php

namespace App\Services;

use App\Strategies\Contracts\ViaCepStrategyInterface;

class ZipCodeService extends BaseService
{
    public function __construct(private ViaCepStrategyInterface $strategy)
    {
    }

    /**
     * Get zip code
     * @param string $zipCode
     * @return mixed
     */
    public function getZipCode(string $zipCode): mixed
    {
        $data = $this->strategy->getZipCode($zipCode);

        if (isset($data->erro)) {
            return [];
        }

        return $data;
    }
}