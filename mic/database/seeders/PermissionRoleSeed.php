<?php

namespace Database\Seeders;

use App\Enums\Permission;
use App\Enums\Role as EnumsRole;
use App\Models\Permission as ModelsPermission;
use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionRoleSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $root = Role::where('role', '=', EnumsRole::ROOT->value)->first();
        $rootPermissions = ModelsPermission::all();
        $root->permissions()->syncWithoutDetaching($rootPermissions->pluck('id'));

        $admin = Role::where('role', '=', EnumsRole::ADMIN->value)->first();
        $adminPermissions = ModelsPermission::all();
        $admin->permissions()->syncWithoutDetaching($adminPermissions->pluck('id'));

        $associate = Role::where('role', '=', EnumsRole::ASSOCIATE->value)->first();
        $associatePermissions = ModelsPermission::where('permission', 'LIKE', '%' . EnumsRole::PROVIDER->value . '%')
            ->whereNot('permission', 'LIKE', '%create%')
            ->whereNot('permission', 'LIKE', '%update%')
            ->whereNot('permission', 'LIKE', '%delete%')
            ->get();
        $associate->permissions()->syncWithoutDetaching($associatePermissions->pluck('id'));

        $provider = Role::where('role', '=', EnumsRole::PROVIDER->value)->first();
        $providerPermissions = ModelsPermission::where(function ($query) {
            $query->orWhere('permission', 'LIKE', '%' . EnumsRole::PROVIDER->value . '%')
                ->orWhere('permission', 'LIKE', '%' . EnumsRole::ASSOCIATE->value . '%');
        })->whereNot('permission', 'LIKE', '%create%')
            ->whereNot('permission', 'LIKE', '%update%')
            ->whereNot('permission', 'LIKE', '%delete%')
            ->get();
        $provider->permissions()->syncWithoutDetaching($providerPermissions->pluck('id'));
    }
}
