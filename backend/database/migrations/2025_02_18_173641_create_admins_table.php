<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string('full_name'); 
            $table->enum('gender', ['male', 'female']); 
            $table->string('phone')->nullable(); 
            $table->string('address')->nullable(); 
            $table->string('profile_photo')->nullable(); 
            $table->date( 'date_of_birth',);
            $table->timestamps();
        });

        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->string('full_name'); 
            $table->enum('gender', ['male', 'female']); 
            $table->string('employee_id')->unique(); 
            $table->string('phone')->nullable(); 
            $table->string('email')->unique(); 
            $table->string('address')->nullable(); 
            $table->string('profile_photo')->nullable(); 
            $table->string('subject')->nullable(); 
            $table->string('qualification')->nullable(); 
            $table->integer('years_of_experience')->default(0); 
            $table->date('hire_date')->nullable(); 
            $table->timestamps();
        });
        // Schema::create('students', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('full_name'); 
        //     $table->string('student_id')->unique(); 
        //     $table->date('date_of_birth'); 
        //     $table->enum('gender', ['male', 'female']); 
        //     $table->string('address')->nullable(); 
        //     $table->string('profile_photo')->nullable(); 
        //     $table->foreignId('class_id')->constrained()->onDelete('cascade'); 
        //     $table->string('parent_name')->nullable(); 
        //     $table->string('parent_phone')->nullable();
        //     $table->enum('status', ['active', 'inactive', 'graduated'])->default('active'); 
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
