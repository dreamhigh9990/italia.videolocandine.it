<template>
	<v-container fluid grid-list-md>
		<v-layout>
			<v-flex xs12 sm6 md4>
				<v-select
				v-model="filterForm.shop_id"
				:items="shops"
				item-text="name"
				item-value="id"
				:label="$t('monitors.fields.shop')"
				@change="getMonitors()"
				></v-select>
			</v-flex>
			<v-flex xs12 sm6 md4>
				<v-select
				v-model="filterForm.group_id"
				:items="groups"
				item-text="name"
				item-value="id"
				:label="$t('monitors.fields.groups')"
				@change="getMonitors()"
				></v-select>
			</v-flex>
		</v-layout>

		<v-toolbar color="grey lighten-2">
			<v-toolbar-title>{{ $t('labels.monitor') }}</v-toolbar-title>
			<v-spacer></v-spacer>
			<template>
				<v-dialog
				v-model="isUploading"
				hide-overlay
				persistent
				width="300"
			  >
					<v-card
					color="primary"
					dark
					>
						<v-card-text>
						{{ loading_dialog_text }}
							<v-progress-linear
							indeterminate
							color="white"
							class="mb-0"
							></v-progress-linear>
						</v-card-text>
					</v-card>
			  </v-dialog>
				<v-dialog v-model="dialog" max-width="700px" persistent>
					<template v-slot:activator="{ on }">
						<v-btn color="primary" dark class="mb-2" v-on="on">{{ $t('buttons.add_new') }}</v-btn>
					</template>
					<v-form ref="form" v-model="valid" lazy-validation>
						<v-card>
							<v-card-title>
							<span class="headline" v-if="editedIndex == -1">{{ $t('monitors.fields.create') }}</span>
							<span class="headline" v-if="editedIndex != -1">{{ $t('monitors.fields.edit') }}</span>
							</v-card-title>

							<v-card-text>
								<v-container grid-list-md>
									<v-layout wrap>
										<v-flex md12>
											<v-text-field v-model="monitorForm.name" dense :label="$t('monitors.fields.name')" :rules="[rules.required]"></v-text-field>
										</v-flex>
										<v-flex md12>
											<v-select
											v-model="monitorForm.shop"
											:items="shops"
											item-text="name"
											item-value="id"
											:label="$t('monitors.fields.shop')"
											persistent-hint
											return-object
											:rules="[rules.required]"
											></v-select>
										</v-flex>
										<v-flex md12>
											<v-select
											v-model="monitorForm.aspectRatio"
											:items="ratios"
											item-text="name"
											item-value="id"
											:label="$t('monitors.fields.aspectratio')"
											persistent-hint
											return-object
											:rules="[rules.required]"
											></v-select>
										</v-flex>
										<v-flex xs12 sm6>
											<v-select
											v-model="monitorForm.type"
											:items="types"
											item-text="name"
											item-value="id"
											:label="$t('monitors.fields.type')"
											persistent-hint
											return-object
											:rules="[rules.required]"
											></v-select>
										</v-flex>
										<v-flex xs12 sm6>
											<v-select
											v-model="monitorForm.rotation"
											:items="rotations"
											:label="$t('monitors.fields.rotation')"
											:rules="[rules.required]"
											></v-select>
										</v-flex>
										<v-textarea
										v-model="monitorForm.description"
										:label="$t('campaign.fields.description')"
										></v-textarea>
										<v-flex xs12 sm12 md12>
											{{ $t('labels.redundancy_description') }}
										</v-flex>
										<v-flex xs12 sm12 md12 class="d-flex align-center">
											<v-dialog v-model="redundancyPreview" max-width="300">
												<image-preview v-if="monitorForm.redundancy != null && monitorForm.redundancy !== undefined && monitorForm.redundancy.type == 'image'" :src="previewSrc"></image-preview>
											</v-dialog>
											<label class="v-btn primary" style="padding: 6px 14px; cursor: pointer">
									            <input
									            type="file"
									            @change="prepareMedia"
									            name="media"
									            id="media"
									            style="display: none"
									            >
									            {{ $t('buttons.choose_files')}}
									            <v-icon right dark>cloud_upload</v-icon>
									        </label>
									        <div v-if="monitorForm.redundancy" class="ml-2" style="cursor: pointer" @click="redundancyPreview = true">
									        	{{ monitorForm.redundancy.file }}
									        </div>
									    </v-flex>
									</v-layout>
								</v-container>
							</v-card-text>

							<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn @click="close">{{ $t('buttons.cancel') }}</v-btn>
							<v-btn color="primary" @click="save">{{ $t('buttons.save') }}</v-btn>
							</v-card-actions>
						</v-card>
					</v-form>
				</v-dialog>
			</template>
		</v-toolbar>
		<v-data-table
		:headers="headers"
		:items="monitors"
		class="elevation-1"
		:loading="isLoading"
		:loading-text="$t('labels.loading_items')"
		:no-data-text="$t('labels.no_data')"
		:items-per-page="100"
		:footer-props="footer_props"
		:mobile-breakpoint="300"
		>
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
import helper from '../../helper.js'
import { settings } from '../../settings.js'
import ImagePreview from '../../components/ImagePreview'
  	export default {
  		components: {
  			ImagePreview
  		},
  		data () {
			return {
				valid: true,
				dialog: false,
				isLoading: false,
				isUploading: false,
				loading_dialog_text: '',
				types: [],
				ratios: [],
				shops: [],
				monitors: [],
				groups: [],

				redundancyPreview: false,
				
				filter_shop: '',

				editedIndex: -1,
				monitorForm: {
					name: '',
					shop: {},
					type: {},
					aspectRatio: {},
					rotation: '',
					redundancy: null,
					description: ''
				},
				defaultItem: {
					name: '',
					shop: {},
					type: {},
					aspectRatio: {},
					rotation: '0',
					redundancy: null,
					description: ''
				},
				filterForm: {
					shop_id: '',
					group_id: '',
				},
				rotations: [ '0', '90', '180', '270' ],
				footer_props: {
					itemsPerPageText: "Righe per pagina",
					itemsPerPageOptions: [100],
				},

				rules: {
					required: value => !!value || this.$t('labels.name_required'),
				}
			}
		},
	    computed: {
			headers(){
				return [
					{ text: this.$t('monitors.fields.id'), value: 'id', sortable: false, align: 'center' },
					{ text: this.$t('monitors.fields.name'), value: 'name', align: 'center' },
					{ text: this.$t('monitors.fields.shop'), value: 'shop', align: 'center' },
					{ text: this.$t('monitors.fields.aspectratio'), value: 'aspectratio', align: 'center' },
					{ text: this.$t('monitors.fields.type'), value: 'type', align: 'center' },
					{ text: this.$t('monitors.fields.rotation'), value: 'rotation', align: 'center' },
					{ text: this.$t('labels.actions'), value: 'actions', sortable: false, align: 'center' }
				]
			},
			previewSrc(){
				if(this.monitorForm.redundancy)
					return settings.root_url + '/media/monitor-redundancies/' + this.monitorForm.redundancy.file;
				else
					return null;
			}
		},

	    watch: {
	      	dialog (val) {
	        	val || this.close()
	      	}
	    },

	    created(){
        this.init();
	    },

	    methods: {
	    	init(){
					this.isLoading = true;
					axios.get(settings.root_url + '/api/monitors/load')
					.then(response => {
							this.types = response.data.types;
							this.ratios = response.data.ratios;
							this.shops = response.data.shops;
							this.groups = response.data.groups;
							this.getMonitors()
					}).catch(response => {
						this.isLoading = false;
					});
	    	},
	      	editItem (item) {
	        	this.editedIndex = item.id;
	        	this.monitorForm = Object.assign({}, item);
	        	this.monitorForm.shop = {id: parseInt(item.shop_id)};
	        	this.monitorForm.type = {id: parseInt(item.type_id)};
	        	this.monitorForm.aspectRatio = {id: parseInt(item.aspect_ratio_id)};
	        	axios.get(settings.root_url + '/api/monitors/redundancy/' + item.id)
	            .then(response => {
	                this.monitorForm.redundancy = response.data.redundancy;
	        		this.dialog = true
	            }).catch(response => {
	            	console.log(response);
	            });
	      	},

	      	deleteItem (item) {
	        	this.editedIndex = item.id;
	        	var r = confirm(this.$t('monitors.fields.delete_confirm'));
	        	if(r == true){
	        		axios.post(settings.root_url + '/api/monitors/delete/' + this.editedIndex)
                    .then(response =>  {
						this.getMonitors();
                    }).catch(error => {

                    });
	        	}
	        	this.editedIndex = -1;
	      	},

	      	close () {
				this.dialog = false
				setTimeout(() => {
          			this.monitorForm = Object.assign({}, this.defaultItem)
          			this.$refs.form.resetValidation()
          			this.editedIndex = -1
        		}, 300)
			},
			save () {
				if (this.$refs.form.validate()) {
					if (this.editedIndex > -1) {
						let monitorForm = new FormData();
						monitorForm.append('name', this.monitorForm.name);
						monitorForm.append('shop_id', this.monitorForm.shop.id);
						monitorForm.append('aspect_ratio_id', this.monitorForm.aspectRatio.id);
						monitorForm.append('type_id', this.monitorForm.type.id);
						monitorForm.append('rotation', this.monitorForm.rotation);
						monitorForm.append('description', this.monitorForm.description);
						axios.post(settings.root_url + '/api/monitors/update/' + this.editedIndex, monitorForm)
						.then(response =>  {
							this.$toastr.s(
								this.$t('monitors.fields.updated_successfully'),
							);
							this.getMonitors();
						}).catch(error => {
						});
					} else {
						let monitorForm = new FormData();
						monitorForm.append('name', this.monitorForm.name);
						monitorForm.append('shop_id', this.monitorForm.shop.id);
						monitorForm.append('aspect_ratio_id', this.monitorForm.aspectRatio.id);
						monitorForm.append('type_id', this.monitorForm.type.id);
						monitorForm.append('rotation', this.monitorForm.rotation);
						monitorForm.append('description', this.monitorForm.description);
						axios.post(settings.root_url + '/api/monitors/add-new', monitorForm)
						.then(response =>  {
							this.$toastr.s(
								this.$t('monitors.fields.added_successfully'),
							);
							this.getMonitors();
						}).catch(error => {
						});
					}
	        this.monitorForm = this.defaultItem;
					this.editedIndex = -1;
					this.close()
				}
			},
			getMonitors(){
				this.isLoading = true;
				let url = helper.getFilterURL(this.filterForm);
				axios.get(settings.root_url + '/api/monitors?' + url)
				.then(response => {
					this.monitors = response.data.monitors;
					this.isLoading = false;
				}).catch(response => {
					this.isLoading = false;
				});
	    },
	    	prepareMedia(e){
	    		let items = e.target.files || e.dataTransfer.files;
	    		if (items.length > 0) {
                	let mediaForm = new FormData();
                    let attachment = items[0];
                    mediaForm.append('media', attachment);
	    			this.isUploading = true;
                    this.loading_dialog_text = 'Sto scaricando la Locandina, potrebbero volerci alcuni secondi';
                    axios.post(settings.root_url + '/api/monitors/upload-redundancy/' + this.editedIndex, mediaForm)
	                .then(response => {
	                	this.monitorForm.redundancy = response.data.image
	                	console.log(this.monitorForm.redundancy);
	            		this.isUploading = false;
	                }).catch(error => {
	                });
                }
	    	},
	    }
  	}
</script>