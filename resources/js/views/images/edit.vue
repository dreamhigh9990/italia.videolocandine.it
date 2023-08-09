<style scoped>

</style>

<template>
	<v-container fluid>
		<v-card>
			<v-card-title>
			<span class="headline">{{ $t('images.fields.image_edit') }}</span>
			</v-card-title>
			<v-card-text>
				<v-container fluid grid-list-md>
					<div class="subtitle-1 text-center my-2">{{ name }}</div>
					<v-layout wrap>
						<v-flex md6 style="margin-bottom: 30px">
							<v-img :src="imageForm.src" style="max-width: 300px; max-height: 300px">
							</v-img>
						</v-flex>
						<v-flex md6>
							<label class="v-btn primary mb-2" style="padding: 6px 14px; cursor: pointer">
					            <input
					            type="file"
					            @change="previewMedia"
					            name="media"
					            id="media"
					            style="display: none;"
					            >
					            {{ $t('images.fields.choose_image') }}
					        </label>
					    </v-flex>
						<div style="height: 20px"></div>
						<v-flex md6>
							<v-menu
							:close-on-content-click="true"
							v-model="menu_date_start"
							>
								<template v-slot:activator="{ on }">
									<v-layout align-center style="max-width: 160px">
										<v-btn v-on="on" icon> <v-icon>event</v-icon></v-btn>
										<v-text-field
										v-on="on"
										v-model="imageForm.start_date"
										:label="$t('labels.start_date')"
										readonly>
										</v-text-field>
									</v-layout>
								</template>
								<v-date-picker v-model="imageForm.start_date">
								</v-date-picker>
							</v-menu>
							<v-menu
							:close-on-content-click="false"
							v-model="menu_time_start"
							>
								<template v-slot:activator="{ on }">
									<v-layout align-center style="max-width: 160px">
										<v-btn v-on="on" icon> <v-icon>access_time</v-icon></v-btn>
										<v-text-field
										v-on="on"
										v-model="imageForm.start_time"
										:label="$t('labels.start_time')"
										readonly>
										</v-text-field>
									</v-layout>
								</template>
								<v-time-picker v-model="imageForm.start_time" format="24hr">
								</v-time-picker>
							</v-menu>
						</v-flex>
						<v-flex md6>
							<v-menu
							:close-on-content-click="true"
							v-model="menu_date_end"
							>
								<template v-slot:activator="{ on }">
									<v-layout align-center style="max-width: 160px">
										<v-btn v-on="on" icon> <v-icon>event</v-icon></v-btn>
										<v-text-field
										v-on="on"
										v-model="imageForm.end_date"
										:label="$t('labels.end_date')"
										readonly>
										</v-text-field>
									</v-layout>
								</template>
								<v-date-picker v-model="imageForm.end_date">
								</v-date-picker>
							</v-menu>
							<v-menu
							:close-on-content-click="false"
							v-model="menu_time_end"
							>
								<template v-slot:activator="{ on }">
									<v-layout align-center style="max-width: 160px">
										<v-btn v-on="on" icon> <v-icon>access_time</v-icon></v-btn>
										<v-text-field
										v-on="on"
										v-model="imageForm.end_time"
										:label="$t('labels.end_time')"
										readonly>
										</v-text-field>
									</v-layout>
								</template>
								<v-time-picker v-model="imageForm.end_time" format="24hr">
								</v-time-picker>
							</v-menu>
						</v-flex>
						<v-flex xs12 sm12 md12>
							<v-select
								v-model="imageForm.days"
								:items="days"
								attach
								chips
									:label="$t('labels.days')"
								multiple
							></v-select>
						</v-flex>
						<v-flex xs12 sm3 md3>
							<v-text-field v-model="imageForm.duration" :label="$t('videos.fields.duration')" type="number"></v-text-field>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card-text>
			<v-card-actions>
				<v-container fluid>
					<v-layout>
						<v-btn color="red" dark @click="deleteImage()">{{ $t('buttons.delete') }}</v-btn>
						<v-spacer></v-spacer>
						<v-btn to="/admin/images"> {{ $t('buttons.cancel') }}</v-btn>
						<v-btn color="info" @click="update()">{{ $t('buttons.save') }}</v-btn>
					</v-layout>
				</v-container>
			</v-card-actions>
		</v-card>
	</v-container>
</template>
<script>
	import helper from '../../helper'
	import { settings } from '../../settings.js'
  	import { VImg, VDatePicker, VTimePicker } from 'vuetify/lib'
  	export default {
  		components: {
  			VImg, VDatePicker, VTimePicker
		},
  		data () {
			return {
				menu_date_start: false,
				menu_time_start: false,
				menu_date_end: false,
				menu_time_end: false,

				name: '',

				imageForm: {
					src: '',
					start_date: '',
					days: [],
					start_time: '',
					end_date: '',
					end_time: '',
					duration: '',
				},
				files: [],
			}
		},
			computed: {
				days(){
					return helper.h_getDays()
				}
			},
	    created(){
            this.getImage(this.$route.params.id);
	    },
	    methods: {
	    	getImage(id){
				axios.get(settings.root_url + '/api/images/' + id)
					.then(response => {
						var image = response.data.image;
						this.imageForm.src = settings.root_url + '/media/images/' + image.image;
						this.imageForm.start_date = image.start_date;
						this.imageForm.start_time = image.start_time;
						this.imageForm.end_date = image.end_date;
						this.imageForm.end_time = image.end_time;
						this.name = image.original;
						this.imageForm.days = image.days.split(',');
						this.imageForm.duration = parseInt(image.duration);
					}).catch(response => {
						console.log("error");
					});
	    	},
	    	previewMedia(e) {
	    		let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createAvatar(files[0]);
            },
            createAvatar(file) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.imageForm.src = e.target.result;
                };
                reader.readAsDataURL(file);
						},
				deleteImage () {
	        	var r = confirm(this.$t('videos.fields.delete_confirm'));
	        	if(r == true){
	        		axios.post(settings.root_url + '/api/images/delete/' + this.$route.params.id)
                    .then(response =>  {
						this.$router.push({ name: 'images' })
                    }).catch(error => {

                    });
	        	}
	      	},
			update(){
				let imageForm = new FormData();
                imageForm.append('image', $('#media')[0].files[0]);
                imageForm.append('start_date', this.imageForm.start_date);
                imageForm.append('start_time', this.imageForm.start_time);
                imageForm.append('end_date', this.imageForm.end_date);
                imageForm.append('end_time', this.imageForm.end_time);
								imageForm.append('days', this.imageForm.days);
								imageForm.append('duration', this.imageForm.duration);
                axios.post(settings.root_url + '/api/images/update/' + this.$route.params.id, imageForm)
                .then(response =>  {
                	this.$router.push({name: 'images'});
                }).catch(error => {
                });
			},
	    }
  	}
</script>