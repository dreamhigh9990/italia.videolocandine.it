<style scoped>

</style>

<template>
	<v-container fluid>
		<v-card>
			<v-toolbar color="grey lighten-2">
				<v-toolbar-title>{{ $t('videos.title') }}</v-toolbar-title>
				<!-- <v-spacer></v-spacer>
				<v-btn color="primary" dark class="mb-2" to="/admin/campaigns/create">Add New</v-btn> -->
			</v-toolbar>
			<v-container grid-list-md>
				<v-layout wrap justify-space-around>
					<v-flex xs6 sm3 md3>
						<v-text-field
						v-model="filterForm.video"
						:label="$t('videos.search')"
						@input="getVideos()">
						</v-text-field>
					</v-flex>
					<v-flex xs6 sm3 md3>
						<v-select
						v-model="filterForm.campaign_id"
						@change="getVideos()"
						:items="campaigns"
						item-text="name"
						item-value="id"
						:label="$t('campaign.title')"
						persistent-hint
						clearable
						></v-select>
					</v-flex>
					<v-flex xs6 sm3 md3>
						<v-select
						v-model="filterForm.group_id"
						@change="getVideos()"
						:items="groups"
						item-text="name"
						item-value="id"
						:label="$t('groups.fields.groups')"
						persistent-hint
						clearable
						></v-select>
					</v-flex>
					<v-flex xs6 sm3 md3>
						<v-select
						v-model="filterForm.live_type"
						@change="getVideos()"
						:items="live_types"
						item-text="name"
						item-value="id"
						:label="$t('videos.fields.time_filter')"
						clearable
						></v-select>
					</v-flex>
				</v-layout>
			</v-container>
			<template>
				<v-dialog v-model="videoPreview" width="640" height="480">
					<video width="640" height="480" controls autoplay muted loop :src="previewSrcVideo"></video>
				</v-dialog>
			</template>
			<v-data-table
			:headers="headers"
			:items="videos"
			:loading="!isVideoLoaded"
			class="elevation-1"
			:no-data-text="$t('labels.no_media_scheduled')"
			loading-text="Caricamento in corso..."
			:items-per-page="100"
			:footer-props="footer_props"
			:mobile-breakpoint="300"
			>
				<template v-slot:item.original="{ item }">
					<div style="cursor: pointer" @click="previewMedia(item.video)">{{ item.original }}</div>
				</template>
				<!-- <template v-slot:item.groups="{ item }">
					<div v-if="getVideoGroups(item).length">
						<v-chip v-for="(item, index) in getVideoGroups(item)" :key="index">{{ item.name }}</v-chip>
					</div>
					<div v-if="!getVideoGroups(item).length">
						<v-chip class="no-group">
							<span class="v-chip__content">No group is assigned</span>
						</v-chip>
					</div>
				</template> -->
				<template v-slot:item.groups="{ item }">
					<media-group :item="item" :by_monitor="user.by_monitor" :monitors_all="monitors" :groups_all="groups" @click.native="editItem(item)"></media-group>
				</template>
				<template v-slot:item.type="{ item }">
					{{ getGroupType(item.group_type_id) }}
				</template>
				<template v-slot:item.start_time="{ item }">
					{{ getStartTime(item) }}
				</template>
				<template v-slot:item.end_time="{ item }">
					{{ getEndTime(item) }}
				</template>
				<template v-slot:item.campaign="{ item }">
					{{ getCampaign(item.campaign_id) }}
				</template>
				<template v-slot:item.actions="{ item }">
					<v-icon
					small
					class="mr-2"
					@click="editItem(item)"
					>
						edit
					</v-icon>
	      		</template>
			</v-data-table>
		</v-card>
	</v-container>
</template>

<script>
	import { settings } from '../../settings.js'
	import helper from '../../helper.js'
	import MediaGroup from '../../components/MediaGroup'
	export default {
		components: {
			MediaGroup
		},
		data () {
			return {
				isVideoLoaded: false,

				user: null,
				videos: [],
				groups: [],
				monitors: [],
				campaigns: [],
				live_types: [
					{id: 1, name: this.$t('videos.fields.today')},
				],
				options: {},

				filterForm: {
					video: '',
					campaign_id: '',
					group_id: '',
					live_type: ''
				},
				footer_props: {
					itemsPerPageText: "Righe per pagina",
					itemsPerPageOptions: [100],
				},
				videoPreview: false,
				previewSrcVideo: '',
			}
	},
	created(){
		this.init();
	},
	computed: {
		headers(){
			return [
				{ text: this.$t('videos.fields.video'), value: 'original', align: 'center' },
				{ text: this.$t('videos.fields.start_time'), value: 'start_time', align: 'center' },
				{ text: this.$t('videos.fields.end_time'), value: 'end_time', align: 'center' },
				{ text: this.$t('videos.fields.size'), value: 'size', align: 'center' },
				{ text: this.$t('videos.fields.duration'), value: 'duration', align: 'center' },
				{ text: this.$t('videos.fields.groups'), value: 'groups', align: 'center' },
				{ text: this.$t('videos.fields.type'), value: 'type', align: 'center' },
				{ text: this.$t('videos.fields.campaign'), value: 'campaign', align: 'center' },
				{ text: this.$t('labels.actions'), value: 'actions', sortable: false, align: 'center' }
			]
		}
	},
	mounted(){
	},
	methods: {
		editItem(item){
			this.$router.push({
				name: "videos-edit",
				params: { id: item.id }
			})
	  },
		// deleteVideo (item) {
		// 	var r = confirm(this.$t('videos.fields.delete_confirm'));
		// 	if(r == true){
		// 		axios.post(settings.root_url + '/api/videos/delete/' + item.id)
		// 		.then(response =>  {
		// 			this.getVideos();
		// 		})
		// 		.catch(error => {
		// 		});
		// 	}
		// },
		getVideoGroups(video){
			if(!this.groups){
				return [];
			} else {
				return this.groups.filter(function(group) {
					if(video.group_ids)
						return video.group_ids.includes(group.id) == true;
					else
						return false;
				})
			}
		},
		getGroupType(id){
			var types = this.group_types.filter(function(type){
				return type.id == id;
			})
			return types[0].name
		},
		init(){
			this.filterForm = Object.assign({}, this.$store.getters.getVideoFilter);
			axios.get(settings.root_url + '/api/videos-load')
			.then(response => {
				this.user = response.data.user;
				this.videos = response.data.videos;
				this.groups = response.data.groups;
				this.monitors = response.data.monitors;
				this.group_types = response.data.group_types;
				this.campaigns = response.data.campaigns;
				this.isVideoLoaded = true;
				this.getVideos()
			}).catch(response => {
				console.log("error");
			});
		},
		getVideos(){
			isVideoLoaded: false;
			this.$store.dispatch('setVideoFilter', this.filterForm);
			let url = helper.getFilterURL(this.filterForm);
			axios.get(settings.root_url + '/api/videoss?' + url)
			.then(response => {
					this.videos = response.data.videos;
					this.isVideoLoaded = true;
			}).catch(response => {
				console.log("error");
			});
		},
	    	getCampaign(id){
	    		if(!this.campaigns){
	    			return 'Unknown Campaign';
	    		} else {
		    		var campaign = this.campaigns.filter(function(campaign){
		    			return campaign.id == id;
		    		});
		    		return campaign[0].name;
	    		}
	    	},
	    	getStartTime(item){
	    		return helper.formatDate(item.start_date) + ' ' + item.start_time;
	    	},
	    	getEndTime(item){
	    		return helper.formatDate(item.end_date) + ' ' + item.end_time;
	    	},
	    	previewMedia(filename){
	    		this.previewSrcVideo = settings.root_url + '/media/videos/' + filename;
	    		this.videoPreview = true;
	    	},
	    }
  	}
</script> 
