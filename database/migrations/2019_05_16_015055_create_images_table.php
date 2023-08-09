<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('image');
            $table->float('size');
            $table->string('duration');
            $table->string('width');
            $table->string('height');
            $table->string('start_time');
            $table->string('end_time');
            $table->string('days');
            $table->string('aspect_ratio_id');
            $table->string('campaign_id');

            $table->foreign('aspect_ratio_id')->references('id')->on('aspectratios');
            // $table->foreign('aspect_ratio_id')->references('id')->on('aspectratios_it');
            $table->foreign('campaign_id')->references('id')->on('campaigns');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('images');
    }
}
