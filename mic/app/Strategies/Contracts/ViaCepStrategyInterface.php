<?php

namespace App\Strategies\Contracts;

interface ViaCepStrategyInterface
{
    /**
     * Get address by zip code
     * @param string $zipCode
     * @return mixed
     */
    public function getZipCode(string $zipCode): mixed;
}