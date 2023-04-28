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
        Schema::create('lobbies', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->integer('people_count')->default(4);
            $table->string('creator')->default('Anonymus');
            $table->string('password')->nullable();
            $table->boolean('is_finished')->default(false);
            $table->integer('round_count')->default(4);
            $table->integer('round_time')->default(60);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lobbies');
    }
};
