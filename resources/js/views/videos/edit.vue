<template>
	<v-container fluid>
		<v-form ref="form" lazy-validation v-model="valid">
			<v-card>
				<v-card-title>
				<span class="headline">{{ $t('videos.fields.edit') }}</span>
				</v-card-title>
				<v-card-text>
					<v-container fluid grid-list-md>
						<div class="subtitle-1 text-center mt-2">{{ name }}</div>
						<v-layout wrap>
							<v-flex xs12 sm12 md12>
								<video width="320" height="240" controls :src="src"></video>
							</v-flex>
							<v-flex md6>
								<v-menu
								:close-on-content-click="false"
								v-model="menu_date_start"
								>
									<template v-slot:activator="{ on }">
										<v-layout align-center style="max-width: 160px">
											<v-btn v-on="on" icon> <v-icon>event</v-icon></v-btn>
											<v-text-field
											v-on="on"
											v-model="videoForm.start_date"
											:label="$t('labels.start_date')"
											readonly
											:rules="date1Rules"
											@blur="date1 = parseDate(videoForm.start_date)"
											></v-text-field>
										</v-layout>
									</template>
									<v-date-picker v-model="date1" @input="menu_date_start = false">
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
											v-model="videoForm.start_time"
											:label="$t('labels.start_time')"
											readonly></v-text-field>
										</v-layout>
									</template>
									<v-time-picker v-model="videoForm.start_time">
									</v-time-picker>
								</v-menu>
							</v-flex>
							<v-flex md6>
								<v-menu
								:close-on-content-click="false"
								v-model="menu_date_end"
								>
									<template v-slot:activator="{ on }">
										<v-layout align-center style="max-width: 160px">
											<v-btn v-on="on" icon> <v-icon>event</v-icon></v-btn>
											<v-text-field
											v-on="on"
											v-model="videoForm.end_date"
											:label="$t('labels.end_date')"
											readonly
											@blur="date2 = parseDate(videoForm.end_date)">
											</v-text-field>
										</v-layout>
									</template>
									<v-date-picker v-model="date2" @input="menu_date_end = false">
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
											v-model="videoForm.end_time"
											:label="$t('labels.end_time')"
											readonly>
											</v-text-field>
										</v-layout>
									</template>
									<v-time-picker v-model="videoForm.end_time">
									</v-time-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 sm6 md6>
								<v-checkbox
							      v-model="videoForm.sponsor"
							      :label="$t('labels.sponsor')"
							    ></v-checkbox>
							</v-flex>
							<v-flex xs12 sm6 md6>
								<v-select
									v-model="videoForm.days"
									:items="days"
									attach
									chips
									:label="$t('labels.days')"
									multiple
								>
									<template v-slot:prepend-item>
										<v-list-item
											ripple
											@click="toggle()"
										>
											<v-list-item-action>
												<v-icon :color="videoForm.days.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
											</v-list-item-action>
											<v-list-item-content>
												<v-list-item-title>Select All</v-list-item-title>
											</v-list-item-content>
										</v-list-item>
										<v-divider class="mt-2"></v-divider>
									</template>
								</v-select>
						    </v-flex>
						    <v-flex xs12 sm3 md3>
								<v-text-field v-model="videoForm.duration" :label="$t('videos.fields.duration')" readonly></v-text-field>
						    </v-flex>
						    <v-flex xs12 sm12 md12>
								<!-- <v-select
									v-model="videoForm.groups"
									:items="availableGroups"
									item-text="name"
									item-value="id"
									attach
									chips
									:label="$t('groups.fields.groups')"
									return-object
									multiple
								>
								</v-select> -->
							</v-flex>
						</v-layout>
					</v-container>
				</v-card-text>
				<v-card-actions>
					<v-container fluid>
						<v-layout>
							<v-btn color="red" dark @click="deleteVideo()">{{ $t('buttons.delete') }}</v-btn>
							<v-spacer></v-spacer>
							<v-btn to="/admin/videos">{{ $t('buttons.cancel') }}</v-btn>
							<v-btn color="info" @click="update()">{{ $t('buttons.save') }}</v-btn>
						</v-layout>
					</v-container>
				</v-card-actions>
			</v-card>
		</v-form>
	</v-container>
</template>

<script>
	import { settings } from '../../settings.js'
	import helper from '../../helper.js'
	import Weekdays from '../../components/Weekdays.vue'
  	export default {
  		components: {
            Weekdays
        },
  		data () {
			return {
				valid: false,
				name: '',
				date1: '',
				date2: '',
				menu_date_start: false,
				menu_time_start: false,
				menu_date_end: false,
				menu_time_end: false,
				src: '',
				videoForm: {
					video: '',
					start_date: '',
					days: [],
					start_time: '',
					end_date: '',
					end_time: '',
					duration: '',
					groups: [],
				},
				availableGroups: [],
				groups: [],
			    date1Rules: [
			        v => !!v || 'Start Date is required',
			    ],
			    date2Rules: [
			        v => !!v || 'End Date is required',
			    ],
			    daysRule: [
			        v => v.length > 0 || 'Days is required',
			    ],
			}
		},
		computed: {
			days(){
				return helper.h_getDays()
			},
			isAll () {
        return this.videoForm.days.length === this.days.length
      },
      isSome () {
        return this.videoForm.days.length > 0 && !this.isAll
      },
      icon () {
        if (this.isAll) return 'mdi-close-box'
        if (this.isSome) return 'mdi-minus-box'
        return 'mdi-checkbox-blank-outline'
      },
		},
		watch: {
			date1(val){
				this.videoForm.start_date = helper.formatDate(this.date1);
			},
			date2(val){
				this.videoForm.end_date = helper.formatDate(this.date2);
			}
	  },
		created(){
			this.getVideo(this.$route.params.id);
		},
	    methods: {
	    	getVideo(id){
				axios.get(settings.root_url + '/api/videos/' + id)
		            .then(response => {
		                var video = response.data.video;
		                this.date1 = video.start_date;
		                this.videoForm.start_date = helper.formatDate(video.start_date);
		                this.videoForm.start_time = video.start_time;
		                this.date2 = video.end_date;
		                this.videoForm.end_date = helper.formatDate(video.end_date);
		                this.videoForm.end_time = video.end_time;
		                this.videoForm.video = video.video;
		                this.videoForm.duration = video.duration;
		                this.videoForm.days = video.days.split(',');
		                this.src = settings.root_url + '/media/videos/' + this.videoForm.video;
		                this.groups = response.data.groups;
										this.videoForm.groups = this.getVideoGroups(video);
										this.name = video.original;
		                let self = this;
			    		this.availableGroups = this.groups.filter(function(group){
			    			return group.aspect_ratio_id == video.aspect_ratio_id && group.group_type_id == video.group_type_id
			    		})
		            }).catch(response => {
		            	console.log(response);
		            });
	    	},
	    	getVideoGroups(video){
				return this.groups.filter(function(group) {
					return video.group_ids.includes(group.id) == true;
				})
			},
			deleteVideo () {
				var r = confirm(this.$t('videos.fields.delete_confirm'));
				if(r == true){
					axios.post(settings.root_url + '/api/videos/delete/' + this.$route.params.id)
					.then(response =>  {
						this.$router.push({ name: 'videos' })
					})
					.catch(error => {
					});
				}
			},
			update(){
                axios.post(settings.root_url + '/api/videos/update/' + this.$route.params.id, {
	                start_date: this.date1,
	                start_time: this.videoForm.start_time,
	                end_date: this.date2,
	                end_time: this.videoForm.end_time,
	                duration: this.videoForm.duration,
	                days: this.videoForm.days.toString(),
	                group_ids: this.videoForm.groups.map(function(group){ return group.id; }).toString(),
                })
                .then(response =>  {
                	this.$router.push({name: 'videos'});
                }).catch(error => {
                });
			},
				parseDate (date) {
					return helper.parseDate(date);
				},
				toggle() {
					this.$nextTick(() => {
						if (this.isAll) {
							this.videoForm.days = []
						} else {
							this.videoForm.days = this.days.slice()
						}
					})
				},
			},
  	}
</script>