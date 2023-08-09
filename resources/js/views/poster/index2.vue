<style scoped>

</style>

<template>
	<v-container fluid>
		<v-card>
			<v-card-title>
			<span class="headline">{{ $t('labels.edit_poster') }}</span>
			</v-card-title>
			<v-card-text>
				<v-container fluid grid-list-md>
					<v-layout wrap justify-center>
						<v-flex xs12 sm3 md3 class="mr-5">
							<v-img :src="imageForm.src" contain>
							</v-img>
						</v-flex>
						<v-flex xs12 sm8 md8>
							<v-form ref="form" lazy-validation v-model="valid">
								<v-layout row wrap>
									<v-flex xs12 sm12 md12>
										<v-text-field
										v-model="imageForm.name"
										:label="$t('labels.poster')"
										:rules="nameRules">
										</v-text-field>
									</v-flex>
									<v-flex md6>
										<v-menu
										:close-on-content-click="true"
										v-model="menu_date_start"
										>
											<template v-slot:activator="{ on }">
												<v-text-field
												v-model="imageForm.start_date"
												:label="$t('labels.start_date')"
												readonly
												style="width: 150px;"
												prepend-icon="event"
												v-on="on"
												:rules="date1Rules"
												@blur="date1 = parseDate(imageForm.start_date)">
												</v-text-field>
											</template>
											<v-date-picker v-model="date1" locale="it">
											</v-date-picker>
										</v-menu>
									</v-flex>
									<v-flex md6>
										<v-menu
										:close-on-content-click="false"
										v-model="menu_time_start"
										>
											<template v-slot:activator="{ on }">
												<v-text-field slot="activator" v-model="imageForm.start_time"  :label="$t('labels.start_time')" readonly style="width: 120px;" v-on="on"></v-text-field>
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
												<v-text-field
												slot="activator"
												v-model="imageForm.end_date"
												:label="$t('labels.end_date')"
												readonly
												style="width: 150px;"
												prepend-icon="event"
												v-on="on"
												:rules="date2Rules"
												@blur="date2 = parseDate(imageForm.end_date)">
													
												</v-text-field>
											</template>
											<v-date-picker v-model="date2" locale="it">
											</v-date-picker>
										</v-menu>
									</v-flex>
									<v-flex md6>
										<v-menu
										:close-on-content-click="false"
										v-model="menu_time_end"
										>
											<template v-slot:activator="{ on }">
												<v-text-field slot="activator" v-model="imageForm.end_time"  :label="$t('labels.end_time')" readonly style="width: 120px;" v-on="on"></v-text-field>
											</template>
											<v-time-picker v-model="imageForm.end_time" format="24hr">
											</v-time-picker>
										</v-menu>
									</v-flex>
									<v-flex xs12 sm12 md6>
										<v-text-field
										v-model="imageForm.duration"
										label="Sec"
										:rules="durationRules"
										type="number">
										</v-text-field>
									</v-flex>
									<!-- <v-flex xs12 sm12 md12>
										<v-select
							            v-model="imageForm.groups"
							            :items="imageForm.availableGroups"
							            item-text="name"
										item-value="id"
							            attach
							            chips
							            :label="$t('groups.fields.groups')"
							            return-object
							            multiple
								        >
								        </v-select>
									</v-flex> -->
								</v-layout>
							</v-form>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card-text>
			<v-card-actions>
				<v-container fluid>
					<v-layout>
						<v-btn color="red" dark @click="deletePoster()">{{ $t('buttons.delete') }}</v-btn>
						<v-spacer></v-spacer>
						<v-btn to="/admin/poster"> {{ $t('buttons.cancel') }}</v-btn>
						<v-btn @click="gotoEditPage">MODIFICA LOCANDINA</v-btn>
						<v-btn color="info" @click="update()">{{ $t('buttons.save') }}</v-btn>
					</v-layout>
				</v-container>
			</v-card-actions>
		</v-card>
	</v-container>
</template>
<script>
	import { settings } from '../../settings.js'
	import helper from '../../helper.js'
  	export default {
  		components: {
		},
  		data () {
			return {
				menu_date_start: false,
				menu_time_start: false,
				menu_date_end: false,
				menu_time_end: false,
				date1: '',
				date2: '',
				valid: false,
				imageForm: {
					src: '',
					name: '',
					start_date: '',
					start_time: '',
					end_date: '',
					end_time: '',
					duration: '',
					groups: [],
					availableGroups: [],
					saved_poster_id: '',
				},
				groups: [],

				nameRules: [
			        v => !!v || this.$t('labels.name_required'),
			    ],
				date1Rules: [
			        v => !!v || this.$t('labels.start_date_required'),
			    ],
			    date2Rules: [
			        v => !!v || this.$t('labels.end_date_required'),
			    ],
			    durationRules: [
			        v => !!v || this.$t('labels.end_date_required'),
			    ],
			}
		},
		watch: {
	    	date1(val){
	    		this.imageForm.start_date = helper.formatDate(this.date1);
	    	},
	    	date2(val){
	    		this.imageForm.end_date = helper.formatDate(this.date2);
	    	},
	    },
	    created(){
	    	this.init();
	    },
	    methods: {
	    	init(){
	    		axios.get(settings.root_url + '/api/poster-init/' + this.$route.params.id)
		            .then(response => {
		                this.groups = response.data.groups;

		                var image = response.data.poster;
		                this.imageForm.src = settings.root_url + '/users/' + image.user_id + '/posters/' + image.file;
		                this.date1 = image.start_date;
		                this.imageForm.start_date = helper.formatDate(image.start_date);
		                this.imageForm.start_time = image.start_time;
		                this.date2 = image.end_date;
		                this.imageForm.name = image.name;
		                this.imageForm.end_date = helper.formatDate(image.end_date);
		                this.imageForm.end_time = image.end_time;
		                this.imageForm.duration = parseInt(image.duration);
		                this.imageForm.groups = this.getPosterGroups(image);
		                this.imageForm.availableGroups = this.getAvailableGroups(image);

		                this.imageForm.saved_poster_id = response.data.saved_poster_id;
		            }).catch(response => {
		            	console.log("error");
		            });
	    	},
	    	gotoEditPage(){
		    	this.$router.push({
					name: "poster-edit2",
					params: { id: this.imageForm.saved_poster_id }
				})
				},
			deletePoster(){
				var r = confirm(this.$t('videos.fields.delete_confirm'));
				if(r == true){
					axios.post(settings.root_url + '/api/posters/delete/' + this.$route.params.id)
								.then(response =>  {
						this.$router.push({ name: 'poster' })
								}).catch(error => {

								});
				}
			},
			update(){
				let imageForm = new FormData();
                axios.post(settings.root_url + '/api/posters/update/' + this.$route.params.id,{
                	name: this.imageForm.name,
                	duration: this.imageForm.duration,
                	start_date: this.date1,
                	start_time: this.imageForm.start_time,
                	end_date: this.date2,
                	end_time: this.imageForm.end_time,
                	duration: this.imageForm.duration,
                	group_ids: this.imageForm.groups.map(function(el){ return el.id }),
                })
                .then(response =>  {
                	this.$router.push({name: 'poster'});
                }).catch(error => {
                });
			},
			parseDate (date) {
		    	return helper.parseDate(date);
		    },
		    getAvailableGroups(media){
	    		return this.groups.filter(function(group){
	    			return group.aspect_ratio_id == media.aspect_ratio_id && group.group_type_id == media.group_type_id
	    		})
	    	},
	    	getPosterGroups(poster){
				return this.groups.filter(function(group) {
					return poster.group_ids.includes(group.id) == true;
				})
			},
	    }
  	}
</script>