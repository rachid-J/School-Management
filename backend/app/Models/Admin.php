<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{

    protected $fillable = [
        'full_name',
        'gender',
        'phone',
        'address',
        'profile_photo',
        'date_of_birth',
    ];
    public function user()
    {
        return $this->morphOne(User::class, 'roleable');
    }
}
