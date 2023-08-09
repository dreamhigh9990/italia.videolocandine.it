<template>
	<v-container fluid>
		<v-form ref="form" lazy-validation v-model="valid">
			<v-card>
				<v-card-title>
				<span class="headline">{{ $t('campaign.fields.edit') }}</span>
				</v-card-title>
				<v-card-text>
					<v-container fluid>
						<v-layout wrap>
							<v-dialog v-model="campaignDateDialog" width="800">
								<v-card>
									<v-container fluid>
										<v-form
									    ref="dateForm"
									    v-model="valid"
									    :lazy-validation="true"
									  	>
											<v-layout wrap>
												<v-flex xs6 sm6 md6>
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
																v-model="date_form.start_date"
																:label="$t('labels.start_date')"
																readonly
																:rules="date1Rules"
																@blur="date1 = parseDate(date_form.start_date)">
																</v-text-field>
															</v-layout>
														</template>
														<v-date-picker
														v-model="date1"
														:locale="getLocale()">
														</v-date-picker>
													</v-menu>
												</v-flex>
												<v-flex xs6 sm6 md6>
												<v-menu
												:close-on-content-click="false"
												v-model="menu_time_start"
												offset-y
												>
													<template v-slot:activator="{ on }">
														<v-layout align-center style="max-width: 100px">
															<v-btn v-on="on" icon> <v-icon>access_time</v-icon></v-btn>
															<v-text-field v-on="on" v-model="date_form.start_time" :label="$t('labels.start_time')" readonly style="width: 120px;">
															</v-text-field>
														</v-layout>
													</template>
													<v-time-picker v-model="date_form.start_time" format="24hr">
													</v-time-picker>
												</v-menu>
												</v-flex>
											</v-layout>
											<v-layout wrap>
												<v-flex xs6 sm6 md6>
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
																v-model="date_form.end_date"
																:label="$t('labels.end_date')"
																readonly
																:rules="date2Rules"
																@blur="date2 = parseDate(date_form.end_date)">
																</v-text-field>
															</v-layout>
														</template>
														<v-date-picker
														v-model="date2"
														:locale="getLocale()">
														>
														</v-date-picker>
													</v-menu>
												</v-flex>
												<v-flex xs6 sm6 md6>
												<v-menu
												:close-on-content-click="false"
												v-model="menu_time_end"
												offset-y
												>
													<template v-slot:activator="{ on }">
														<v-layout align-center style="max-width: 100px">
															<v-btn v-on="on" icon> <v-icon>access_time</v-icon></v-btn>
															<v-text-field v-on="on" v-model="date_form.end_time" :label="$t('labels.end_time')" readonly style="width: 120px;">
															</v-text-field>
														</v-layout>
													</template>
													<v-time-picker v-model="date_form.end_time" format="24hr">
													</v-time-picker>
												</v-menu>
												</v-flex>
											</v-layout>
											<v-select
								            v-model="date_form.days"
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
													<v-icon :color="date_form.days.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
													</v-list-tile-action>
													<v-list-item-content>
													<v-list-item-title>{{ $t('labels.select_all')}}</v-list-item-title>
													</v-list-item-content>
													</v-list-item>
													<v-divider class="mt-2"></v-divider>
												</template>
									        </v-select>
									        <v-alert
										      type="error"
										      class="mt-8"
										      outlined
										      style="margin-top: 100px"
										    >
										      {{ $t('campaign.fields.alert') }}
										    </v-alert>
											<v-layout wrap justify-end>
												<v-btn @click="onCancelDate" class="mr-2">{{ $t('buttons.cancel')}}</v-btn>
												<v-btn color="info" @click="onSaveDate">{{ $t('buttons.save')}}</v-btn>
											</v-layout>
										</v-form>
									</v-container>
								</v-card>
							</v-dialog>
							<v-flex xs12 sm12 md12>
								<v-text-field v-model="campaignForm.name" :label="$t('campaign.fields.name')" :rules="nameRules"></v-text-field>
							</v-flex>
							<v-flex sm12>
								<v-textarea
								v-model="campaignForm.description"
								:label="$t('campaign.fields.description')"
								></v-textarea>
							</v-flex>
							<v-flex xs12 sm12 md12>
								<v-layout wrap justify-space-between align-center>
									<v-checkbox
								    v-model="campaignForm.sponsor"
								    :label="$t('campaign.fields.sponsor')"
								    ></v-checkbox>
									<v-btn @click="editDateBulk"><v-icon left>calendar_today</v-icon> {{ $t('buttons.campaign_date_change')}}</v-btn>
							    </v-layout>
							</v-flex>
						    <v-flex xs12 sm6 v-if="user === null || user.by_monitor === '0'">
								<v-select
					            v-model="filter_group"
					            :items="groups"
					            item-text="name"
								item-value="id"
					            :label="$t('labels.filter_by_group')"
					            return-object
						        >
						        </v-select>
						    </v-flex>
						    <v-flex md12>
						    	<v-toolbar color="grey lighten-2">
									<v-toolbar-title>{{ $t('campaign.fields.videos') }}</v-toolbar-title>
									<template>
										<v-dialog v-model="videoDialog" max-width="1200px">
											<VideoCampaignForm :item="video_item" :groups="groups" :monitors="monitors" :shops="shops" @cancel="videoDialog = false" @save="saveVideo" @saveNew="saveNewMedia" @deleteItem="deleteVideo()"></VideoCampaignForm>
										</v-dialog>
									</template>
									<template>
										<v-dialog v-model="videoPreview" width="640" height="480">
											<video-preview :src="previewSrcVideo"></video-preview>
										</v-dialog>
									</template>
								</v-toolbar>
						    	<v-data-table
									:headers="videoHeaders"
									:items="getFilteredVideo()"
									:loading="isloading"
									class="elevation-1"
									:no-data-text="$t('labels.no_data_available')"
									:loading-text="$t('labels.loading_items')"
									:items-per-page="100"
									:footer-props="footer_props"
									>
									<template v-slot:item.original="{ item }">
										<div style="cursor: pointer" @click="previewMedia(item.video, 'video')">{{ item.original }}</div>
									</template>
									<template v-slot:item.group_ids="{ item }">
										<media-group :item="item" :by_monitor="user.by_monitor" :monitors_all="monitors" :groups_all="groups" @click.native="editVideo(item)"></media-group>
									</template>
									<!-- <template v-slot:item.group_type_id="{ item }">
										{{ getGroupType(item.group_type_id) }}
									</template> -->
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
										<v-btn icon @click="editVideo(item)">
											<v-icon>edit</v-icon>
										</v-btn>
										<!-- <v-icon
										small
										@click="deleteVideo(item)"
										>
											delete
										</v-icon> -->
									</template>
								</v-data-table>
						    </v-flex>
						    <v-flex md12>
							    <br><br>
						    	<v-toolbar color="grey lighten-2">
									<v-toolbar-title>{{ $t('campaign.fields.images') }}</v-toolbar-title>
									<template>
										<v-dialog v-model="imageDialog" max-width="1200px">
											<VideoCampaignForm :item="video_item" :groups="groups" :monitors="monitors" :shops="shops" @cancel="imageDialog = false" @save="saveImage" @saveNew="saveNewMedia" @deleteItem="deleteImage()"></VideoCampaignForm>
										</v-dialog>
									</template>
									<template>
										<v-dialog v-model="imagePreview" max-height="700" max-width="900">
											<image-preview :src="previewSrc"></image-preview>
										</v-dialog>
									</template>
								</v-toolbar>
						    	<v-data-table
								:headers="photoHeaders"
								:items="getFilteredPhotos()"
								:loading="isloading"
								class="elevation-1"
								:no-data-text="$t('labels.no_data_available')"
								:loading-text="$t('labels.loading_items')"
								:items-per-page="100"
								:footer-props="footer_props"
								>
									<template v-slot:item.original="{ item }">
										<div style="cursor: pointer" @click="previewMedia(item.image, 'image')">{{ item.original }}</div>
									</template>
									<template v-slot:item.group_ids="{ item }">
										<media-group :item="item" :by_monitor="user.by_monitor" :monitors_all="monitors" :groups_all="groups" @click.native="editImage(item)"></media-group>
									</template>
									<!-- <template v-slot:item.group_type_id="{ item }">
										{{ getGroupType(item.group_type_id) }}
									</template> -->
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
										<v-btn icon @click="editImage(item)">
											<v-icon>edit</v-icon>
										</v-btn>
										<!-- <v-icon
										small
										@click="deleteImage(item)"
										>
											delete
										</v-icon> -->
									</template>
								</v-data-table>
						    </v-flex>
						    <v-flex md12>
						    	<br><br>
						    	<v-toolbar color="grey lighten-2">
									<v-toolbar-title>{{ $t('labels.poster') }}</v-toolbar-title>
									<template>
										<v-dialog v-model="posterDialog" max-width="1200px">
											<VideoCampaignForm :item="video_item" :groups="groups" :monitors="monitors" :shops="shops" @cancel="posterDialog = false" @save="savePoster" @deleteItem="deletePoster()"></VideoCampaignForm>
										</v-dialog>
									</template>
								</v-toolbar>
								<template>
									<v-dialog v-model="posterPreview" max-width="300">
										<image-preview :src="previewSrc"></image-preview>
									</v-dialog>
								</template>
						    	<v-data-table
								:headers="posterHeaders"
								:items="getFilteredPosters()"
								:loading="isloading"
								class="elevation-1"
								:no-data-text="$t('labels.no_data_available')"
								:loading-text="$t('labels.loading_items')"
								:items-per-page="100"
								:footer-props="footer_props"
								>
									<template v-slot:item.name="{ item }">
										<div style="cursor: pointer" @click="previewMedia(item.file, 'poster')">{{ item.name }}</div>
									</template>
									<template v-slot:item.group_ids="{ item }">
										<media-group :item="item" :by_monitor="user.by_monitor" :monitors_all="monitors" :groups_all="groups" @click.native=editPoster(item)></media-group>
									</template>
									<!-- <template v-slot:item.group_type_id="{ item }">
										{{ getGroupType(item.group_type_id) }}
									</template> -->
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
										<v-btn icon @click="editPoster(item)">
											<v-icon>edit</v-icon>
										</v-btn>
										<!-- <v-icon
										>
											delete
										</v-icon> -->
									</template>
								</v-data-table>
						    </v-flex>
						    <h3 style="margin-top: 46px; line-height: 36px;">{{ $t('labels.add_new_files') }}</h3>
						    <v-flex md12>
									<label class="v-btn primary mb-2" style="padding: 6px 14px; cursor: pointer">
										<input
										type="file"
										@change="prepareMedia"
										name="media"
										id="media"
										style="display: none;"
										multiple>
										{{ $t('buttons.choose_files')}}
										<v-icon right dark>cloud_upload</v-icon>
						      </label>
						    </v-flex>
						    <v-flex md12>
						    	<v-toolbar color="grey lighten-2">
									<v-toolbar-title>{{ $t('labels.new_files') }}</v-toolbar-title>
								</v-toolbar>
						    	<v-data-table
								:headers="headers"
								:items="files"
								:loading="isUploading"
								class="elevation-1"
								:items-per-page="100"
								:footer-props="footer_props"
								:no-data-text="$t('labels.no_data_available')"
								:loading-text="$t('labels.loading_items')"
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
										<media-group :item="item" :by_monitor="user.by_monitor" :monitors_all="monitors" :groups_all="groups" @click.native="editNewImage(item)"></media-group>
									</template>
									<!-- <template v-slot:item.group_type_id="{ item }">
										{{ getGroupType(item.group_type_id) }}
									</template> -->
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
										@click="editNewImage(item)"
										>
											edit
										</v-icon>
										<v-icon
										small
										@click="remove(item.index)"
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
					<v-container fluid>
						<v-layout justify-space-between class="px-2">
							<v-btn @click="deleteCampaign" color="error">{{ $t('buttons.delete')}}</v-btn>
							<div>
								<v-btn to="/admin/campaigns">{{ $t('buttons.cancel')}}</v-btn>
								<v-btn color="info" @click="update">{{ $t('buttons.save')}}</v-btn>
							</div>
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
				isUploading: false,
				videoDialog: false,
				imageDialog: false,
				posterDialog: false,
				campaignDateDialog: false,
				videoDialogIndex: 'old',
				imageDialogIndex: 'old',
				editedIndex: -1,
				isloading : true,
				items_per_page: -1,
				date1: '',
				date2: '',
				video_date1: '',
				video_date2: '',
				image_date1: '',
				image_date2: '',
				poster_date1: '',
				poster_date2: '',
				video_menu_date_start: false,
				video_menu_time_start: false,
				video_menu_date_end: false,
				video_menu_time_end: false,
				image_menu_date_start: false,
				image_menu_time_start: false,
				image_menu_date_end: false,
				image_menu_time_end: false,
				poster_menu_date_start: false,
				poster_menu_time_start: false,
				poster_menu_date_end: false,
				poster_menu_time_end: false,
				menu_date_start: false,
				menu_time_start: false,
				menu_date_end: false,
				menu_time_end: false,
				imagePreview: false,
				posterPreview: false,
				previewSrc: '',
				videoPreview: false,
				previewSrcVideo: '',
				user: null,
				filter_group: null,
				date_form: {
					start_date: '',
					days: [],
					start_time: '',
					end_date: '',
					end_time: '',
				},
				campaignForm: {
					name: '',
					description: '',
					sponsor: false,
					start_date: '',
					days: [],
					start_time: '',
					end_date: '',
					end_time: '',
				},
				videoForm: {
					file_type: '',
					start_date: '',
					days: [],
					start_time: '',
					end_date: '',
					end_time: '',
					groups: [],
					duration: '',
					availableGroups: [],
				},
				video_item: {},
				imageForm: {
					file_type: '',
					start_date: '',
					days: [],
					start_time: '',
					end_date: '',
					end_time: '',
					groups: [],
					availableGroups: [],
				},
				posterForm: {
					name: '',
					start_date: '',
					days: [],
					start_time: '',
					end_date: '',
					end_time: '',
					aspect_ratio_id: '',
					group_type: null,
					groups: [],
					availableGroups: [],
				},
				days: ['Lun', 'Mar', 'Mer', 'Giov', 'Ven', 'Sab', 'Dom'],
				files: [],
				types: [],
				ratios: [],
				groups: [],
				monitors: [],
				shops: [],
				campaign: {},
				videos: [],
				photos: [],
				posters: [],
				icons: [],

				nameRules: [
			        v => !!v || this.$t('labels.name_required'),
			    ],
			    date1Rules: [
			        v => !!v || this.$t('labels.start_date_required'),
			    ],
			    date2Rules: [
			        v => !!v || this.$t('labels.start_date_required'),
			    ],
			    daysRule: [
			        v => v.length > 0 || this.$t('labels.no_days'),
			    ],
			    typeRules: [
			        v => !!v || 'Il tipo della Locandina è obbligatorio',
			    ],

			    footer_props: {
					itemsPerPageText: "Righe per pagina",
					itemsPerPageAllText: "Tutti",
					itemsPerPageOptions: [100],
				},
			}
		},
		watch: {
	    	date1(val){
	    		this.date_form.start_date = helper.formatDate(this.date1);
	    	},
	    	date2(val){
	    		this.date_form.end_date = helper.formatDate(this.date2);
	    	},
	    	video_date1(val){
	    		this.videoForm.start_date = helper.formatDate(this.video_date1);
	    	},
	    	video_date2(val){
	    		this.videoForm.end_date = helper.formatDate(this.video_date2);
	    	},
	    	image_date1(val){
	    		this.imageForm.start_date = helper.formatDate(this.image_date1);
	    	},
	    	image_date2(val){
	    		this.imageForm.end_date = helper.formatDate(this.image_date2);
	    	},
	    	poster_date1(val){
	    		this.posterForm.start_date = helper.formatDate(this.poster_date1);
	    	},
	    	poster_date2(val){
	    		this.posterForm.end_date = helper.formatDate(this.poster_date2);
	    	},
	    	videoDialog(val){
				val || this.closeVideoForm();
			},
	    	imageDialog(val){
				val || this.closeImageForm();
			},
	    },
	    created(){
            this.init();
	    },
	    computed: {
	    	isByMonitor(){
	    		return this.user === null ? this.$t('videos.fields.groups') : this.user.by_monitor;
	    	},
			videoHeaders(){
				return [
					// { text: this.$t('labels.media'), align: 'center', value: 'filename', sortable: false},
					{ text: this.$t('labels.original'), align: 'center', value: 'original', sortable: false},
					{ text: this.$t('videos.fields.start_time'), value: "start_time", align: 'center', sortable: false},
					{ text: this.$t('videos.fields.end_time'), value: "end_time", align: 'center', sortable: false},
					{ text: this.$t('videos.fields.size'), align: 'center', value: 'size', sortable: false},
					{ text: this.$t('videos.fields.duration'), align: 'center', value: 'duration', sortable: false},
					{ text: this.isByMonitor === '0' ? this.$t('videos.fields.groups') : this.$t('labels.monitors'), align: 'center', value: 'group_ids', sortable: false},
					// { text: this.$t('videos.fields.type'), value: 'group_type_id', align: 'center' },
					{ text: 'Aspect Ratio', align: 'center', value: 'aspect_ratio_id', sortable: false},
					{ text: this.$t('labels.actions'), value: 'actions', sortable: false }
				]
			},
			photoHeaders(){
				return [
					// { text: this.$t('labels.media'), align: 'center', value: 'filename', sortable: false},
					{ text: this.$t('labels.original'), align: 'center', value: 'original', sortable: false},
					{ text: this.$t('videos.fields.start_time'), value: "start_time", align: 'center', sortable: false},
					{ text: this.$t('videos.fields.end_time'), value: "end_time", align: 'center', sortable: false},
					{ text: this.$t('images.fields.size'), align: 'center', value: 'size', sortable: false},
					{ text: this.$t('images.fields.duration'), align: 'center', value: 'duration', sortable: false},
					{ text: this.isByMonitor === '0' ? this.$t('videos.fields.groups') : this.$t('labels.monitors'), align: 'center', value: 'group_ids', sortable: false},
					// { text: this.$t('images.fields.type'), value: 'group_type_id', align: 'center' },
					{ text: 'Aspect Ratio', align: 'center', value: 'aspect_ratio_id', sortable: false},
					{ text: this.$t('labels.actions'), value: 'actions', sortable: false }
				]
			},
			posterHeaders(){
				return [
					{ text: this.$t('labels.poster'), align: 'center', value: 'name', sortable: false},
					{ text: this.$t('videos.fields.start_time'), value: "start_time", align: 'center', sortable: false},
					{ text: this.$t('videos.fields.end_time'), value: "end_time", align: 'center', sortable: false},
					{ text: this.$t('images.fields.size'), align: 'center', value: 'size', sortable: false},
					{ text: this.$t('images.fields.duration'), align: 'center', value: 'duration', sortable: false},
					{ text: this.isByMonitor === '0' ? this.$t('videos.fields.groups') : this.$t('labels.monitors'), align: 'center', value: 'group_ids', sortable: false},
					// { text: this.$t('images.fields.type'), value: 'group_type_id', align: 'center' },
					{ text: 'Aspect Ratio', align: 'center', value: 'aspect_ratio_id', sortable: false},
					{ text: this.$t('labels.actions'), value: 'actions', sortable: false }
				]
			},
			headers(){
				return [
					{ text: "Media", align: 'center', value: 'is_video', sortable: false},
					{ text: this.$t('videos.fields.start_time'), value: "start_time", align: 'center', sortable: false},
					{ text: this.$t('videos.fields.end_time'), value: "end_time", align: 'center', sortable: false},
					// { text: this.$t('videos.fields.file_name'), align: 'center', value: 'name', sortable: false},
					{ text: this.$t('labels.original'), align: 'center', value: 'original'},
					{ text: this.$t('videos.fields.size'), align: 'center', value: 'filesize'},
					{ text: this.$t('videos.fields.duration'), align: 'center', value: 'duration'},
					{ text: this.isByMonitor === '0' ? this.$t('videos.fields.groups') : this.$t('labels.monitors'), align: 'center', value: 'group_ids', sortable: false},
					// { text: this.$t('images.fields.type'), value: 'group_type_id', align: 'center' },
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
		    // allDays () {
		    //     return this.videoForm.days.length === this.days.length
		    // },
		    // someDays () {
		    //     return this.videoForm.days.length > 0 && !this.allDays
		    // },
		    // allGroups () {
		    //     return this.videoForm.groups.length === this.groups.length
		    // },
		    // someGroups () {
		    //     return this.videoForm.groups.length > 0 && !this.allGroups
		    // },
	    	icon () {
			    if (this.allDays) return 'close'
			    if (this.someDays) return 'indeterminate_check_box'
			    return 'check_box_outline_blank'
			},
			iconGroups () {
			    if (this.allGroups) return 'close'
			    if (this.someGroups) return 'indeterminate_check_box'
			    return 'check_box_outline_blank'
			}
	    },
	    methods: {
	    	init(){
	    		axios.get(settings.root_url + '/api/campaigns/edit/' + this.$route.params.id)
		            .then(response => {
									this.user = response.data.user;
									this.icons = response.data.icons;
		                this.types = response.data.types;
		                this.ratios = response.data.ratios;
		                this.groups = response.data.groups;
		                this.monitors = response.data.monitors;
		                this.shops = response.data.shops;
		                this.videos = response.data.videos;
		                this.photos = response.data.photos;
		                this.posters = response.data.posters;
		                this.campaign = response.data.campaign;
		                this.campaignForm.name = this.campaign.name;
		                this.date1 = this.campaign.start_date;
		                this.campaignForm.start_date = this.campaign.start_date;
		                this.campaignForm.start_time = this.campaign.start_time;
		                this.date2 = this.campaign.end_date;
		                this.campaignForm.end_date = this.campaign.end_date;
		                this.campaignForm.end_time = this.campaign.end_time;
		                this.campaignForm.description = this.campaign.description;
		                this.campaignForm.sponsor = this.campaign.sponsor === "1" ? true : false;
		                this.campaignForm.days = this.campaign.days.split(',');
		                this.isloading = false;
		            }).catch(response => {
		            	console.log("error");
		            });
	    	},
	    	getVideos(){
	    		axios.get(settings.root_url + '/api/videos-campaign/' + this.$route.params.id)
		            .then(response => {
		            	this.videos = response.data.videos;
		            }).catch(response => {
		            	console.log("error");
		            });
	    	},
	    	getImages(){
	    		axios.get(settings.root_url + '/api/images-campaign/' + this.$route.params.id)
		            .then(response => {
		            	this.photos = response.data.photos;
		            }).catch(response => {
		            	console.log("error");
		            });
	    	},
			update(){
				// if (this.$refs.form.validate()) {
	                axios.post(settings.root_url + '/api/campaigns/update/' + this.$route.params.id, {
		                name: this.campaignForm.name,
		                description: this.campaignForm.description,
		                sponsor: this.campaignForm.sponsor,
		                // days: this.campaignForm.days.toString(),
		                // start_date: this.date1,
		                // start_time: this.campaignForm.start_time,
		                // end_date: this.date2,
		                // end_time: this.campaignForm.end_time,
		                media: this.files,
	                })
	                .then(response =>  {
										this.files = []
										this.getImages()
										this.getVideos()
	                	// this.$router.push({name: 'campaigns'});
	                }).catch(error => {
	                });
	            // }
			},
			onSaveDate(){
				axios.post(settings.root_url + '/api/campaigns/update-date/' + this.$route.params.id, {
	                days: this.date_form.days.toString(),
	                start_date: this.date1,
	                start_time: this.date_form.start_time,
	                end_date: this.date2,
	                end_time: this.date_form.end_time,
                })
                .then(response =>  {
                	this.campaign = response.data.campaign;
                	this.videos = response.data.videos;
                	this.posters = response.data.posters;
                	this.photos = response.data.photos;
                	this.campaignDateDialog = false;
                	// this.$router.push({name: 'campaigns'});
                }).catch(error => {
                });
			},
			onCancelDate(){
				this.campaignDateDialog = false;
			},
			// deleteVideo(item){
			// 	var r = confirm(this.$t('videos.fields.delete_confirm'));
	    //     	if(r == true){
	    //     		axios.post(settings.root_url + '/api/videos/delete/' + item.id)
      //               .then(response =>  {
			// 			this.getVideos();
      //               }).catch(error => {

      //               });
	    //     	}
			// },
	    	closeImageForm() {
        		this.imageDialog = false
      		},
	    	closeVideoForm() {
        		this.videoDialog = false
      		},
      		closePosterForm() {
        		this.posterDialog = false
      		},
      		editDateBulk(){
				this.date_form.start_date = helper.formatDate(this.campaign.start_date);
				this.date_form.end_date = helper.formatDate(this.campaign.end_date);
				this.date_form.start_time = this.campaign.start_time;
				this.date_form.end_time = this.campaign.end_time;
				this.date_form.days = this.campaign.days.split(',');
      			this.campaignDateDialog = true;
      		},
			editImage(item) {
				this.video_item = Object.assign({}, item);
				this.video_item.media_type="image",
				this.video_item.start_date = helper.formatDate(item.start_date);
				this.video_item.end_date = helper.formatDate(item.end_date);
				this.video_item.date1 = item.start_date;
				this.video_item.date2 = item.end_date;
				this.video_item.days = item.days != null? item.days.split(',') : null;
				this.video_item.by_monitor = this.user.by_monitor;
				this.video_item.editedIndex = item.id;
	        	this.imageDialog = true
	      	},
			editNewImage (item) {
	   			this.video_item = Object.assign({}, item);
	   			this.video_item.is_new = true;
				this.video_item.media_type="image",
				this.video_item.start_date = helper.formatDate(item.start_date);
				this.video_item.end_date = helper.formatDate(item.end_date);
				this.video_item.date1 = item.start_date;
				this.video_item.date2 = item.end_date;
				this.video_item.days = item.days != null? item.days.split(',') : null;
				this.video_item.by_monitor = this.user.by_monitor;
				this.video_item.editedIndex = item.index;
	        	this.imageDialog = true
	      	},
			editVideo (item) {
				this.video_item = Object.assign({}, item);
				this.video_item.media_type="video",
				this.video_item.start_date = helper.formatDate(item.start_date);
				this.video_item.end_date = helper.formatDate(item.end_date);
				this.video_item.date1 = item.start_date;
				this.video_item.date2 = item.end_date;
				this.video_item.days = item.days != null? item.days.split(',') : null;
				this.video_item.by_monitor = this.user.by_monitor;
				this.video_item.editedIndex = item.id;
				this.videoDialog = true
	    },
	      	editPoster(item) {
	   			this.video_item = Object.assign({}, item);
				this.video_item.media_type="poster",
				this.video_item.start_date = helper.formatDate(item.start_date);
				this.video_item.end_date = helper.formatDate(item.end_date);
				this.video_item.date1 = item.start_date;
				this.video_item.date2 = item.end_date;
				this.video_item.days = item.days != null? item.days.split(',') : null;
				this.video_item.by_monitor = this.user.by_monitor;
				this.video_item.editedIndex = item.id;
	        	this.posterDialog = true
	      	},
			getVideoGroups(video){
				return this.groups.filter(function(group) {
					return video.group_ids.includes(group.id) == true;
				})
			},
			saveNewMedia(new_image){
				for (var i = this.files.length - 1; i >= 0; i--) {
					if(this.files[i].index == new_image.index){
						this.files[i].start_date = new_image.date1;
						this.files[i].end_date = new_image.date2;
						this.files[i].start_time = new_image.start_time;
						this.files[i].end_time = new_image.end_time;
						this.files[i].days = new_image.days.toString();
						this.files[i].duration = new_image.duration;
						this.files[i].group_ids = new_image.groups.map(function(el){ return el.id }).toString();
						this.files[i].monitor_ids = new_image.monitor_ids.toString();
						break;
					}
				}
				this.imageDialog = false;
			},
			saveImage(){
				this.getImages();
				this.imageDialog = false;
			},
			saveVideo(){
				this.getVideos();
				this.videoDialog = false;
			},
			savePoster(){
				this.getPosters();
				this.posterDialog = false;
			},
			deleteImage(){
				this.getImages();
				this.imageDialog = false;
			},
			deleteVideo(){
				this.getVideos();
				this.videoDialog = false;
			},
			deletePoster(){
				this.getPosters();
				this.posterDialog = false;
			},
			getPosters(){
				axios.get(settings.root_url + '/api/get-posters')
                .then(response =>  {
                	this.posters = response.data.posters;
                }).catch(error => {
                });
			},
			onTypeChange(){
				this.posterForm.groups = [];
				this.posterForm.availableGroups = [];
		  },
			// deleteImage(item){
			// 	var r = confirm(this.$t('videos.fields.delete_confirm'));
	    //     	if(r == true){
	    //     		axios.post(settings.root_url + '/api/images/delete/' + item.id)
      //               .then(response =>  {
			// 			this.getImages();
      //               }).catch(error => {

      //               });
	    //     	}
			// },
			getGroupName(groupId){
	      		var group = this.groups.filter(function(group){
	      			return group.id == groupId;
	      		});
	      		if(group.length)
	      			return group[0].name;
	      		else
	      			return "Unknow group";
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
				// var ratio = this.ratios.filter(function(ratio){
				// 	return ratio.id == ratioId;
				// });
				// return ratio[0].name;
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
			toggle2 () {
				this.$nextTick(() => {
					if (this.allDays) {
						this.videoForm.days = []
					} else {
						this.videoForm.days = this.days.slice()
					}
				})
			},
			getLocale(){
				return helper.getLocale();
			},
			toggleGroups () {
				this.$nextTick(() => {
					if (this.allGroups) {
						this.videoForm.groups = []
					} else {
						this.videoForm.groups = this.groups.slice()
					}
				})
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
								this.$t('labels.no_type_match')
							);
							counter++;
							if(counter >= items.length)
								this.isUploading = false;
							continue;
						}
						campaignForm.append('media', attachment);
						axios.post(settings.root_url + '/api/image-upload', campaignForm)
						.then(response => {
							counter++;
							if(response.data.frame_rate == 25 || response.data.frame_rate == 0){
								var file = {
									'file_type': response.data.file_type,
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
							}else {
								this.$toastr.e(
									response.data.original,
									this.$t('labels.no_framerate_match'),
								);
							}
							if(counter >= items.length)
								this.isUploading = false;
							}).catch(error => {
								this.isUploading = false;
							});
							}
						}
					},
            remove(index){
            	var r = confirm('Sei sicuro di voler cancellare questo file?');
	        	if(r == true){
            		this.files.splice(index, 1 );
	        	}
            },
           	deleteCampaign () {
	        	var r = confirm(this.$t('labels.delete_confirm'));
	        	if(r == true){
	        		axios.post(settings.root_url + '/api/campaigns/delete/' + this.campaign.id)
                    .then(response =>  {
						this.$router.push({name: 'campaigns'});
                    }).catch(error => {

                    });
	        	}
	      	},
            getVideoIcon(item){
				if(item.file_type == "video") return "videocam";
				else if(item.file_type == "image") return "photo"
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
	    	getAvailableGroups_(aspect_ratio_id, group_type_id){
	    		return this.groups.filter(function(group){
	    			return group.aspect_ratio_id == aspect_ratio_id && group.group_type_id == group_type_id
	    		})
	    	},
	    	getAvailableGroups(media){
	    		return this.groups.filter(function(group){
	    			return group.aspect_ratio_id == media.aspect_ratio_id && group.group_type_id == media.group_type_id
	    		})
	    	},
	    	previewMedia(filename, type) {
	    		if(type == 'image'){
		    		this.previewSrc = settings.root_url + '/media/images/' + filename;
		    		this.imagePreview = true;
	    		} else if(type == 'poster') {
	    			this.previewSrc = settings.root_url + '/users/' + this.user.id + '/posters/' + filename;
		    		this.posterPreview = true;
	    		} else if(type == 'video') {
		    		this.previewSrcVideo = settings.root_url + '/media/videos/' + filename;
		    		this.videoPreview = true;
	    		}
	    	},
	    	isInGroup(media, group){
	    		var group_ids = media.group_ids.split(',').map(Number);
	    		return group_ids.includes(group.id) != false;
	    	},
	    	getFilteredVideo(){
	    		var self = this;
	    		return self.videos.filter(function(video){
	    			return  !self.filter_group || self.isInGroup(video, self.filter_group);
	    		})
	    	},
	    	getFilteredPhotos(){
	    		var self = this;
	    		return self.photos.filter(function(photo){
	    			return  !self.filter_group || self.isInGroup(photo, self.filter_group);
	    		})
	    	},
	    	getFilteredPosters(){
	    		var self = this;
	    		return self.posters.filter(function(poster){
	    			return  !self.filter_group || self.isInGroup(poster, self.filter_group);
	    		})
	    	}
	    }
  	}
</script>