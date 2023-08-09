<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAspectratioIconsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aspectratio_icons', function (Blueprint $table) {
            $table->increments('id');
            $table->string('screen_icon', 50);
            $table->integer('aspect_ratio_id');
            $table->integer('group_type_id');
            $table->string('monitor_icon', 50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('aspectratio_icons');
    }
}
