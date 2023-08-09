<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShopsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shops', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('description');
            $table->string('open1');
            $table->string('close1');
            $table->string('open2');
            $table->string('close2');
            $table->string('open3');
            $table->string('close3');
            $table->string('open4');
            $table->string('close4');
            $table->string('open5');
            $table->string('close5');
            $table->string('open6');
            $table->string('close6');
            $table->string('open7');
            $table->string('close7');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shops');
    }
}
