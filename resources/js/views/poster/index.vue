<style scoped>
	.v-chip{
		height: auto;
	}
</style>

<template>
	<v-container fluid>
		<v-card>
		<v-toolbar color="grey lighten-2">
			<v-toolbar-title>Locandine Pubblicate</v-toolbar-title>
		</v-toolbar>
			<template>
				<v-dialog v-model="posterPreview" max-width="350">
					<v-img
	                  	:src="previewSrc" contain max-width="350"
	                ></v-img>
				</v-dialog>
			</template>
			<v-data-table
			:headers="headers"
			:items="posters"
			:loading="!isPosterLoaded"
			class="elevation-1"
			:no-data-text="$t('labels.no_media_scheduled')"
			loading-text="Caricamento in corso..."
			hide-default-footer
			:mobile-breakpoint="300"
			>
				<template v-slot:item.name="{ item }">
					<div style="cursor: pointer" @click="previewMedia(item)">
						{{ item.name }}
					</div>
			    </template>
				<template v-slot:item.start_time="{ item }">
					{{ getStartTime(item) }}
			    </template>
			    <template v-slot:item.end_time="{ item }">
					{{ getEndTime(item) }}
			    </template>
			    <template v-slot:item.group_ids="{ item }">
				    <div v-if="getVideoGroups(item).length">
						<v-chip v-for="(group, index) in getVideoGroups(item)" :key="index">
							{{ group.name }}
						</v-chip>
					</div>
					<div v-if="!getVideoGroups(item).length">
						<v-chip color="red" text-color="white">
							{{ $t('labels.no_group') }}
						</v-chip>
					</div>
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
					@click="deleteVideo(item)"
					>
						delete
					</v-icon> -->
			    </template>
			</v-data-table>
		</v-card>
	</v-container>
</template>

<script>
	import { settings } from '../../settings.js'
	import helper from '../../helper.js'
  	export default {
  		data () {
			return {
				isPosterLoaded: false,

				posters: [],
				groups: [],

				filterForm: {
					poster: '',
					monitor_id: '',
				},

				posterPreview: false,
				previewSrc: '',
			}
		},

	    created(){
            this.init();
	    },
	    computed: {
			headers(){
				return [
					{ text: this.$t('labels.poster'), value: 'name', align: 'center' },
					{ text: this.$t('videos.fields.duration'), value: 'duration', align: 'center' },
					// { text: this.$t('videos.fields.size'), value: 'size', align: 'center' },
					{ text: this.$t('videos.fields.start_time'), value: 'start_time', align: 'center' },
					{ text: this.$t('videos.fields.end_time'), value: 'end_time', align: 'center' },
					{ text: this.$t('groups.fields.groups'), value: 'group_ids', align: 'center' },
					{ text: this.$t('labels.actions'), value: 'actions', sortable: false, align: 'center' }
				]
			}
		},
	    methods: {
	    	editItem(item){
	    		this.$router.push({
					name: "poster2",
					params: { id: item.id }
				})
	    	},
	      	// deleteVideo(item) {
	        // 	var r = confirm(this.$t('videos.fields.delete_confirm'));
	        // 	if(r == true){
	        // 		axios.post(settings.root_url + '/api/posters/delete/' + item.id)
          //           .then(response =>  {
					// 	this.getPosters();
          //           }).catch(error => {

          //           });
	        // 	}
	      	// },
	      	getVideoGroups(poster){
				return this.groups.filter(function(group) {
					return poster.group_ids.includes(group.id) == true;
				})
			},
			// getGroupType(id){
			// 	var types = this.group_types.filter(function(type){
			// 		return type.id == id;
			// 	})
			// 	return types[0].name
			// },
			init(){
	    		axios.get(settings.root_url + '/api/posters/index')
		            .then(response => {
		                this.posters = response.data.posters;
		                this.groups = response.data.groups;
						this.isPosterLoaded = true;
		            });
	    	},
	    	getPosters(){
	    		isPosterLoaded: false;
	    		let url = helper.getFilterURL(this.filterForm);
	    		axios.get(settings.root_url + '/api/posterss/?' + url)
		            .then(response => {
		                this.posters = response.data.posters;
		                this.isPosterLoaded = true;
		            }).catch(response => {
		            	console.log("error");
		            });
	    	},
	    	getStartTime(item){
	    		return helper.formatDate(item.start_date) + ' ' + item.start_time;
	    	},
	    	getEndTime(item){
	    		return helper.formatDate(item.end_date) + ' ' + item.end_time;
	    	},
	    	previewMedia(item){
	    		this.previewSrc = settings.root_url + '/users/' + item.user_id + '/posters/' + item.file;
	    		this.posterPreview = true;
	    	},
	    }
  	}
</script> 