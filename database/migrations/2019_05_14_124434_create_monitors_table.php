<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMonitorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('monitors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('monitor_name');
            $table->string('location');
            $table->string('type');
            $table->string('aspect_ratio');
            $table->string('rotation');
            $table->string('shop_id');
            $table->string('group_id');
            $table->string('username');
            $table->string('password');

            $table->foreign('shop_id')->references('id')->on('shops');
            $table->foreign('group_id')->references('id')->on('groups');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('monitors');
    }
}
