<?php

namespace Database\Seeders;

use App\Enums\Role;
use App\Models\Role as ModelsRole;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolesSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (Role::all() as $role) {
            ModelsRole::updateOrCreate(
                ['role' => $role],
                ['role' => $role]
            );
        }
    }
}
