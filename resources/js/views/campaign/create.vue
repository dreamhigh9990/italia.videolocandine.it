<template>
	<v-container fluid>
		<v-form ref="form" lazy-validation v-model="valid">
			<v-card>
				<v-card-title>
				<span class="headline">{{ $t('campaign.fields.create') }}</span>
				</v-card-title>
				<v-card-text>
					<v-container grid-list-lg fluid>
						<v-layout wrap>
							<v-flex xs12 sm12 md12>
								<v-text-field v-model="campaignForm.name" :label="$t('campaign.fields.name')" :rules="nameRules"></v-text-field>
							</v-flex>
							<v-flex xs6 sm6 md3>
								<v-menu
								:close-on-content-click="true"
								v-model="menu_date_start"
								offset-y
								>
									<template v-slot:activator="{ on }">
										<v-layout align-center style="max-width: 140px">
											<v-btn v-on="on" icon> <v-icon>event</v-icon></v-btn>
											<v-text-field
											v-on="on"
											v-model="campaignForm.start_date"
											:label="$t('labels.start_date')"
											readonly
											:rules="date1Rules"
											@blur="date1 = parseDate(campaignForm.start_date)"
											>
											</v-text-field>
										</v-layout>
									</template>
									<v-date-picker
									v-model="date1"
									:locale="getLocale()">
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs6 sm6 md3>
								<v-menu
								:close-on-content-click="false"
								v-model="menu_time_start"
								offset-y
								>
									<template v-slot:activator="{ on }">
										<v-layout align-center style="max-width: 100px">
											<v-btn v-on="on" icon> <v-icon>access_time</v-icon></v-btn>
											<v-text-field v-on="on" v-model="campaignForm.start_time" :label="$t('labels.start_time')" readonly style="width: 100px;">
											</v-text-field>
										</v-layout>
									</template>
									<v-time-picker v-model="campaignForm.start_time" format="24hr">
									</v-time-picker>
								</v-menu>
							</v-flex>
							<v-flex xs6 sm6 md3>
								<v-menu
								:close-on-content-click="true"
								v-model="menu_date_end"
								offset-y
								>
									<template v-slot:activator="{ on }">
										<v-layout align-center style="max-width: 140px">
											<v-btn v-on="on" icon> <v-icon>event</v-icon></v-btn>
											<v-text-field
											v-on="on"
											v-model="campaignForm.end_date"
											:label="$t('labels.end_date')"
											readonly
											:rules="date2Rules"
											@blur="date2 = parseDate(campaignForm.end_date)">
											</v-text-field>
										</v-layout>
									</template>
									<v-date-picker
									v-model="date2"
									:locale="getLocale()">
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs6 sm6 md3>
								<v-menu
								:close-on-content-click="false"
								v-model="menu_time_end"
								offset-y
								>
									<template v-slot:activator="{ on }">
										<v-layout align-center style="max-width: 100px">
											<v-btn v-on="on" icon> <v-icon>access_time</v-icon></v-btn>
											<v-text-field v-on="on" v-model="campaignForm.end_time" :label="$t('labels.end_time')" readonly style="width: 100px;">
											</v-text-field>
										</v-layout>
									</template>
									<v-time-picker v-model="campaignForm.end_time" format="24hr">
									</v-time-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 sm12 md12>
								<v-textarea
								v-model="campaignForm.description"
								:label="$t('campaign.fields.description')"
								></v-textarea>
							</v-flex>
							<v-flex xs12 sm4 md4>
								<v-checkbox
							      v-model="campaignForm.sponsor"
							      :label="$t('campaign.fields.sponsor')"
							    ></v-checkbox>
							</v-flex>
							<v-flex xs12 sm8 md8>
								<v-select
					            v-model="campaignForm.days"
					            :items="days"
					            attach
					            chips
					            :label="$t('campaign.fields.days')"
					            multiple
					            :rules="daysRule"
						        >
						        	<template v-slot:prepend-item>
										<v-list-item
										ripple
										@click="toggle"
										>
										<v-list-tile-action>
										<v-icon>{{ icon }}</v-icon>
										</v-list-tile-action>
										<v-list-item-content>
										<v-list-item-title>{{ $t('labels.select_all')}}</v-list-item-title>
										</v-list-item-content>
										</v-list-item>
										<v-divider class="mt-2"></v-divider>
									</template>
						        </v-select>
						    </v-flex>
								<v-flex xs12 sm12 md12>
									<label class="v-btn primary" style="padding: 6px 14px; cursor: pointer">
										<input
										type="file"
										@change="prepareMedia"
										name="media"
										id="media"
										style="display: none"
										multiple>
										{{ $t('buttons.choose_files')}}
										<v-icon right dark>cloud_upload</v-icon>
									</label>
						    </v-flex>
						    <v-flex xs12 sm12 md12>
						    	<v-toolbar color="grey lighten-2">
									<v-toolbar-title>{{ $t('labels.new_files') }}</v-toolbar-title>
									<template>
										<v-dialog v-model="videoDialog" max-width="1200px">
											<VideoCampaignForm :item="video_item" :groups="groups" :monitors="monitors" :shops="shops" @cancel="videoDialog = false" @saveNew="saveNewMedia"></VideoCampaignForm>
										</v-dialog>
									</template>
								</v-toolbar>
								<template>
									<v-dialog v-model="imagePreview" max-height="700" max-width="900">
										<v-img
						                  	:src="previewSrc" contain max-height="700" max-width="900"
						                ></v-img>
									</v-dialog>
								</template>
								<template>
									<v-dialog v-model="videoPreview" width="720" height="600">
										<video width="720" height="560" controls autoplay muted loop :src="previewSrcVideo"></video>
									</v-dialog>
								</template>
						    	<v-data-table
								:headers="headers"
								:items="files"
								:loading="isUploading"
								:no-data-text="$t('labels.no_data')"
								:loading-text="$t('labels.loading_items')"
								:items-per-page="100"
								:footer-props="footer_props"
								hide-default-footer
								class="elevation-1"
								>
									<template v-slot:item.is_video="{ item }">
										<v-icon>
											{{ getVideoIcon(item) }}
										</v-icon>
									</template>
									<template v-slot:item.original="{ item }">
										<div style="cursor: pointer;" @click="previewMedia(item.name, item.file_type)">
											{{ item.original }}
										</div>
									</template>
									<template v-slot:item.group_ids="{ item }">
										<media-group :item="item" :by_monitor="user.by_monitor" :monitors_all="monitors" :groups_all="groups" @click.native="editNewVideo(item)"></media-group>
									</template>
									<template v-slot:item.group_type_id="{ item }">
										{{ getGroupType(item.group_type_id) }}
									</template>
									<template v-slot:item.aspect_ratio_id="{ item }">
										<v-layout wrap align-center>
											<v-img :src="getScreenIcon(item.aspect_ratio_id, item.group_type_id)" contain max-width="40" max-height="40"></v-img>
											<v-img :src="getMonitorIcon(item.aspect_ratio_id, item.group_type_id)" contain max-width="40" max-height="40"></v-img>
										</v-layout>
									</template>
									<template v-slot:item.start_time="{ item }">
										{{ getStartTime(item) }}
									</template>
									<template v-slot:item.end_time="{ item }">
										{{ getEndTime(item) }}
									</template>
									<template v-slot:item.actions="{ item }">
										<v-icon
										small
										class="mr-2"
										@click="editNewVideo(item)"
										>
											edit
										</v-icon>
										<v-icon
										small
										@click="remove(item)"
										>
											delete
										</v-icon>
									</template>
								</v-data-table>
						    </v-flex>
						</v-layout>
					</v-container>
				</v-card-text>
				<v-card-actions>
					<v-container grid-list-md fluid>
						<v-layout justify-end>
							<v-btn to="/admin/campaigns">{{ $t('buttons.cancel')}}</v-btn>
							<v-btn :loading="isUploading1" color="info" @click="save1">Save and list</v-btn>
							<v-btn :loading="isUploading2" color="info" @click="save2">Save and edit</v-btn>
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
	import ImagePreview from '../../components/ImagePreview'
	import VideoPreview from '../../components/VideoPreview'
	import VideoCampaignForm from '../../components/VideoCampaignForm'
	import MediaGroup from '../../components/MediaGroup'

  	export default {
  		components: {
            ImagePreview, VideoPreview, VideoCampaignForm, MediaGroup
        },
  		data () {
			return {
				valid: false,
				isUploading : false,
				isUploading1 : false,
				isUploading2 : false,

				footer_props: {
					itemsPerPageText: "Righe per pagina",
					itemsPerPageOptions: [100],
				},
				videoDialog: false,

				editedIndex: -1,
				date1: '',
				date2: '',
				video_date1: '',
				video_date2: '',
				video_menu_date_start: false,
				video_menu_time_start: false,
				video_menu_date_end: false,
				video_menu_time_end: false,
				menu_date_start: false,
				menu_time_start: false,
				menu_date_end: false,
				menu_time_end: false,
				videoPreview: false,
				imagePreview: false,
				previewSrc: '',
				previewSrcVideo: '',
				user: {},
				campaignForm: {
					name: '',
					description: '',
					sponsor: false,
					start_date: '',
					days: ['Lun', 'Mar', 'Mer', 'Giov', 'Ven', 'Sab', 'Dom'],
					start_time: '07:00',
					end_date: '',
					end_time: '21:00',
				},
				video_item: {},
				videoForm: {
					file_type: '',
					start_date: '',
					days: [],
					start_time: '',
					end_date: '',
					end_time: '',
					duration: '',
					group_type_id: '',
					aspect_ratio_id: '',
					availableGroups: [],
					groups: [],
				},
				days: ['Lun', 'Mar', 'Mer', 'Giov', 'Ven', 'Sab', 'Dom'],
				files: [],
				types: [],
				ratios: [],
				groups: [],
				monitors: [],
				shops: [],

				nameRules: [
			        v => !!v || this.$t('labels.name_required'),
			    ],
			    date1Rules: [
			        v => !!v || this.$t('labels.start_date_required'),
			    ],
			    date2Rules: [
			        v => !!v || this.$t('labels.end_date_required'),
			    ],
			    daysRule: [
			        v => v.length > 0 || this.$t('labels.day_required'),
			    ],
			}
		},
	    created(){
            this.init();
	    },
	    watch: {
	    	date1(val){
	    		this.campaignForm.start_date = helper.formatDate(this.date1);
	    	},
	    	date2(val){
	    		this.campaignForm.end_date = helper.formatDate(this.date2);
	    	},
	    	video_date1(val){
	    		this.videoForm.start_date = helper.formatDate(this.video_date1);
	    	},
	    	video_date2(val){
	    		this.videoForm.end_date = helper.formatDate(this.video_date2);
	    	},
	    	videoDialog(val){
				val || this.closeVideoForm();
			}
	    },
	    computed: {
	    	isByMonitor(){
	    		return this.user === null ? this.$t('videos.fields.groups') : this.user.by_monitor;
	    	},
			headers(){
				return [
					{ text: "Media", align: 'center', value: 'is_video', sortable: false},
					{ text: this.$t('videos.fields.start_time'), value: "start_time", align: 'center', sortable: false},
					{ text: this.$t('videos.fields.end_time'), value: "end_time", align: 'center', sortable: false},
					{ text: this.$t('labels.original'), align: 'center', value: 'original'},
					{ text: this.$t('videos.fields.size'), align: 'center', value: 'filesize'},
					{ text: this.$t('videos.fields.duration'), align: 'center', value: 'duration'},
					{ text: this.isByMonitor === '0' ? this.$t('videos.fields.groups') : this.$t('labels.monitors'), align: 'center', value: 'group_ids', sortable: false},
					{ text: "Aspect Ratio", align: 'center', value: 'aspect_ratio_id', sortable: false},
					{ text: this.$t('labels.actions'), value: 'actions', sortable: false }
				]
			},
	    	allDays () {
		        return this.campaignForm.days.length === this.days.length
		    },
		    someDays () {
		        return this.campaignForm.days.length > 0 && !this.allDays
		    },
	    	icon () {
			    if (this.allDays) return 'close'
			    if (this.someDays) return 'indeterminate_check_box'
			    return 'check_box_outline_blank'
			},
	    },
	    methods: {
	    	init(){
	    		axios.get(settings.root_url + '/api/campaigns/load')
					.then(response => {
						this.user = response.data.user;
						this.icons = response.data.icons;
						this.types = response.data.types;
						this.ratios = response.data.ratios;
						this.groups = response.data.groups;
						this.monitors = response.data.monitors;
						this.shops = response.data.shops;
					}).catch(response => {
						console.log("error");
					});
	    	},
	    	closeVideoForm() {
        		this.videoDialog = false
      		},
      		saveNewMedia(new_media){
				for (var i = this.files.length - 1; i >= 0; i--) {
					if(this.files[i].index == new_media.index){
						this.files[i].start_date = new_media.date1;
						this.files[i].end_date = new_media.date2;
						this.files[i].start_time = new_media.start_time;
						this.files[i].end_time = new_media.end_time;
						this.files[i].days = new_media.days.toString();
						this.files[i].duration = new_media.duration;
						this.files[i].group_ids = new_media.groups.map(function(el){ return el.id }).toString();
						this.files[i].monitor_ids = new_media.monitor_ids.toString();
						break;
					}
				}
				console.log(new_media)
				this.videoDialog = false;
			},
			editNewVideo (item) {
				this.video_item.editedIndex = item.index;
				this.video_item = Object.assign({}, item);
	   			this.video_item.is_new = true;
				this.video_item.media_type="video",
				this.video_item.start_date = helper.formatDate(item.start_date);
				this.video_item.end_date = helper.formatDate(item.end_date);
				this.video_item.date1 = item.start_date;
				this.video_item.date2 = item.end_date;
				this.video_item.days = item.days != null? item.days.split(',') : null;
				this.video_item.by_monitor = this.user.by_monitor;
				this.video_item.group_ids = item.group_ids;
				this.video_item.monitor_ids = item.monitor_ids;
				this.videoDialog = true
	    },
	    prepareMedia(e){
	    		let items = e.target.files || e.dataTransfer.files;
	    		if (items.length > 0) {
	    			this.isUploading = true;
	    			var counter = 0;
                    for (var i = 0; i < items.length; i++) {
                		let campaignForm = new FormData();
                        let attachment = items[i];
                        if(attachment.name.indexOf("FLL") == -1 && attachment.name.indexOf("CTF") == -1){
                        	this.$toastr.e(
                        		attachment.name,
						      	this.$t('labels.no_type_match'),
						    );
							counter++;
							if(counter >= items.length)
		            			this.isUploading = false;
                        	continue;
                        }
                        campaignForm.append('media', attachment);
                        axios.post(settings.root_url + '/api/image-upload', campaignForm)
		                .then(response => {
		                	if(response.data.result == "success"){
			                	counter++;
			                	if(response.data.frame_rate == 25 || response.data.frame_rate == 0){
				                	var file = {
				                		'name': response.data.filename,
				                		'original': response.data.original,
				                		'file_type': response.data.file_type,
				                		'width': response.data.width,
				                		'height': response.data.height,
				                		'duration': response.data.duration,
				                		'group_ids': '',
				                		'monitor_ids': '',
				                		'group_type_id': response.data.group_type_id,
				                		'filesize': response.data.filesize,
				                		'aspect_ratio_id': response.data.aspect_ratio_id,
				                		'start_date': this.date1,
				                		'end_date': this.date2,
				                		'start_time': this.campaignForm.start_time,
				                		'end_time': this.campaignForm.end_time,
				                		'days': this.campaignForm.days.toString(),
				                		'index': this.files.length,
				                	}
				                	this.files.push(file);
			                	} else {
			                		this.$toastr.e(
		                        		response.data.original,
								      	this.$t('labels.no_framerate_match'),
								    );
			                	}
			            		if(counter >= items.length)
			            			this.isUploading = false;
		                	}
		                }).catch(error => {
		                	this.isUploading = false;
		                });
                    }
                }
	    	},
            remove(index){
            	var r = confirm('Sei sicuro di voler cancellare questo file?');
	        	if(r == true){
            		this.files.splice( index, 1 );
	        	}
						},
			getScreenIcon(ratioId, typeID){
				return settings.root_url + '/images/' + this.getIcon(ratioId, typeID).screen_icon
			},
			getMonitorIcon(ratioId, typeID){
				return settings.root_url + '/images/' + this.getIcon(ratioId, typeID).monitor_icon
			},
			getIcon(ratioId, typeID){
				return this.icons.find(function(icon){
					return icon.aspect_ratio_id == ratioId && icon.group_type_id == typeID
				})
			},
			save1(){
				// console.log(this.files);
				if (this.$refs.form.validate()) {
					this.isUploading1 = true
					axios.post(settings.root_url + '/api/campaigns/add-new', {
						name: this.campaignForm.name,
						description: this.campaignForm.description,
						sponsor: this.campaignForm.sponsor,
						days: this.campaignForm.days.toString(),
						start_date: this.date1,
						start_time: this.campaignForm.start_time,
						end_date: this.date2,
						end_time: this.campaignForm.end_time,
						media: this.files,
					})
					.then(response =>  {
						this.isUploading1 = false
						this.$router.push({name: 'campaigns'});
					}).catch(error => {
						this.isUploading1 = false
					});
				}
			},
			save2(){
				// console.log(this.files);
				if (this.$refs.form.validate()) {
					this.isUploading2 = true
					axios.post(settings.root_url + '/api/campaigns/add-new', {
						name: this.campaignForm.name,
						description: this.campaignForm.description,
						sponsor: this.campaignForm.sponsor,
						days: this.campaignForm.days.toString(),
						start_date: this.date1,
						start_time: this.campaignForm.start_time,
						end_date: this.date2,
						end_time: this.campaignForm.end_time,
						media: this.files,
					})
					.then(response =>  {
						this.isUploading2 = false
						this.$router.push({
							name: "campaign-edit",
							params: { id: response.data.id }
						})
					}).catch(error => {
						this.isUploading2 = false
					});
				}
			},
			getVideoIcon(item){
				if(item.file_type == "video") return "videocam";
				else if(item.file_type == "image") return "photo"
			},
			getVideoGroups(video){
				return this.groups.filter(function(group) {
					return video.group_ids.includes(group.id) == true;
				})
			},
			getGroupName(groupId){
	      		var group = this.groups.filter(function(group){
	      			return group.id == groupId;
	      		});
	      		if(group.length)
	      			return group[0].name;
	      		else
	      			return "Unknow group";
	      	},
	      	getRatioName(ratioId){
	      		var ratio = this.ratios.filter(function(ratio){
	      			return ratio.id == ratioId;
	      		});
	      		return ratio[0].name;
	      	},
	      	getGroupType(id){
				var types = this.types.filter(function(type){
					return type.id == id;
				})
				return types[0].name
			},
	      	toggle () {
				this.$nextTick(() => {
					if (this.allDays) {
						this.campaignForm.days = []
					} else {
						this.campaignForm.days = this.days.slice()
					}
				})
			},
			getLocale(){
				return helper.getLocale();
			},
		    parseDate (date) {
		    	return helper.parseDate(date);
		    },
		    getStartTime(item){
	    		return helper.formatDate(item.start_date) + ' ' + item.start_time;
	    	},
	    	getEndTime(item){
	    		return helper.formatDate(item.end_date) + ' ' + item.end_time;
	    	},
	    	getAvailableGroups(media){
	    		return this.groups.filter(function(group){
	    			return group.aspect_ratio_id == media.aspect_ratio_id && group.group_type_id == media.group_type_id
	    		})
	    	},
	    	previewMedia(filename, type){
	    		if(type == 'image'){
		    		this.previewSrc = settings.root_url + '/media/images/' + filename;
		    		this.imagePreview = true;
	    		} else if(type == 'video'){
		    		this.previewSrcVideo = settings.root_url + '/media/videos/' + filename;
		    		this.videoPreview = true;
	    		}
	    	},
	    }
  	}
</script>