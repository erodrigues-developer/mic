<?php

namespace App\Http\Controllers;

use App\Services\AssociateService;

class AssociateController extends Controller
{
    public function __construct(
        AssociateService $service
    ) {
        parent::__construct($service);
    }
}
