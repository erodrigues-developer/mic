<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private const TABLE = 'providers';
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create(self::TABLE, function (Blueprint $table) {
            $table->id();
            $table->boolean('active');
            $table->string('name');
            $table->string('document');
            $table->string('gender')->nullable();
            $table->date('birthdate');
            $table->string('service_location');
            $table->string('specialty');
            $table->string('cellphone_number');
            $table->string('phone_number')->nullable();
            $table->string('marital_status');
            $table->string('zip_code');
            $table->string('street');
            $table->string('number');
            $table->string('complement')->nullable();
            $table->string('neighborhood');
            $table->string('city');
            $table->string('state');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists(self::TABLE);
    }
};
