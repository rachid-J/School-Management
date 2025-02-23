<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\User;
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
        // User::factory(10)->create();
        $admin = Admin::create([
            'full_name' => 'Rachid Admin',
            'gender'    => 'male',
            'phone' => '0612345678',
            'address'   => '123 Main St',
            'profile_photo' => 'photo.jpg',
            'date_of_birth' => '1980-01-01',
        ]);

        User::factory()->create([
            'email' => 'Rachid@Gmail.com',
            'password'=> '12345678',
            'roleable_id'    => $admin->id,
            'roleable_type'  => Admin::class,
        ]);
    }
}
