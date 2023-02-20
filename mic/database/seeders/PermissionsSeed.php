<?php

namespace Database\Seeders;

use App\Enums\Permission;
use App\Models\Permission as ModelsPermission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionsSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (Permission::all() as $permission) {
            ModelsPermission::updateOrCreate(
                ['permission' => $permission],
                ['permission' => $permission]
            );
        }
    }
}
