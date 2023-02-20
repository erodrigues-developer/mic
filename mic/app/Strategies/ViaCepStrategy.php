<?php

namespace App\Strategies;

use App\Strategies\Contracts\ViaCepStrategyInterface;
use Illuminate\Support\Facades\Http;

class ViaCepStrategy implements ViaCepStrategyInterface
{
    const URL = 'https://viacep.com.br/ws';

    /**
     * Get address by zip code
     * @param string $zipCode
     * @return mixed
     */
    public function getZipCode(string $zipCode): mixed
    {
        return Http::get(self::URL . '/' . $zipCode . '/json')->object();
    }
}
