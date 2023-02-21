<?php

namespace App\Http\Resources;

use App\Helpers\DataHelper;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AssociateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'active' => $this->active,
            'name' => $this->name,
            'document' => DataHelper::maskDocument($this->document),
            'gender' => $this->gender,
            'birthdate' => $this->birthdate,
            'service_location' => $this->service_location,
            'specialty' => $this->specialty,
            'cellphone_number' => DataHelper::maskPhoneNumber($this->cellphone_number),
            'marital_status' => $this->marital_status,
            'zip_code' => $this->zip_code,
            'street' => $this->street,
            'number' => $this->number,
            'neighborhood' => $this->neighborhood,
            'city' => $this->city,
            'state' => $this->state,
            'updated_at' => $this->updated_at,
            'created_at' => $this->created_at,
        ];
    }
}
