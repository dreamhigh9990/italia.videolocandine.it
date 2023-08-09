<style scoped>
	.v-responsive{
		align-items: center;
	}
</style>
<template>
	<v-container grid-list-md fluid>
		<v-layout wrap justify-center>
			<v-flex xs12 sm4 md3>
				<v-select
				v-model="selected_shop"
				:items="extendedShops"
				item-text="name"
				item-value="id"
				:label="$t('shops.title')"
				persistent-hint
				return-object
				></v-select>
			</v-flex>
			<v-flex xs12 sm4 md3>
				<v-select
				v-model="selected_monitor"
				:items="filteredMonitors"
				item-text="name"
				item-value="id"
				:label="$t('labels.monitors')"
				persistent-hint
				return-object
				></v-select>
			</v-flex>
			<v-flex xs12 sm4 md3>
				<v-select
				v-model="selected_type"
				:items="extendedTypes"
				item-text="name"
				item-value="id"
				:label="$t('groups.fields.grouptype')"
				return-object
				></v-select>
			</v-flex>
		</v-layout>
		
		<v-layout wrap>
			<v-flex
			v-for="(monitor,i) in monitorsToShow"
			:key="i"
			>
				<v-card
				    elevation="6"
				    :max-width="getMonitorWidth(monitor)"
				    class="mx-auto"
				>
					<h4 class="text-center py-3">
						{{ monitor.name }}
					</h4>
					<v-carousel
					cycle
					hide-delimiters
					show-arrows-on-hover
					height="390"
					>
						<template v-if="monitor.posters.length">
							<v-carousel-item
							v-for="(poster,i) in getPosters(monitor)"
							:key="i + 400"
							>
								<h6 class="text-center mb-1">{{ poster.file }} - {{ poster.duration}}(s)</h6>
								<v-img
									contain
									:src="getPosterFile(poster)"
								></v-img>
							</v-carousel-item>
						</template>
						<template v-if="monitor.images.length">
							<v-carousel-item
							v-for="(image,i) in monitor.images"
							:key="300 + i"
							>
								<h6 class="text-center mb-1">{{ image.original }} - {{ image.duration}}(s)</h6>
								<v-img
									contain
									:src="getImageFile(image)"
								></v-img>
							</v-carousel-item>
						</template>
						<template v-if="monitor.videos.length">
							<v-carousel-item
							v-for="(video, i) in monitor.videos"
							:key="100 + i"
							>
								<h6 class="text-center mb-1">{{ video.original }} - {{ video.duration}}(s)</h6>
								<video controls autoplay muted loop :src="getVideoFile(video)" width="100%" height="93%"></video>
							</v-carousel-item>
						</template>
						<template v-if="monitor.images.length + monitor.posters.length + monitor.videos.length == 0 && isRedundancyVideo(monitor)">
							<v-carousel-item
							v-for="(poster,i) in getMonitorRedundancies(monitor)"
							:key="200 + i"
							>
								<h6 class="text-center mb-1">{{ poster.original }} - {{ poster.duration}}(s)</h6>
								<video controls autoplay muted loop :src="getPosterRedundancyFile(poster)" width="100%" height="93%"></video>
							</v-carousel-item>
						</template>
						<template v-if="monitor.images.length + monitor.posters.length + monitor.videos.length == 0 && !isRedundancyVideo(monitor)">
							<v-carousel-item
							v-for="(poster,i) in getMonitorRedundancies(monitor)"
							:key="200 + i"
							contain
							>
								<h6 class="text-center mb-1">{{ poster.file }} - {{ poster.duration}}(s)</h6>
								<v-img
									contain
									:src="getPosterRedundancyFile(poster)"
								></v-img>
							</v-carousel-item>
						</template>
					</v-carousel>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
  	import { settings } from '../../settings.js'
  	export default {
    	data () {
      		return {
      			user: null,

      			groups: [],
      			shops: [],

      			monitors: [],
      			posters: [],
      			videos: [],
      			images: [],
      			monitor_redundancies: [],
      			aspect_ratios: [],
						group_types: [],
						
      			selected_monitor: null,
						selected_shop: null,
						selected_type: null
      		}
    	}, 
    	watch: {
			selected_shop(value){
				this.selected_monitor = null;
			},
			selected_type(value){
				this.selected_monitor = null;
			},
		},
    	computed: {
    		filteredMonitors: function () {
    			var self = this;
    			if(!this.selected_shop || this.selected_shop.id === -1){
						if(!this.selected_type || this.selected_type.id === -1)
							return this.extendedMonitors;
						else {
							return this.extendedMonitors.filter(function(monitor){
								return monitor.type_id == self.selected_type.id
							})
						}
					}
					return this.extendedMonitors.filter(function(monitor){
						if(!self.selected_type || self.selected_type.id === -1)
							return parseInt(monitor.shop_id) === self.selected_shop.id || monitor.id === -1;
						else {
							return ( parseInt(monitor.shop_id) === self.selected_shop.id && monitor.type_id == self.selected_type.id) || monitor.id === -1;
						}
					});
		    },
		    extendedMonitors: function(){
		    	let extended_monitors = [];
		    	extended_monitors.push({id: -1, name: this.$t('labels.all')})
		    	this.monitors.forEach(function(monitor){
		    		extended_monitors.push(monitor);
		    	})
		    	return extended_monitors;
		    },
		    monitorsToShow: function(){
					let self = this
		    	if(this.selected_monitor === null || this.selected_monitor.id === -1){
						return self.filteredMonitors.filter(function(monitor){
							return monitor.id !== -1
						})
		    	}
		    	else{
		    		return [this.selected_monitor];
		    	}
		    },
		    extendedShops: function(){
		    	let extended_shops = [];
		    	extended_shops.push({id: -1, name: this.$t('labels.all')})
		    	this.shops.forEach(function(shop){
		    		extended_shops.push(shop);
		    	})
		    	return extended_shops;
				},
				extendedTypes: function(){
		    	let extended_types = [];
		    	extended_types.push({id: -1, name: this.$t('labels.all')})
		    	this.group_types.forEach(function(type){
		    		extended_types.push(type);
		    	})
		    	return extended_types;
		    }
    	},
    	created() {
    		this.init();
    	},
    	methods: {
    		init(){
	    		axios.get(settings.root_url + '/api/rooms/load')
		            .then(response => {
		            	this.user = response.data.user;
		                this.group_types = response.data.group_types;
										this.monitors = response.data.monitors;
										this.shops = response.data.shops;
										this.monitor_redundancies = response.data.monitor_redundancies;
										this.aspect_ratios = response.data.aspect_ratios;
										console.log(this.monitors)
		            }).catch(response => {
		            });
	    	},
	    	getPosters(monitor){
	    		return this.posters.filter(function(poster){
	    			if(poster.monitor_ids){
							return poster.monitor_ids.split(',').includes(monitor.id.toString())
						}
						else{
							return false;
						}
	    		});
	    	},
	    	getPosterFile(poster){
	    		return settings.root_url + '/users/' + this.user.id + '/posters/' + poster.file;
	    	},
	    	getImages(monitor){
	    		return this.images.filter(function(image){
	    			if(image.monitor_ids){
							return image.monitor_ids.split(',').includes(monitor.id.toString())
						}
						else{
							return false;
						}
	    		});
	    	},
	    	getImageFile(image){
	    		return settings.root_url + '/media/images/' + image.image;
	    	},
	    	getVideos(monitor){
	    		return this.videos.filter(function(video){
						if(video.monitor_ids){
							return video.monitor_ids.split(',').includes(monitor.id.toString())
						}
						else{
							return false;
						}
	    		});
	    	},
	    	getVideoFile(video){
	    		return settings.root_url + '/media/videos/' + video.video;
	    	},
	    	getMonitorRedundancies(monitor){
	    		return this.monitor_redundancies.filter(function(redundancy){
	    			return redundancy.monitor_id == monitor.id;
	    		});
	    	},
	    	getPosterRedundancyFile(poster){
	    		return settings.root_url + '/media/monitor-redundancies/' + poster.file;
	    	},
	    	getMonitorWidth(monitor){
	    		var aspect_ratio = this.aspect_ratios.find(aspect_ratio => {
	    			return aspect_ratio.id == monitor.aspect_ratio_id;
	    		});
	    		if(aspect_ratio != undefined){
		    		if(parseInt(aspect_ratio.width) < parseInt(aspect_ratio.height))
		    			return 200;
		    		else if(parseInt(aspect_ratio.width) >= parseInt(aspect_ratio.height) * 2)
		    			return 720
		    		else
		    			return 360;
	    		} else {
	    			return 200;
	    		}
	    	},
	    	isRedundancyVideo(monitor){
	    		let redundancy = this.monitor_redundancies.find(function(redundancy){
	    			return redundancy.monitor_id == monitor.id;
					});
					if(redundancy)
						return redundancy.type === 'video';
					else
						return false
	    	}
    	}
  	}
</script>