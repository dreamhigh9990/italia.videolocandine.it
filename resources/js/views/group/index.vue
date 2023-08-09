<style scoped>
	.v-chip{
		height: auto;
	}
</style>

<template>
	<v-container fluid>
		<v-toolbar color="grey lighten-2">
			<v-toolbar-title>{{ $t('groups.title') }}</v-toolbar-title>
			<v-spacer></v-spacer>
			<template>
				<v-dialog v-model="dialog" max-width="800px" persistent>
					<template v-slot:activator="{ on }">
						<v-btn color="primary" dark class="mb-2" v-on="on">{{ $t('buttons.add_new') }}</v-btn>
					</template>
					<v-card>
						<v-card-title>
						<span class="headline" v-if="editedIndex == -1">{{ $t('groups.fields.create') }}</span>
						<span class="headline" v-if="editedIndex != -1">{{ $t('groups.fields.edit') }}</span>
						</v-card-title>

						<v-card-text>
							<v-form ref="form" lazy-validation v-model="valid">
							<v-container grid-list-md>
								<v-layout wrap>
									<v-flex md12>
										<v-text-field v-model="groupForm.name" :label="$t('groups.fields.groupname')" :rules="nameRules"></v-text-field>
									</v-flex>
									<v-flex md12 sm12 xs12>
										<v-select
										v-model="groupForm.type"
										:items="types"
										item-text="name"
										item-value="id"
										:label="$t('groups.fields.grouptype')"
										persistent-hint
										return-object
										></v-select>
									</v-flex>
									<v-flex md12 sm12 xs12>
										<v-select
										v-model="groupForm.aspectRatio"
										:items="ratios"
										item-text="name"
										item-value="id"
										:label="$t('groups.fields.aspectratio')"
										persistent-hint
										return-object
										></v-select>
									</v-flex>
									<template v-if="editedIndex > -1">
										<v-select
							            v-model="groupForm.monitors"
							            :items="groupForm.availableMonitors"
							            attach
							            chips
							            label="Assegna i monitor"
							            item-text="name"
										item-value="id"
							            return-object
							            multiple
								        >
								        </v-select>
<!-- 										<v-autocomplete
										v-model="groupForm.monitors"
										:items="groupForm.availableMonitors"
										chips
										label="Assegna i monitor"
										item-text="name"
										item-value="id"
										multiple
							            >
							            	<template v-slot:selection="data">
												<v-chip
												:selected="data.selected"
												close
												class="chip--select-multi"
												@input="remove(data.item)"
												>
												{{ data.item.name }}
												</v-chip>
											</template>
							        	</v-autocomplete> -->
							        </template>
									<v-flex md12 sm12 xs12>
										<v-textarea
										v-model="groupForm.description"
										:label="$t('groups.fields.description')"
										></v-textarea>
									</v-flex>
								</v-layout>
							</v-container>
							</v-form>
						</v-card-text>

						<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn @click="close">{{ $t('buttons.cancel') }}</v-btn>
						<v-btn color="primary" @click="save">{{ $t('buttons.save') }}</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</template>
		</v-toolbar>
		<v-data-table
		:headers="headers"
		:items="groups"
		class="elevation-1"
		:loading="isLoading"
		:no-data-text="$t('labels.no_data')"
		:items-per-page="100"
		:footer-props="footer_props"
		locale="it"
		:mobile-breakpoint="300"
		>
			<template v-slot:item.aspectratio="{ item }">
				{{ getAspectratio(item.aspect_ratio_id) }}
			</template>
			<template v-slot:item.grouptype="{ item }">
				{{ getGroupType(item.group_type_id) }}
			</template>
			<template v-slot:item.monitors="{ item }">
				<div v-if="getMonitors(item).length">
					<v-chip v-for="(item, index) in getMonitors(item)" :key="item.id"> {{ item.name }} </v-chip>
				</div>
				<div v-else>
					<v-chip class="no-group"> {{ $t('labels.no_monitor')}} </v-chip>
				</div>
			</template>
			<template v-slot:item.actions="{ item }">
				<v-icon
				class="mr-2"
				@click="editItem(item)"
				>
					edit
				</v-icon>
				<v-icon
				@click="deleteItem(item)"
				>
					delete
				</v-icon>
			</template>
		</v-data-table>
	</v-container>
</template>

<script>
	import { settings } from '../../settings.js'
  	export default {
  		components: {
		},
  		data () {
			return {
				dialog: false,
				valid: true,
				isLoading: false,
				types: [],
				ratios: [],
				groups: [],
				monitors: [],
				editedIndex: -1,
				footer_props: {
					itemsPerPageText: "Righe per pagina",
					itemsPerPageOptions: [100],
				},

				groupForm: {
					name: '',
					type: {},
					aspectRatio: {},
					description: '',
					monitors: [],
					availableMonitors: [],
				},
				defaultItem: {
					name: '',
					type: {},
					aspectRatio: {},
					description: '',
					monitors: [],
					availableMonitors: [],
				},
				nameRules: [
			        v => !!v || this.$t('labels.name_required'),
			    ],
			}
		},
		watch: {
			dialog(val){
				val || this.close();
			}
		},
	    created(){
            this.init();
	    },
	    computed: {
			headers(){
				return [
					{ text: this.$t('groups.fields.groupname'), value: 'name', sortable: false, align: 'center' },
					{ text: this.$t('groups.fields.aspectratio'), value: 'aspectratio', sortable: false, align: 'center' },
					{ text: this.$t('groups.fields.grouptype'), value: 'grouptype', sortable: false, align: 'center' },
					{ text: this.$t('labels.monitor'), value: 'monitors', sortable: false, align: 'center', sortable: false },
					{ text: this.$t('labels.actions'), value: 'actions', sortable: false, align: 'center' }
				]
			},
		},
	    methods: {
	    	init(){
	    		this.isLoading = true;
	    		axios.get(settings.root_url + '/api/groups/load')
		            .then(response => {
		                this.types = response.data.types;
		                this.ratios = response.data.ratios;
		                this.groups = response.data.groups;
		                this.monitors = response.data.monitors;
		                this.isLoading = false;
		            }).catch(response => {
		            	console.log("error");
		            	this.isLoading = false;
		            });
	    	},
	      	editItem (item) {
	        	this.editedIndex = item.id;
	        	this.groupForm = Object.assign({}, item);
	        	this.groupForm.type = {id: parseInt(item.group_type_id)};
	        	this.groupForm.aspectRatio = {id: parseInt(item.aspect_ratio_id)};
	        	this.groupForm.monitors = this.getMonitors(item);
	        	this.groupForm.availableMonitors = this.getAvailableMonitors(item);
	        	this.dialog = true
	      	},

	      	deleteItem (item) {
	        	this.editedIndex = item.id;
	        	var r = confirm(this.$t('groups.fields.delete_confirm'));
	        	if(r == true){
	        		axios.post(settings.root_url + '/api/groups/delete/' + this.editedIndex)
                    .then(response =>  {
						this.getGroups();
                    }).catch(error => {

                    });
	        	}
	        	this.editedIndex = -1;
	      	},

	      	close () {
				this.dialog = false
        		setTimeout(() => {
          			this.groupForm = Object.assign({}, this.defaultItem)
          			this.editedIndex = -1
          			this.$refs.form.resetValidation();
        		}, 300)
			},
			save () {
				if (this.$refs.form.validate()) {
					if (this.editedIndex > -1) {
						console.log(this.groupForm.monitors);
	                    axios.post(settings.root_url + '/api/groups/update/' + this.editedIndex, {
	                    	name: this.groupForm.name,
	                    	aspect_ratio_id: this.groupForm.aspectRatio.id,
	                    	group_type_id: this.groupForm.type.id,
	                    	description: this.groupForm.description,
	                    	monitor_ids: this.groupForm.monitors.map(function(el){return el.id}).toString(),
	                    })
	                    .then(response =>  {
	                    	this.groupForm = this.defaultItem;
	                    	this.getGroups();
	                    }).catch(error => {
	                    });
					} else {
	                    axios.post(settings.root_url + '/api/groups/add-new', {
		                    name: this.groupForm.name,
		                    aspect_ratio_id: this.groupForm.aspectRatio.id,
		                    group_type_id: this.groupForm.type.id,
		                    description: this.groupForm.description,
		                    monitor_ids: this.groupForm.monitors.map(function(el){return el.id}).toString(),
	                    })
	                    .then(response =>  {
	                    	this.groupForm = this.defaultItem;
	                    	this.getGroups();
	                    }).catch(error => {
	                    });
					}
	                this.groupForm = this.defaultItem;
					this.editedIndex = -1;
					this.close();
				}
			},
			getGroups(){
				this.isLoading = true;
	    		axios.get(settings.root_url + '/api/groups')
		            .then(response => {
		                this.groups = response.data.groups;
		                this.isLoading = false;
		            }).catch(response => {
		            	console.log("error");
		            	this.isLoading = false;
		            });
	    	},

	      	getAspectratio(ratioId){
	      		var ratio = this.ratios.filter(function(ratio){
	      			return ratio.id == ratioId;
	      		});
	      		return ratio[0].name;
	      	},
	      	getGroupType(typeId){
	      		var type = this.types.filter(function(type){
	      			return type.id == typeId;
	      		});
	      		return type[0].name;
	      	},
	      	remove (item) {
		        const index = this.groupForm.monitors.indexOf(item.id)
		        if (index >= 0) this.groupForm.monitors.splice(index, 1)
		    },
			getMonitors(group){
				if(group.monitor_ids){
					var arr_ids = group.monitor_ids.split(",");
					return this.monitors.filter(function(monitor) {
						return arr_ids.includes(monitor.id.toString()) == true;
					})
				}
				return [];
			},
			getAvailableMonitors(group){
				// console.log("group" + group.aspect_ratio_id +  " " + group.type_id);
				// console.log(this.monitors);
	    		return this.monitors.filter(function(monitor){
	    			return monitor.aspect_ratio_id == group.aspect_ratio_id && monitor.type_id == group.group_type_id
	    		})
	    	},
	    }
  	}
</script>