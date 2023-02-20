<?php

namespace App\Http\Controllers;

use App\Services\ProviderService;

class ProviderController extends Controller
{
    public function __construct(
        ProviderService $service
    ) {
        parent::__construct($service);
    }
}
