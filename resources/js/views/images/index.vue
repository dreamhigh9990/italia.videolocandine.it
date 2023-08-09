<style scoped>

</style>

<template>
	<v-container fluid>
		<v-toolbar color="grey lighten-2">
			<v-toolbar-title>{{ $t('images.title') }}</v-toolbar-title>
		</v-toolbar>
		<template>
			<v-dialog v-model="imagePreview" max-height="700" max-width="900">
				<v-img
                  	:src="previewSrc" contain max-height="700" max-width="900"
                ></v-img>
			</v-dialog>
		</template>
		<v-data-table
		:headers="headers"
		:items="images"
		:loading="!isImageLoaded"
		class="elevation-1"
		:no-data-text="$t('labels.no_media_scheduled')"
		loading-text="Caricamento in corso..."
		:items-per-page="100"
		:footer-props="footer_props"
		:mobile-breakpoint="300"
		>
			<template v-slot:item.image="{ item }">
				<div class="text-md-center" style="cursor: pointer" @click="previewMedia(item.image, 'image')">{{ item.original }}</div>
			</template>
			<template v-slot:item.groups="{ item }">
				<!-- <div v-if="getVideoGroups(item).length">
					<v-chip v-for="(item, index) in getVideoGroups(item)" :key="index">
						{{ item.name }}
					</v-chip>
				</div>
				<div class="text-xs-center" v-if="!getVideoGroups(item).length">
					<v-chip class="no-group">No group is assigned</v-chip>
				</div> -->
				<media-group :item="item" :by_monitor="user.by_monitor" :monitors_all="monitors" :groups_all="groups" @click.native="editItem(item)"></media-group>
			</template>
			<template v-slot:item.group_type_id="{ item }">
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
				<!-- <v-icon
				small
				@click="deleteItem(item)"
				>
					delete
				</v-icon> -->
			</template>
		</v-data-table>
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
				isImageLoaded: false,
				images: [],
				campaigns: [],
				groups: [],
				group_types: [],
				imagePreview: false,
				previewSrc: '',
				user: {},
				monitors: [],

				footer_props: {
					itemsPerPageText: "Righe per pagina",
					itemsPerPageOptions: [100],
				},
			}
		},

	    created(){
        this.getImages();
	    },
	    computed: {
			headers(){
				return [
					{ text: this.$t('images.title'), value: 'image', align: 'center' },
					{ text: this.$t('labels.start_time'), value: 'start_time', align: 'center' },
					{ text: this.$t('labels.end_time'), value: 'end_time', align: 'center' },
					{ text: this.$t('images.fields.size'), value: 'size', align: 'center' },
					{ text: this.$t('images.fields.duration'), value: 'duration', align: 'center' },
					{ text: this.$t('images.fields.groups'), value: 'groups', align: 'center' },
					{ text: this.$t('images.fields.type'), value: 'group_type_id', align: 'center' },
					{ text: this.$t('campaign.title'), value: 'campaign', align: 'center' },
					{ text: this.$t('labels.actions'), value: 'actions', sortable: false, align: 'center' }
				]
			}
		},
	    methods: {
	      	// deleteItem (item) {
	        // 	var r = confirm('Are you sure you want to delete this item?');
	        // 	if(r == true){
	        // 		axios.post(settings.root_url + '/api/images/delete/' + item.id)
          //           .then(response =>  {
					// 	this.getImages();
          //           }).catch(error => {

          //           });
	        // 	}
	      	// },
	      	editItem(item){
	      		this.$router.push({
					name: "image-edit",
					params: { id: item.id }
				})
	      	},
			getImages(){
	    		axios.get(settings.root_url + '/api/images')
		            .then(response => {
		                this.images = response.data.images;
		                this.videos = response.data.videos;
		                this.groups = response.data.groups;
		                this.group_types = response.data.group_types;
										this.campaigns = response.data.campaigns;
										this.user = response.data.user
										this.monitors = response.data.monitors
						this.isImageLoaded = true;
		            });
	    	},
	    	getCampaign(id){
	    		var campaign = this.campaigns.filter(function(campaign){
	    			return campaign.id == id;
	    		});
	    		return campaign[0].name;
	    	},
	    	getVideoGroups(video){
				return this.groups.filter(function(group) {
					if(!video.group_ids)
						return false;
					else
						return video.group_ids.includes(group.id) == true;
				})
			},
	    	getGroupType(id){
				var types = this.group_types.filter(function(type){
					return type.id == id;
				})
				return types[0].name
			},
	    	getStartTime(item){
	    		return helper.formatDate(item.start_date) + ' ' + item.start_time;
	    	},
	    	getEndTime(item){
	    		return helper.formatDate(item.end_date) + ' ' + item.end_time;
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
