<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RolesSeed::class,
            PermissionsSeed::class,
            PermissionRoleSeed::class,
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Associado',
            'email' => 'associado@mic.com',
            'role_id' => 3,
            'password' => Hash::make('Associado@123'),
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Provider',
            'email' => 'provider@mic.com',
            'role_id' => 4,
            'password' => Hash::make('Provider@123'),
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@mic.com',
            'role_id' => 2,
            'password' => Hash::make('Admin@123'),
        ]);
    }
}
