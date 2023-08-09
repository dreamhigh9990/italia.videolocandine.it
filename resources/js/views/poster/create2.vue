<style scoped>
	.img-container-card{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 6px;
		width: 150px;
		height: 150px;
	}
	.img-btn{
		cursor: pointer;
		display: flex;
	    align-items: flex-end;
	    justify-content: center;
	    text-align: center;
	    padding-bottom: 8px;
	}
	.btn-over-img{
		position: absolute;
		bottom: 10px;
	}

	.flip-list-move {
	  	transition: transform 0.5s;
	}
	.no-move {
	  	transition: transform 0s;
	}
	.ghost {
	  	opacity: 0.5;
	  	background: #c8ebfb;
	}
	.list-group {
	  	min-height: 20px;
	}
	.list-group-item {
	  	cursor: move;
	}
	.list-group-item i {
	  	cursor: pointer;
	}
	.selected{
		background: #E0E0E0;
	}
</style>

<template>
	<v-container fluid grid-list-md style="background-color: #757575">
		<v-layout row wrap justify-content-center my-3 mx-3>
			<template>
				<v-dialog
				v-model="uploading_dialog"
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
				<v-dialog v-model="posterDialog" max-width="700px">
					<v-form ref="posterForm" lazy-validation v-model="valid">
						<v-card>
							<v-card-title>
							<span class="headline">{{ $t('labels.edit_media') }}</span>
							</v-card-title>
							<v-card-text>
								<v-container grid-list-md>
									<v-layout wrap justify-space-between>
										<v-flex xs12 sm12 md6>
											<v-text-field
											v-model="posterForm.name"
											label="Name"
											:rules="nameRules"
											></v-text-field>
										</v-flex>
										<v-flex xs12 sm12 md6>
											<v-select
								            v-model="posterForm.campaign"
								            :items="campaigns"
								            item-text="name"
											item-value="id"
								            :label="$t('campaign.fields.campaigns')"
								            :rules="campaignRules"
								            return-object
								            @input="onCampaignChange"
									        >
									        </v-select>
										</v-flex>
										<v-flex xs6 sm6 md3>
											<v-menu
											:close-on-content-click="true"
											v-model="menu_date_start"
											>
												<template v-slot:activator="{ on }">
													<v-text-field
													v-model="posterForm.start_date"
													:label="$t('labels.start_date')"
													readonly
													style="width: 150px;"
													prepend-icon="event"
													v-on="on"
													:rules="date1Rules"
													@blur="date1 = parseDate(posterForm.start_date)">
													</v-text-field>
												</template>
												<v-date-picker v-model="date1" locale="it">
												</v-date-picker>
											</v-menu>
										</v-flex>
										<v-flex xs6 sm6 md3>
											<v-menu
											:close-on-content-click="false"
											v-model="menu_time_start"
											>
												<template v-slot:activator="{ on }">
													<v-text-field slot="activator" v-model="posterForm.start_time"  :label="$t('labels.start_time')" readonly style="width: 120px;" v-on="on"></v-text-field>
												</template>
												<v-time-picker v-model="posterForm.start_time" format="24hr">
												</v-time-picker>
											</v-menu>
										</v-flex>
										<v-flex xs6 sm6 md3>
											<v-menu
											:close-on-content-click="true"
											v-model="menu_date_end"
											>
												<template v-slot:activator="{ on }">
													<v-text-field
													slot="activator"
													v-model="posterForm.end_date"
													:label="$t('labels.end_date')"
													readonly
													style="width: 150px;"
													prepend-icon="event"
													v-on="on"
													:rules="date2Rules"
													@blur="date2 = parseDate(posterForm.end_date)">
													</v-text-field>
												</template>
												<v-date-picker v-model="date2" locale="it">
												</v-date-picker>
											</v-menu>
										</v-flex>
										<v-flex xs6 sm6 md3>
											<v-menu
											:close-on-content-click="false"
											v-model="menu_time_end"
											>
												<template v-slot:activator="{ on }">
													<v-text-field slot="activator" v-model="posterForm.end_time"  :label="$t('labels.end_time')" readonly style="width: 120px;" v-on="on"></v-text-field>
												</template>
												<v-time-picker v-model="posterForm.end_time" format="24hr">
												</v-time-picker>
											</v-menu>
										</v-flex>
										<v-flex xs12 xs5 md5>
											<v-text-field
											v-model="posterForm.duration"
											label="Sec"
											:rules="durationRules"
											type="number"
											></v-text-field>
										</v-flex>
										<v-flex xs12 xs5 md5>
											<v-select
								            v-model="posterForm.group_type"
								            :items="group_types"
								            item-text="name"
											item-value="id"
								            :label="$t('groups.fields.grouptype')"
								            :rules="typeRules"
								            return-object
								            @input="onTypeChange"
									        >
									        </v-select>
										</v-flex>
										<v-flex xs12 sm12 md12>
											<v-select
								            v-model="posterForm.groups"
								            :items="posterForm.availableGroups"
								            item-text="name"
											item-value="id"
								            attach
								            chips
								            :label="$t('groups.title')"
								            return-object
								            multiple
									        >
													<v-list-item slot="no-data">{{ $t('labels.no_data_available') }}</v-list-item>
									        </v-select>
										</v-flex>
									</v-layout>
								</v-container>
							</v-card-text>
							<v-card-actions>
								<v-container text-xs-right text-sm-right text-md-right>
									<v-btn @click="closePosterForm">{{ $t('buttons.cancel') }}</v-btn>
									<v-btn color="primary" @click="publish">{{ $t('buttons.save') }}</v-btn>
								</v-container>
							</v-card-actions>
						</v-card>
					</v-form>
				</v-dialog>
			</template>

			<v-layout class="row ml-4 mt-4">
				<canvas id="canvas"></canvas>
				<v-layout style="display: block; margin-left: 60px">
					<v-card style="width: 324px">
						<v-card-text>
							<v-layout row wrap>
								<v-flex xs12 md12>
									<label class="v-btn primary mb-2 v-btn--block" style="padding: 6px; cursor: pointer">
							            <input
							            type="file"
							            @change="prepareNewImage"
							            name="new_img"
							            id="new_img"
							            style="display: none;"
							            >
							            {{ $t('poster.load_picture') }}
							        </label>
							    	<v-dialog v-model="image_dialog" max-width="700px">
							        	<template v-slot:activator="{ on }">
											<v-btn block color="primary" v-on="on">{{ $t('poster.add_pictures') }}</v-btn>
										</template>
										<v-card>
											<v-container>
												<v-card-title>
													<span class="headline">{{ $t('poster.product_photos') }}</span>
												</v-card-title>
												<v-card-text>
													<v-layout row wrap>
														<v-flex xs12 sm12 md12>
															<label class="v-btn primary" style="padding: 6px; margin-bottom: 10px; cursor: pointer">
													            <input
													            type="file"
													            @change="prepareSavedImage"
													            name="saved_img"
													            id="saved_img"
													            style="display: none;"
													            multiple>
													            {{ $t('buttons.choose_files')}}
													        </label>
													    </v-flex>
														<v-flex
															v-for="(image, index) in prepared_images"
															:key="index"
														>
															<v-card
															@click="selectPreparedImage(image)"
															class="img-container-card"
															max-width="150"
															max-height="150">
																<v-img
																	:src="getPreparedImageName(image)"
																	contain
																	max-width="140"
																	max-height="140"
																	class="img-btn"
																>
																</v-img>
																<v-btn class="btn-over-img" @click.stop="deleteSavedImage(image)">Delete</v-btn>
															</v-card>
														</v-flex>
													</v-layout>
												</v-card-text>
											</v-container>
										</v-card>
									</v-dialog>
								</v-flex>
								
								<v-flex xs12 sm12 md12>
									<v-divider></v-divider>
								</v-flex>
							    
							    <v-flex xs12 sm12 md12>
							    	<v-btn
							    	v-for="(font, id) in fonts"
							    	text
							    	small
							    	:key="id"
							    	:style="{ 'fontFamily': font.name }"
							    	@click="onClickText(font.name)"
							    	block>
							    	{{ font.name }}
							    	</v-btn>
							    </v-flex>
							    
							    <v-flex xs12 sm12 md12>
							    	<v-divider></v-divider>
							    </v-flex>

						        <v-flex xs12 sm12 md12>
							        <v-btn-toggle v-model="text_align" mandatory @change="onAlignChange">
							          	<v-btn>
							            	<v-icon>format_align_left</v-icon>
							          	</v-btn>
							          	<v-btn>
							            	<v-icon>format_align_center</v-icon>
							          	</v-btn>
							          	<v-btn>
							            	<v-icon>format_align_right</v-icon>
							          	</v-btn>
							          	<v-btn>
							            	<v-icon>format_align_justify</v-icon>
							          	</v-btn>
							        </v-btn-toggle>
								    <v-btn-toggle
									v-model="formatting"
									multiple
									@change="onStyleChange"
									style="margin-top: 6px"
									>
										<v-btn color="white">
											<v-icon>mdi-format-italic</v-icon>
										</v-btn>
										<v-btn color="white">
											<v-icon>mdi-format-bold</v-icon>
										</v-btn>
										<v-btn color="white">
											<v-icon>mdi-format-underline</v-icon>
										</v-btn>
										<v-menu offset-y :close-on-content-click="false"
										>
											<template v-slot:activator="{ on }">
									          	<v-btn v-on="on">
									            	<v-icon>format_color_fill</v-icon>
									          	</v-btn>
											</template>
											<v-color-picker v-model="color" @input="onColorInput"></v-color-picker>
										</v-menu>
									</v-btn-toggle>
								</v-flex>
					      	</v-layout>
						</v-card-text>
						<v-card-text>
							<v-layout row wrap>
								<v-flex xs12 sm12 md12>
							    	<v-divider></v-divider>
							    </v-flex>
								<v-flex xs12 sm12 md12>
									<v-btn icon @click="undo">
				          				<v-icon>arrow_back</v-icon>
				          			</v-btn>
				          			<v-btn icon @click="redo">
				          				<v-icon>arrow_forward</v-icon>
				          			</v-btn>
				          		</v-flex>
				          		<v-flex xs12 sm12 md12>
							    	<v-divider></v-divider>
							    </v-flex>
								<v-flex xs12 sm12 md12>
									<v-btn color="primary" @click="posterDialog = true">{{ $t('labels.publish')}}</v-btn>
									<v-btn color="primary" @click="save">{{ $t('buttons.save')}}</v-btn>
								</v-flex>
							</v-layout>
						</v-card-text>
					</v-card>
					<div class="mt-3"></div>
					<v-card width="324">
						<v-app-bar dark style="cursor: pointer" @click="layers_visible = !layers_visible">
							<v-toolbar-title>{{ $t('poster.layers') }}</v-toolbar-title>
							<v-spacer></v-spacer>
						    <v-icon>expand_more</v-icon>
						</v-app-bar>
						<draggable
				        class="list-group"
				        v-model="list"
				        v-bind="dragOptions"
				        @start="drag = true"
				        @end="drag = false"
				        @change="onLayerChange"
				      	>
				      		<transition-group type="transition" :name="!drag ? 'flip-list' : null" v-show="layers_visible">
					          	<v-list-item
					          	v-for="element in list"
					          	:key="element.ind"
					          	:class="{selected: element.layer_selected }"
					          	@click="onSelectElem(element)"
					          	@dblclick="onRenameImage(element)"
					          	>
						      		<v-dialog v-model="rename_dialog" max-width="700px">
										<v-card>
											<v-container>
												<v-card-text>
													<v-text-field
													v-model="elem_name"
													label="Name"
													></v-text-field>
												</v-card-text>
												<v-card-actions>
													<v-btn @click="cancelRenameImage">{{ $t('buttons.cancel') }}</v-btn>
													<v-btn color="primary" @click="renameImage(element.ind)">{{ $t('buttons.save') }}</v-btn>
												</v-card-actions>
											</v-container>
										</v-card>
									</v-dialog>
					          		<v-list-item-icon>
					          			<v-btn icon @click="toggleVisibility(element)">
					          				<v-icon v-if="element.visible">visibility</v-icon>
					          				<v-icon v-else>visibility_off</v-icon>
					          			</v-btn>
					          			<v-btn v-if="element.ind" icon @click="removeObject(element)">
					          				<v-icon>delete</v-icon>
					          			</v-btn>
					          			<v-icon class="mr-2">{{ mediaIcon(element) }}</v-icon>
							        </v-list-item-icon>
					          		<v-list-item-content>
							            <v-list-item-title v-text="element.filename || element.text || 'Immagine'"></v-list-item-title>
							        </v-list-item-content>
					          	</v-list-item>
					        </transition-group>
				    	</draggable>
					</v-card>
				</v-layout>
			</v-layout>
		</v-layout>
	</v-container>
</template>

<script>
	var FontFaceObserver = require('fontfaceobserver');
	import { settings } from '../../settings.js'
	import helper from '../../helper.js'
	import draggable from 'vuedraggable'
  	export default {
  		components: {
        },
  		data () {
			return {
				valid: true,
				width: 500,
				height: 800,
				bg_width: '',
				bg_height: '',
				canvas: null,
				color: '',
				font: 'Permanent Marker',
				text_align: undefined,
				formatting: [],

				image_dialog: false,
				prepared_images: [],

				uploading_dialog: false,
				loading_dialog_text: '',

				menu_color_picker: false,

				menu_date_start: false,
				menu_time_start: false,
				menu_date_end: false,
				menu_time_end: false,
				date1: '',
				date2: '',
				posterDialog: false,
				posterForm: {
					name: '',
					campaign: '',
					group_type: '',
					start_date: '',
					end_date: '',
					start_time: '',
					end_time: '',
					aspect_ratio_id: '',
					groups: [],
					availableGroups: [],
				},

				layers_visible: true,
				drag: false,
				list: [],

				campaigns: [],
				group_types: [],
				groups: [],

				fonts: [],
				user: null,

				rename_dialog: false,
				elem_name: '',

				state: [],				//history states
				state_list: [],			//history of layers panel states
				mods: 0,				//history stepper

				nameRules: [
			        v => !!v || this.$t('labels.name_required'),
			    ],
			    durationRules: [
			        v => !!v || 'La durata in secondi è un campo necessario',
			    ],
			    typeRules: [
			        v => !!v || 'Il tipo della Locandina è obbligatorio',
			    ],
			    campaignRules: [
			        v => !!v || 'Il nome della Campagna è obbligatorio',
			    ],
			    date1Rules: [
			        v => !!v || this.$t('labels.start_date_required'),
			    ],
			    date2Rules: [
			        v => !!v || this.$t('labels.end_date_required'),
			    ],
			}
		},
	    created(){
	    },
	    mounted(){
	    	this.loading_dialog_text = 'Sto scaricando la Locandina, potrebbero volerci alcuni secondi';
	    	this.uploading_dialog = true;
			let STEP = 3;
	    	fabric.Object.NUM_FRACTION_DIGITS = 10;

	    	window.addEventListener("keydown", function(e){
	    		var activeobj = this.canvas.getActiveObject();
	    		if(!activeobj.ind)
	    			return;
	    		if(e.key === "Delete"){
	    			if(activeobj){
		    			this.canvas.remove(activeobj);
		    			for( var i = 0; i < this.list.length; i++){ 
						   	if ( this.list[i].ind == activeobj.ind) {
						     	this.list.splice(i, 1);
						     	break;
						   	}
						}
	    			}
	    		} else if(e.key === "ArrowLeft"){
	    			activeobj.set({ left: activeobj.left - STEP });
	    		} else if(e.key === "ArrowRight"){
	    			activeobj.set({ left: activeobj.left + STEP });
	    		} else if(e.key === "ArrowUp"){
	    			activeobj.set({ top: activeobj.top - STEP });
	    		} else if(e.key === "ArrowDown"){
	    			activeobj.set({ top: activeobj.top + STEP });
	    		}
	    		activeobj.setCoords();
	    		this.canvas.renderAll();
	    	}.bind(this));

	    	window.addEventListener("mouseup", function(e){
	    		var activeobj = this.canvas.getActiveObject();
	    		if(activeobj){
	    			let elem = this.list.find(function(list){
	    				return list.ind === activeobj.ind;
	    			})
	    			this.onSelectElem(elem);
	    		} else {
	    			this.unselectAll();
	    		}
	    	}.bind(this));

	    	var bgImage = new fabric.Image();
    		var width = this.width;
    		var height = this.height;
    		var self = this;
    		var list = this.list;

    		axios.get(settings.root_url + '/api/posters-bg/' + this.$route.params.id)
            .then(response => {
            	this.fonts = response.data.fonts;
            	var fonts = this.fonts.map(function(el){ return el.name });
            	WebFont.load({
				    google: {
				      	families: fonts
				    }
				});
            	this.user = response.data.user;
                bgImage.setSrc(settings.root_url + '/users/' + this.user.name + '/formats/' + response.data.bg.file, function(img){
                	var min_width = Math.min(img.width, width);

                	self.canvas = new fabric.Canvas('canvas', {
			    		width: min_width,
			    		height: img.height * parseFloat(min_width / img.width),
			    		backgroundColor: '#fff',
			    		preserveObjectStacking: true,
			    	});
	    			bgImage.set({
	    				top: 0,
	    				left: 0,
	    				editable: false,
	    				selectable: false,
	    				evented: false,
	    				scaleX:  parseFloat(min_width / img.width),
	    				scaleY:  parseFloat(min_width / img.width),
	    			})
	    			self.bg_width = bgImage.width;
	    			self.bg_height = bgImage.height;
	    			bgImage.visible = true;
	    			self.canvas.add(bgImage);

	    			bgImage.ind = 0;
	    			bgImage.text = 'Format';
	    			bgImage.object_type = 'format';
	    			bgImage.layer_selected = bgImage.layer_selected || false;
		    		list.push(bgImage);
	    			self.canvas.renderAll();

	    			self.canvas.on(
			    		'object:modified', function(){
			    			self.updateModifications(true);
			    		}
			    	);
			    	self.updateModifications(true);
	    		});
	    		this.campaigns = response.data.campaigns;
	    		this.group_types = response.data.group_types;
	    		this.groups = response.data.groups;
	    		this.prepared_images = response.data.prepared_images;

	    		this.uploading_dialog = false;
            });
	    },
	    computed: {
	    	dragOptions() {
		      	return {
			        animation: 200,
			        group: "description",
			        disabled: false,
			        ghostClass: "ghost"
		      	};
		    },
	    },
	    watch: {
	    	date1(val){
	    		this.posterForm.start_date = helper.formatDate(this.date1);
	    	},
	    	date2(val){
	    		this.posterForm.end_date = helper.formatDate(this.date2);
	    	},
	    },
	    methods: {
	    	onColorInput(){
	    		var activeobj = this.canvas.getActiveObject();
	    		if(activeobj)
	    			activeobj.setColor(this.color);
	    		this.canvas.renderAll();
	    	},
	    	onClickText(font){
    			var addtext = new fabric.Textbox("Promo!", {
	    			fontFamily: font
	    		})
	    		addtext.ind = this.list.length;
	    		addtext.visible = true;
	    		addtext.layer_selected = false;
	    		addtext.object_type = 'text';
    			this.list.unshift(addtext);
	    		this.canvas.add(addtext);
	    		this.canvas.renderAll();
	    		this.mods = 0;
	    		this.updateModifications(true);
	    	},
	    	prepareSavedImage(e){
	    		var counter = 0;
	    		// let attachment = e.target.files[0];
                this.loading_dialog_text = 'Sto caricando un file, potrebbero volerci alcuni secondi';
	    		this.uploading_dialog = true;
	    		let items = e.target.files || e.dataTransfer.files;
	    		if (items.length > 0) {
					for (var i = 0; i < items.length; i++) {
			    		var form = new FormData();
			    		let attachment = items[i];
		                form.append('image', attachment);
		                axios.post(settings.root_url + '/api/posters/upload-prepared-image', form)
		                .then(response => {
		                	counter++;
		                	this.prepared_images = response.data.prepared_images;
		                	if(counter >= items.length)
		            			this.uploading_dialog = false;
		                }).catch(error => {
		                	this.uploading_dialog = false;
		                });
		            }
		        }
	    	},
	    	prepareNewImage(e){
	    		var self = this;
	    		let attachment = e.target.files[0];
	    		var form = new FormData();
                form.append('image', attachment);

                this.loading_dialog_text = 'Sto caricando un file, potrebbero volerci alcuni secondi';
	    		this.uploading_dialog = true;

                axios.post(settings.root_url + '/api/posters/upload', form)
                .then(response => {
                	var canvas = this.canvas;
					var list = this.list;
					var user = this.user;
					fabric.Image.fromURL(settings.root_url + "/users/" + user.name + "/" + response.data.file, function(img) {
						img.ind = list.length;
						var scale = Math.min(img.width, self.width / 2) / img.width;
						img.set({
							left: self.width / 4,
							top: self.height / 4,
		    				scaleX:  scale,
		    				scaleY:  scale,
		    			})
		    			img.visible = true;
		    			img.filename = response.data.file.substring(0, response.data.file.indexOf('---'));
		    			img.layer_selected = false;
		    			img.object_type = 'image';
						list.unshift(img);
						canvas.add(img);
						self.updateModifications(true);
					});
                	this.uploading_dialog = false;
                }).catch(error => {
                	console.log("error");
                	this.uploading_dialog = false;
                });
	    	},
	    	publish(){
	    		this.loading_dialog_text = 'Sto caricando un file, potrebbero volerci alcuni secondi';
	    		this.uploading_dialog = true;
	    	
                axios.post(settings.root_url + '/api/posters/publish', {
	                image: this.canvas.toDataURL(),
	                edit_flag: 'created',
	                id: -1,
	                name: this.posterForm.name,
	                campaign_id: this.posterForm.campaign.id,
	                start_date: this.date1,
	                end_date: this.date2,
	                start_time: this.posterForm.start_time,
	                end_time: this.posterForm.end_time,
	                duration: this.posterForm.duration,
	                height: this.bg_height,
	                width: this.bg_width,
	                group_type_id: this.posterForm.group_type.id,
	                aspect_ratio_id: this.posterForm.aspect_ratio_id,
	                group_ids: this.posterForm.groups.map(function(el){ return el.id }),
	                json_data: JSON.stringify(this.canvas.toJSON(['selectable', 'evented', 'editable', 'text', 'filename', 'layer_selected', 'object_type'])),
                })
                .then(response =>  {
                	this.uploading_dialog = false;
                	this.$router.push({
                		name: 'poster'
                	})
                }).catch(error => {
                	this.uploading_dialog = false;
                	console.log(error);
                });
	    	},
	    	save(){
	    		var canvas = this.canvas;
	    		var json_data = JSON.stringify(canvas.toJSON(['selectable', 'evented', 'editable', 'text', 'filename', 'layer_selected', 'object_type']));
	    		var form = new FormData();
                form.append('json_data', json_data);
                form.append('edit_flag', "created");
                form.append('id', -1);
                form.append('image', this.canvas.toDataURL());
                form.append('width', this.bg_width);
                form.append('height', this.bg_height);
                // form.append('is_favorite', this.is_favorite);

                this.loading_dialog_text = 'Sto caricando un file, potrebbero volerci alcuni secondi';
                this.uploading_dialog = true;
                axios.post(settings.root_url + '/api/posters/save', form)
                .then(response => {
                	this.uploading_dialog = false;
                	this.$router.push({
                		"name": "poster-edit"
                	})
                }).catch(error => {
                	this.uploading_dialog = false;
                });
            },
            onAlignChange(){
            	if(this.canvas){
	            	var activeobj = this.canvas.getActiveObject();
		    		if(activeobj){
		    			switch(this.text_align){
		    				case 0:
		    					activeobj.set('textAlign', 'left');
		    					break;
		    				case 1:
		    					activeobj.set('textAlign', 'center');
		    					break;
		    				case 2:
		    					activeobj.set('textAlign', 'right');
		    					break;
		    				case 3:
		    					activeobj.set('textAlign', 'justify');
		    					break;
		    			}
		    		}
		    		this.canvas.renderAll();
            	}
            },
            onStyleChange(){
            	if(this.canvas){
	            	var activeobj = this.canvas.getActiveObject();
		    		if(activeobj){
		    			activeobj.set('fontStyle', 'normal');
		    			activeobj.set('fontWeight', 'normal');
		    			activeobj.set('underline', false);
		    			for (var i of this.formatting) {
		    				if(i == 0)
		    					activeobj.set('fontStyle', 'italic');
		    				if(i == 1)
		    					activeobj.set('fontWeight', 'bold');
		    				if(i == 2)
		    					activeobj.set('underline', true);
		    			}
		    		}
		    		this.canvas.renderAll();
            	}
            },
            closePosterForm() {
        		this.posterDialog = false
      		},
      		parseDate (date) {
		    	return helper.parseDate(date);
		    },
		    onCampaignChange(){
		    	var campaign = this.posterForm.campaign;
		    	this.date1 = campaign.start_date;
		    	this.posterForm.start_date = helper.formatDate(campaign.start_date);
		    	this.date2 = campaign.end_date;
		    	this.posterForm.end_date = helper.formatDate(campaign.end_date);
		    	this.posterForm.start_time = campaign.start_time;
		    	this.posterForm.end_time = campaign.end_time;
		    },
		    onTypeChange(){
		    	axios.post(settings.root_url + '/api/helper/aspect-ratio-id', {
		    		width: this.bg_width,
		    		height: this.bg_height,
		    	})
	            .then(response => {
	                this.posterForm.aspect_ratio_id = response.data;
	                this.posterForm.availableGroups = this.getAvailableGroups(this.posterForm.aspect_ratio_id, this.posterForm.group_type.id);
	            });
		    },
		    getAvailableGroups(aspect_ratio_id, group_type_id){
	    		return this.groups.filter(function(group){
	    			return group.aspect_ratio_id == aspect_ratio_id && group.group_type_id == group_type_id
	    		})
	    	},
	    	getPreparedImageName(item){
				return settings.root_url + "/users/" + item.user_name + "/saved images/" + item.thumbnail;
			},
			selectPreparedImage(item){
				var self = this;
				var canvas = this.canvas;
				var list = this.list;
				fabric.Image.fromURL(settings.root_url + "/users/" + item.user_name + "/saved images/" + item.file, function(img) {
					img.ind = list.length;
					var scale = Math.min(img.width, self.width / 2) / img.width;
					img.set({
						left: self.width / 4,
						top: self.height / 4,
	    				scaleX:  scale,
	    				scaleY:  scale,
	    			})
	    			img.visible = true;
	    			img.layer_selected = false;
		    		img.object_type = 'image';
		    		img.filename = item.file;
					list.unshift(img);
					canvas.add(img);
					self.updateModifications(true);
				});
				this.image_dialog = false;
			},
			deleteSavedImage(image){
	        	var r = confirm("Sei sicuro di voler cancellare questa foto prodotto?");
	        	if(r == true){
	        		axios.post(settings.root_url + '/api/poster/delete-savedimage/' + image.id)
                    .then(response =>  {
						this.prepared_images = response.data.prepared_images.map(function(el){
			    			var o = Object.assign({}, el);
			    			o.badge_show = false;
			    			return o;
			    		})
                    }).catch(error => {

                    });
	        	}
			},
			removeObject(obj_){
				var selected_obj = null;
				this.canvas.forEachObject(function(obj){
					if(obj.ind == obj_.ind)
						selected_obj = obj;
				})
				if(selected_obj){
	    			this.canvas.remove(selected_obj);
	    			for( var i = 0; i < this.list.length; i++){ 
					   	if ( this.list[i].ind == selected_obj.ind) {
					     	this.list.splice(i, 1);
					     	break;
					   	}
					}
				}
			},
			onLayerChange(){
				for (var i = this.list.length - 1; i >= 0; i--) {
					this.list[i].moveTo(1000 - i);
				}
				this.canvas.renderAll();
			},
			onRenameImage(elem){
				if(elem.filename){
					this.rename_dialog = true;
					this.elem_name = elem.filename;
				}
			},
			cancelRenameImage(){
				this.rename_dialog = false;
			},
			renameImage(ind){
				if(this.elem_name){
					let elem = this.list.find(function(elem){
						return elem.ind === ind
					})
					elem.filename = this.elem_name
					this.rename_dialog = false;
				}
			},
			onSelectElem(elem){
				for (var i = this.list.length - 1; i >= 0; i--) {
					this.list[i].layer_selected = false;
				}
				elem.layer_selected = true;
				this.canvas.setActiveObject(elem);
				this.canvas.renderAll();
			},
			unselectAll(){
				for (var i = this.list.length - 1; i >= 0; i--) {
					this.list[i].layer_selected = false;
				}
				this.canvas.renderAll();
			},
			toggleVisibility(obj_){
				if(obj_.visible){
					obj_.visible = false;
				} else {
					obj_.visible = true;
				}
				this.canvas.discardActiveObject();
				this.canvas.renderAll();
			},
			toggleSelectable(obj_){
				if(obj_.selectable){
					obj_.selectable = false
					obj_.editable = false
				} else {
					obj_.selectable = true
					obj_.editable = true
				}
				this.canvas.discardActiveObject();
				this.canvas.renderAll();
			},
			mediaIcon(object){
		    	if(object.object_type == 'text'){
		    		return 'textsms';
		    	} else if(object.object_type == 'format'){
		    		return 'format_paint';
		    	} else if(object.object_type == 'image'){
		    		return 'image';
		    	}
		    },
		    updateModifications(savehistory) {
			    if (savehistory === true) {
			        let myjson = JSON.stringify(this.canvas.toJSON(['selectable', 'evented', 'editable', 'text', 'filename', 'layer_selected', 'object_type']));
			        this.state.push(myjson);
			        this.mods = this.state.length;
			    }
			},
			undo(){
				let self = this;
				if (self.mods > 1) {
			        self.canvas.clear().renderAll();
			        self.mods--;
			        self.canvas.loadFromJSON(self.state[self.mods - 1], function(){
						self.list.splice(0, self.list.length)
			        	self.canvas.forEachObject(function(obj){
						  	obj.ind = self.list.length;
		    				self.list.unshift(obj);
						});
			        });
			        self.canvas.renderAll();
			    }
			},
			redo(){
				let self = this;
				if (this.mods < this.state.length) {
			        this.canvas.clear().renderAll();
			        this.mods++;
			        this.canvas.loadFromJSON(this.state[this.mods - 1], function(){
			        	self.list.splice(0, self.list.length)
			        	self.canvas.forEachObject(function(obj){
						  	obj.ind = self.list.length;
		    				self.list.unshift(obj);
						});
			        });
			        this.canvas.renderAll();
			    }
			}
        }
  	}
</script>
