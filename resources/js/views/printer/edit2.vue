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
	.canvas-container{
		margin-left: auto;
		margin-right: auto;
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
	<v-container fluid grid-list-xl style="background-color: #757575">
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
			</template>

			<v-flex xs12 sm8 md7>
				<v-layout justify-center>
					<canvas id="canvas"></canvas>
				</v-layout>
			</v-flex>
			<v-flex xs12 sm4 md5>
				<v-card style="width: 324px">
					<v-card-text>
						<v-layout row wrap>
							<v-flex xs12 md12>
								<label class="v-btn primary v-btn--block" style="padding: 6px; margin-bottom: -16px; cursor: pointer">
						            <input
						            type="file"
						            @change="prepareNewImage"
						            name="new_img"
						            id="new_img"
						            style="display: none;"
						            >
						            {{ $t('poster.load_picture') }}
						        </label>
								<v-dialog v-model="image_dialog" max-width="900px">
						        	<template v-slot:activator="{ on }">
										<v-btn block color="primary" v-on="on">{{ $t('poster.add_pictures') }}</v-btn>
									</template>
									<v-card>
										<v-container grid-list-sm fluid>
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
														class="img-container-card">
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
						<v-layout wrap>
							<v-flex xs12 sm12 md12>
								<a href="" class="v-btn v-btn--contained v-size--default primary" download="print.jpg" ref="download_btn" @click="download">
									<span class="v-btn__content">{{ $t('buttons.download')}}</span>
								</a>
								<v-btn color="primary" @click="save">{{ $t('buttons.save')}}</v-btn>
								<v-btn color="primary" width="80" @click="printCanvas">{{ $t('buttons.print')}}</v-btn>
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
				          	>
				          		<v-list-item-icon>
				          			<v-btn icon @click="toggleVisibility(element)">
				          				<v-icon v-if="element.visible">visibility</v-icon>
				          				<v-icon v-else>visibility_off</v-icon>
				          			</v-btn>
				          			<v-btn icon @click="removeObject(element)">
				          				<v-icon>delete</v-icon>
				          			</v-btn>
<!-- 				          			<v-btn icon @click="toggleSelectable(element)">
				          				<v-icon>lock</v-icon>
				          				<v-icon v-if="element.selectable == true">lock_open</v-icon>
				          			</v-btn> -->
						        </v-list-item-icon>
				          		<v-list-item-content>
						            <v-list-item-title v-text="element.text || 'Immagine'"></v-list-item-title>
						        </v-list-item-content>
				          	</v-list-item>
				        </transition-group>
			    	</draggable>
				</v-card>
			</v-flex>
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
  			draggable,
        },
  		data () {
			return {
				valid: true,
				width: 500,
				height: 500,
				canvas: null,
				color: '',
				json_data: '',
				published: false,

				font: 'Permanent Marker',
				text_align: undefined,
				formatting: [],

				image_dialog: false,
				prepared_images: [],

				uploading_dialog: false,
				loading_dialog_text: '',

				menu_date_start: false,
				menu_time_start: false,
				menu_date_end: false,
				menu_time_end: false,
				date1: '',
				date2: '',
				printerDialog: false,
				printerForm: {
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
				fonts: [],
				user: null,

				layers_visible: true,
				drag: false,
				list: [],
				
				campaigns: [],
				group_types: [],
				groups: [],

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
	    	this.loading_dialog_text = "Sto scaricando la Locandina, potrebbero volerci alcuni secondi";
	    	this.uploading_dialog = true;
	    	

	    	fabric.Object.NUM_FRACTION_DIGITS = 10;

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

	    	axios.get(settings.root_url + '/api/printer/init-edit/' + this.$route.params.id)
            .then(response => {
            	var min_width = Math.min(response.data.printer.width, this.width);
		    	
		    	this.canvas = new fabric.Canvas('canvas', {
		    		width: min_width,
			    	height: response.data.printer.height * parseFloat(min_width / response.data.printer.width),
		    		backgroundColor: '#fff',
		    		preserveObjectStacking: true
		    	});

            	this.user = response.data.user;
            	if(response.data.printer.printer_id == -1)
            		this.published = false;
            	else
            		this.published = true;

            	this.fonts = response.data.fonts;
            	var fonts = this.fonts.map(function(el){ return el.name });
            	WebFont.load({
				    google: {
				      	families: fonts
				    }
				});
            	var list = this.list;
                this.json_data = response.data.printer.json_data;
                var canvas = this.canvas;
                canvas.loadFromJSON(this.json_data, function(){
                	canvas.renderAll();
                	canvas.forEachObject(function(obj){
						obj.ind = list.length;
		    			list.unshift(obj);
					})
                })
                this.bg_width = response.data.printer.width;
                this.bg_height = response.data.printer.height;
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
		    }
	    },
	    watch: {
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
	    	},
	    	prepareSavedImage(e){
	    		var counter = 0;
                this.loading_dialog_text = 'Sto caricando un file, potrebbero volerci alcuni secondi';
	    		this.uploading_dialog = true;
	    		let items = e.target.files || e.dataTransfer.files;
				if (items.length > 0) {
					for (var i = 0; i < items.length; i++) {
			    		var form = new FormData();
			    		let attachment = items[i];
			            form.append('image', attachment);
			            axios.post(settings.root_url + '/api/printer/upload-printer-images', form)
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

                axios.post(settings.root_url + '/api/printer/upload-new-image', form)
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
		    			img.layer_selected = false;
		    			img.object_type = 'image';
						list.unshift(img);
						canvas.add(img);
					});
                	this.uploading_dialog = false;
                }).catch(error => {
                	console.log("error");
                	this.uploading_dialog = false;
                });
	    	},
	    	download(){
	    		var dataURL = this.canvas.toDataURL("image/jpg");
	    		this.$refs.download_btn.href = dataURL;
	    	},
	    	save(){
	    		var canvas = this.canvas;
	    		var json_data = JSON.stringify(canvas.toJSON(['selectable', 'evented', 'editable', 'text', 'filename', 'layer_selected', 'object_type']));
	    		var form = new FormData();
                form.append('json_data', json_data);
                form.append('edit_flag', "edited");
                form.append('id', this.$route.params.id);
                form.append('image', this.canvas.toDataURL());
                form.append('width', this.bg_width);
                form.append('height', this.bg_height);

                this.loading_dialog_text = "Sto caricando un file, potrebbero volerci alcuni secondi";
                this.uploading_dialog = true;
                axios.post(settings.root_url + '/api/printer/save', form)
                .then(response => {
                	this.uploading_dialog = false;
                	this.$router.push({
                		"name": "printer-edit"
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
            closeprinterForm() {
        		this.printerDialog = false
      		},
      		parseDate (date) {
		    	return helper.parseDate(date);
		    },
		    onCampaignChange(){
		    	var campaign = this.printerForm.campaign;
		    	this.date1 = campaign.start_date;
		    	this.printerForm.start_date = helper.formatDate(campaign.start_date);
		    	this.date2 = campaign.end_date;
		    	this.printerForm.end_date = helper.formatDate(campaign.end_date);
		    	this.printerForm.start_time = campaign.start_time;
		    	this.printerForm.end_time = campaign.end_time;
		    },
		    onTypeChange(){
		    	axios.post(settings.root_url + '/api/helper/aspect-ratio-id', {
		    		width: this.bg_width,
		    		height: this.bg_height,
		    	})
	            .then(response => {
	                this.printerForm.aspect_ratio_id = response.data;
	                this.printerForm.availableGroups = this.getAvailableGroups(this.printerForm.aspect_ratio_id, this.printerForm.group_type.id);
	                console.log(this.printerForm.availableGroups);
		    		return;
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
				});
				this.image_dialog = false;
			},
			deleteSavedImage(image){
	        	var r = confirm("Sei sicuro di voler cancellare questa foto prodotto?");
	        	if(r == true){
	        		axios.post(settings.root_url + '/api/printer/delete-printer-image/' + image.id)
                    .then(response =>  {
						this.prepared_images = response.data.prepared_images;
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
			toggleVisibility(obj_){
				if(obj_.visible){
					obj_.visible = false;
				} else {
					obj_.visible = true;
				}
				this.canvas.discardActiveObject();
				this.canvas.renderAll();
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
			printCanvas() {
			    var dataUrl = this.canvas.toDataURL();
			    var windowContent = '<!DOCTYPE html>';
			    windowContent += '<html>'
			    windowContent += '<head><title>Print canvas</title></head>';
			    windowContent += '<body>'
			    windowContent += '<div style="width:100%; height:100%">'
			    windowContent += '<img src="' + dataUrl + '" onload=window.print();window.close(); width=100%; height=100%>';
			    windowContent += '</div>';
			    windowContent += '</body>';
			    windowContent += '</html>';
			    var printWin = window.open('', '', 'width=500,height=500');
			    printWin.document.open();
			    printWin.document.write(windowContent);
			}
        }
  	}
</script>
