<?php

namespace App\Http\Resources;

use App\Enums\Location;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ZipcodeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $location = Location::tryFrom($this->uf);
        return [
            'zip_code' => $this->cep,
            'street' => $this->logradouro,
            'neighborhood' => $this->bairro,
            'city' => $this->localidade,
            'state' => $location->label(),
            'country' => Location::BRASIL->value,
        ];
    }
}
