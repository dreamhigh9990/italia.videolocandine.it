<template>
	<v-form ref="form" lazy-validation v-model="valid">
		<v-card class="align-space-between">
			<v-card-title class="d-block">
				<div class="headline">{{ $t('labels.edit_media') }}</div>
				<div class="subtitle-1 text-center mt-2">{{ item.original }}</div>
			</v-card-title>
			<v-card-text>
				<v-container>
					<v-form ref="form" v-model="valid" lazy-validation>
						<v-layout wrap>
							<v-flex xs6 sm3 md3>
								<v-menu
								:close-on-content-click="true"
								v-model="menu_date_start"
								offset-y
								>
									<template v-slot:activator="{ on }">
										<v-layout align-center style="max-width: 160px">
											<v-btn v-on="on" icon> <v-icon>event</v-icon></v-btn>
											<v-text-field
											v-on="on"
											v-model="local_item.start_date"
											:label="$t('labels.start_date')"
											readonly
											:rules="date1Rules"
											@blur="date1 = parseDate(local_item.start_date)"
											></v-text-field>
										</v-layout>
									</template>
									<v-date-picker v-model="date1" locale="it">
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs6 sm3 md3>
								<v-menu
								:close-on-content-click="false"
								v-model="menu_time_start"
								offset-y
								>
									<template v-slot:activator="{ on }">
										<v-layout align-center style="max-width: 160px">
											<v-btn v-on="on" icon> <v-icon>access_time</v-icon></v-btn>
											<v-text-field
											v-on="on"
											v-model="local_item.start_time"
											:label="$t('labels.start_time')"
											readonly></v-text-field>
										</v-layout>
									</template>
									<v-time-picker v-model="local_item.start_time">
									</v-time-picker>
								</v-menu>
							</v-flex>
							<v-flex xs6 sm3 md3>
								<v-menu
								:close-on-content-click="true"
								v-model="menu_date_end"
								offset-y
								>
									<template v-slot:activator="{ on }">
										<v-layout align-center style="max-width: 160px">
											<v-btn v-on="on" icon> <v-icon>event</v-icon></v-btn>
											<v-text-field
											v-on="on"
											v-model="local_item.end_date"
											:label="$t('labels.end_date')"
											readonly
											:rules="date2Rules"
											@blur="date2 = parseDate(local_item.end_date)">
											</v-text-field>
										</v-layout>
									</template>
									<v-date-picker v-model="date2" locale="it">
									</v-date-picker>
								</v-menu>
							</v-flex>
							<v-flex xs6 sm3 md3>
								<v-menu
								:close-on-content-click="false"
								v-model="menu_time_end"
								offset-y
								>
									<template v-slot:activator="{ on }">
										<v-layout align-center style="max-width: 160px">
											<v-btn v-on="on" icon> <v-icon>access_time</v-icon></v-btn>
											<v-text-field
											v-on="on"
											v-model="local_item.end_time"
											:label="$t('labels.end_time')"
											readonly>
											</v-text-field>
										</v-layout>
									</template>
									<v-time-picker v-model="local_item.end_time">
									</v-time-picker>
								</v-menu>
							</v-flex>
							<v-flex xs12 sm12 md6>
								<v-text-field
								v-model="local_item.duration"
								:label="$t('videos.fields.duration')"
								:readonly="local_item.media_type == 'video'"
								style="width: 100px" type="number">
								</v-text-field>
							</v-flex>
							<v-flex xs12 sm12 md6>
								<v-select
									v-model="local_item.days"
									:items="days"
									attach
									chips
									:label="$t('labels.days')"
									multiple
									:rules="daysRule"
								>
									<template v-slot:prepend-item>
										<v-list-item
											ripple
											@click="toggle()"
										>
											<v-list-item-action>
												<v-icon :color="color">{{ icon }}</v-icon>
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
									<v-text-field v-if="local_item.file_type == 'image'" v-model="local_item.duration" :label="$t('images.fields.duration')"></v-text-field>
								</v-flex>
								<v-flex v-if="local_item.by_monitor=='0'" xs12 sm12 md12>
								<v-select
											v-model="local_item.groups"
											:items="availableGroups"
											item-text="name"
								item-value="id"
											attach
											chips
											:label="$t('groups.fields.groups')"
											return-object
											multiple
										>
									<v-list-item slot="no-data">{{ $t('labels.no_data_available') }}</v-list-item>
										</v-select>
							</v-flex>
							<v-flex v-else xs12 sm12 md12>
								<v-layout row wrap>
									<v-layout column v-for="shop in shops" :key="shop.id" class="my-2">
											<v-checkbox
											v-if="shopMonitors(shop).length != 0"
											:label="shop.name"
											v-model="shop.is_selected"
											@change="toggleShopSelection(shop)"
											style="font-weight: bold; margin-bottom: -20px"
											></v-checkbox>
											<v-checkbox
											v-for="monitor in shopMonitors(shop)"
											:key="monitor.id"
											:label="monitor.name"
											style="padding-left: 10px; margin-bottom: -32px"
											:value="monitor.id"
											v-model="monitor_ids"
											@change="changeMonitorSelection(shop)"
											></v-checkbox>
									</v-layout>
								</v-layout>
							</v-flex>
						</v-layout>
					</v-form>
				</v-container>
			</v-card-text>
			<v-card-actions class="mt-10">
				<v-container>
					<v-layout>
						<v-btn color="red" dark @click="deleteItem()">{{ $t('buttons.delete') }}</v-btn>
						<v-spacer></v-spacer>
						<v-btn @click="onCancel">{{ $t('buttons.cancel') }}</v-btn>
						<v-btn color="primary" @click="save">{{ $t('buttons.save') }}</v-btn>
					</v-layout>
				</v-container>
			</v-card-actions>
		</v-card>
	</v-form>
</template>

<script>
	import { settings } from '../settings.js'
	import helper from '../helper.js'

  	export default {
  		props: ['item', 'groups', 'monitors', 'shops'],
  		data () {
			return {
				valid: false,
				date1: this.item.date1,
				date2: this.item.date2,
				menu_date_start: false,
				menu_time_start: false,
				menu_date_end: false,
				menu_time_end: false,
				
				local_item: Object.assign({}, this.item),

				monitor_ids: [],

			    date1Rules: [
			        v => !!v || this.$t('labels.start_date_required'),
			    ],
			    date2Rules: [
			        v => !!v || this.$t('labels.start_date_required'),
			    ],
			    daysRule: [
			        v => v.length > 0 || this.$t('labels.no_days'),
			    ],
			}
		},
		watch: {
			item(obj){
				let self = this;
				self.local_item = Object.assign({}, obj);
				self.local_item.duration = parseInt(obj.duration)
				self.date2 = obj.date2
				self.date1 = obj.date1
				self.local_item.groups = self.groups.filter(function(group) {
					if(!self.local_item.group_ids)
	          return false;
					return self.local_item.group_ids.split(',').map(Number).includes(group.id) === true;
				});
				if(this.local_item.monitor_ids)
					this.monitor_ids = this.local_item.monitor_ids.split(',').map(Number);
				self.shops.map(function(shop){ self.changeMonitorSelection(shop); });
			},

			// remove unwanted 0 in array
			monitor_ids(val){
				var self = this;
				this.monitor_ids.forEach(function(monitor_id, index){
					if(monitor_id === 0)
						self.monitor_ids.splice(index, 1)
				})
			},
	    	date1(val){
	    		this.local_item.start_date = helper.formatDate(this.date1);
	    	},
	    	date2(val){
	    		this.local_item.end_date = helper.formatDate(this.date2);
	    	},
	    },
	    computed: {
	    	availableGroups: function(){
	    		let self = this;
	    		return this.groups.filter(function(group){
	    			return group.aspect_ratio_id == self.local_item.aspect_ratio_id && group.group_type_id == self.local_item.group_type_id
	    		})
				},
				days(){
					return helper.h_getDays()
				},
				color(){
					if(!this.local_item.days)
						return ''
					else if(this.local_item.days.length > 0)
						return 'indigo darken-4'
					else
						return ''
				},
				isAll () {
					if(!this.local_item.days)
						return false
					else
						return this.local_item.days.length === this.days.length
				},
				isSome () {
					if(!this.local_item.days)
						return false
					else
						return this.local_item.days.length > 0 && !this.isAll
				},
				icon () {
					if (this.isAll) return 'mdi-close-box'
					if (this.isSome) return 'mdi-minus-box'
					return 'mdi-checkbox-blank-outline'
				},
	    },
	    created(){
	    	this.init();
	    },
	    methods: {
	    	init(){
					let self = this;
					self.local_item.groups = self.groups.filter(function(group) {
						if(!self.local_item.group_ids)
							return false;
						else
							return self.local_item.group_ids.split(',').map(Number).includes(group.id) === true;
					})
					if(this.local_item.monitor_ids)
						this.monitor_ids = this.local_item.monitor_ids.split(',').map(Number);
					self.shops.map(function(shop){ self.changeMonitorSelection(shop); });
	    	},
	    	onCancel(){
		    	this.$emit("cancel");
	    	},
	    	save(){
					if (this.$refs.form.validate()){
						if(this.local_item.is_new){
							this.local_item.monitor_ids = this.monitor_ids;
							this.$emit("saveNew", this.local_item);
						} else {
							if(this.local_item.media_type === 'video')
								var url = settings.root_url + '/api/videos/update/' + this.local_item.editedIndex;
							else if(this.local_item.media_type === 'image')
								var url = settings.root_url + '/api/images/update/' + this.local_item.editedIndex;
							else if(this.local_item.media_type === 'poster')
								var url = settings.root_url + '/api/posters/update/' + this.local_item.editedIndex;
							axios.post(url, {
											start_date: this.date1,
											start_time: this.local_item.start_time,
											end_date: this.date2,
											end_time: this.local_item.end_time,
											days: this.local_item.days.toString(),
											duration: this.local_item.duration,
											group_ids: this.local_item.groups.map(function(el){ return el.id }).toString(),
											monitor_ids: this.monitor_ids.toString(),
										})
										.then(response =>  {
											this.$emit("save");
										}).catch(error => {
											console.log(error)
										});
						}
					}
				},
				deleteItem(){
	    		if(this.local_item.is_new){
	    			// this.local_item.monitor_ids = this.monitor_ids;
	    			// this.$emit("saveNew", this.local_item);
	    		} else {
		    		if(this.local_item.media_type === 'video')
		    			var url = settings.root_url + '/api/videos/delete/' + this.local_item.editedIndex;
		    		else if(this.local_item.media_type === 'image')
		    			var url = settings.root_url + '/api/images/delete/' + this.local_item.editedIndex;
		    		else if(this.local_item.media_type === 'poster')
							var url = settings.root_url + '/api/posters/delete/' + this.local_item.editedIndex;
						
						var r = confirm('Are you sure you want to delete this item?');
						if(r == true){
							axios.post(url)
							.then(response =>  {
								this.$emit("deleteItem");
							}).catch(error => {
							
							});
						}
	    		}
	    	},
		    parseDate (date) {
		    	return helper.parseDate(date);
		    },
	    	shopMonitors(shop){
	    		let self = this;
	    		return this.monitors.filter(function(monitor){
	    			return monitor.shop_id == shop.id && monitor.aspect_ratio_id == self.local_item.aspect_ratio_id && monitor.type_id == self.local_item.group_type_id;
	    		})
	    	},
	    	toggleShopSelection(shop){
    			let self = this;
    			if(shop.is_selected){
    				var monitor_ids_ = self.monitor_ids.concat(self.shopMonitors(shop).map(function(el){ return el.id; }));
    				self.monitor_ids = monitor_ids_.filter(function(item, pos){
    					return monitor_ids_.indexOf(item) == pos;
    				});
    			}
    			else{
    				self.monitor_ids = self.monitor_ids.filter(function(monitor_id){
    					return self.shopMonitors(shop).map(function(el){ return el.id }).includes(monitor_id) === false;
    				});
    			}
	    	},
	    	changeMonitorSelection(shop){
	    		let self = this;
	    		shop.is_selected = this.shopMonitors(shop).every(function(monitor){
	    			return self.monitor_ids.includes(monitor.id)
	    		}) === true;
	    		// shop.is_selected = this.shopMonitors(shop).length <= this.monitor_ids.length;
				},
				toggle() {
					this.$nextTick(() => {
						if (this.isAll) {
							this.local_item.days = []
						} else {
							this.local_item.days = this.days.slice()
						}
					})
				},
	    }
  	}
</script>