<style scoped>
	.img-btn{
		cursor: pointer;
		display: flex;
	    align-items: flex-end;
	    justify-content: center;
	    text-align: center;
	    padding-bottom: 8px;
	}
</style>

<template>
	<v-container fluid>
		<h4 style="margin-bottom: 20px">{{ $t('super_admin.user_settings') }}</h4>
		<v-expansion-panels focusable>
			<v-expansion-panel>
				<v-expansion-panel-header>User Infomation</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-container fluid>
						<v-form ref="form" v-model="valid" lazy-validation>
							<v-layout wrap>
								<v-flex md12>
									<v-text-field v-model="userForm.email" label="email" :rules="emailRules"></v-text-field>
								</v-flex>
								<v-flex md12>
									<v-text-field v-model="userForm.password" label="password" :rules="passwordRules"></v-text-field>
								</v-flex>
							</v-layout>
							<v-layout justify-end>
								<v-btn color="info" dark @click="saveUserInfo">{{ $t('buttons.save') }}</v-btn>
							</v-layout>
						</v-form>
					</v-container>
					<v-layout wrap justify-end>
						<v-snackbar
					    v-model="snackbar"
					    color="success"
					    >
					      	{{ message }}
					    </v-snackbar>
					</v-layout>
				</v-expansion-panel-content>
			</v-expansion-panel>

			<v-expansion-panel>
				<v-expansion-panel-header>{{ $t('super_admin.user_fonts') }}</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-layout wrap my-5>
						<div>
							<font-picker api-key="AIzaSyB1uUCpy1LN2w1FzGUr0lcyvy8mYlP2NAs" :active-font="font_family" @change="onFontChange"></font-picker>
						</div>
						<v-card
						    class="mx-auto"
						    width="256"
						    tile
						>
							<v-list nav>
						        <v-list-item v-for="(item, i) in fontForm.fonts" :key="i">
						          	<v-list-item-content>
						            	<v-list-item-title class="title" :style="{fontFamily: item + '!important'}">{{ item }}</v-list-item-title>
						          	</v-list-item-content>
						          	<v-list-item-action>
						            	<v-icon @click="deleteFont(item)">close</v-icon>
						          	</v-list-item-action>
						        </v-list-item>
						    </v-list>
						</v-card>
					</v-layout>
					<v-layout justify-end>
						<v-btn color="info" @click="updateFonts()">{{ $t('buttons.save') }}</v-btn>
						<v-snackbar
					    v-model="snackbar"
					    color="success"
					    >
					      	{{ message }}
					    </v-snackbar>
					</v-layout>
				</v-expansion-panel-content>
			</v-expansion-panel>

			<v-expansion-panel>
				<v-expansion-panel-header>{{ $t('super_admin.formats') }}</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-layout wrap justify-center my-5>
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
						<v-flex xs12 sm12 md12>
							<label class="v-btn success" style="padding: 6px 14px; cursor: pointer">
					            <input
					            type="file"
					            @change="prepareMedia"
					            name="media"
					            id="media"
					            style="display: none"
					            multiple>
					            {{ $t('super_admin.add_format') }}
					            <v-icon right dark>cloud_upload</v-icon>
					        </label>
						</v-flex>
					</v-layout>
					<v-layout wrap>
						<v-flex
							v-for="(file, index) in formats"
							:key="index"
						>
							<v-hover v-slot:default="{ hover }">
								<v-card
								max-width="150"
								max-height="350"
								style="padding: 10px"
								:elevation="hover ? 12 : 2"
								>
									<v-img
										:src="getFormatFileName(file)"
										contain
										class="img-btn"
									>
										<v-btn @click.stop="deleteFormatTemplate(file)">Delete</v-btn>
									</v-img>
								</v-card>
							</v-hover>
						</v-flex>
					</v-layout>
<!-- 					<v-layout wrap justify-end my-5>
						<v-btn color="info" @click="updateFormats()">{{ $t('buttons.save') }}</v-btn>
						<v-snackbar
					    v-model="snackbar"
					    color="success"
					    >
					      	{{ message }}
					    </v-snackbar>
					</v-layout> -->
				</v-expansion-panel-content>
			</v-expansion-panel>
			
			<v-expansion-panel>
				<v-expansion-panel-header>{{ $t('super_admin.printers') }}</v-expansion-panel-header>
				<v-expansion-panel-content>
					<Printer :user_id="$route.params.id"></Printer>
				</v-expansion-panel-content>
			</v-expansion-panel>

		</v-expansion-panels>
	</v-container>
</template>
<script>
	import Vue from 'vue';
	import { settings } from '../../settings.js'
	import helper from '../../../helper.js'
	import FontPicker from 'font-picker-vue';
	import Printer from '../../components/SuperAdminPrinter';

	Vue.use(FontPicker);
  	export default {
  		components: {
  			Printer, FontPicker
		},
  		data () {
			return {
				valid: true,
				uploading_dialog: false,
				loading_dialog_text: '',
				message: '',
				snackbar: false,

				user: null,
				fontForm: {
					fonts: [],
				},
				userForm: {
					password: '',
					email: '',
				},
				font_family: '',
				formats: [],

				is_format_uploading: false,

				fontRules: [
			        // v => !!v || this.$t('labels.name_required'),
			    ],
			    passwordRules: [
			        v => !!v || 'Password is required',
			    ],
			    emailRules: [
			        v => !!v || 'E-mail is required',
			        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			    ],
			}
		},
		watch: {
	    },
	    created(){
	    	this.init();
	    },
	    methods: {
	    	init(){
	    		axios.get(settings.root_url + '/api/super-admin-141592/init-user-edit/' + this.$route.params.id)
		            .then(response => {
		                this.formats = response.data.formats;
		                this.fontForm.fonts = response.data.user_fonts.map(function(el){ return el.name });
		                this.user = response.data.user;
		                this.userForm.email = response.data.user.email;
		            }).catch(response => {
		            	console.log("error");
		            });
	    	},
	    	onFontChange(font){
	    		this.font_family =font.family;
	    		var index = this.fontForm.fonts.indexOf(font.family);
	    		if(index > -1)
	    			return;
	    		this.fontForm.fonts.push(font.family);
	    	},
	    	deleteFont(font){
	    		var index = this.fontForm.fonts.indexOf(font);
	    		if(index > -1)
	    			this.fontForm.fonts.splice(index, 1);
	    	},
			updateFonts(){
				let fontForm = new FormData();
                axios.post(settings.root_url + '/api/super-admin-141592/update-user-fonts/' + this.$route.params.id,{
                	fonts: this.fontForm.fonts,
                })
                .then(response =>  {
                	this.message = response.data.message;
	            	this.snackbar = true;
                }).catch(error => {
                });
			},
			prepareMedia(e){
				var counter = 0;
				this.uploading_dialog = true;
				this.loading_dialog_text = this.$t('super_admin.uploading_format');
				let items = e.target.files || e.dataTransfer.files;
	    		if (items.length > 0) {
					for (var i = 0; i < items.length; i++) {
						let formatForm = new FormData();
						let attachment = items[i];
						formatForm.append('format', attachment);
						formatForm.append('user_id', this.$route.params.id);
	                    axios.post(settings.root_url + '/api/super-admin-141592/upload-format', formatForm)
			            .then(response => {
			            	counter++;
		                	var file = {
		                		'file': response.data.file,
		                		'id': response.data.id,
		                	}
		                	this.formats.push(file);
		                	if(counter >= items.length)
		            			this.uploading_dialog = false;
		                }).catch(error => {
		                	this.uploading_dialog = false;
		                });
		            }
                }
			},
			// updateFormats(){
			// 	let formatForm = new FormData();
			// 	formatForm.append('user_id', this.$route.params.id);

			// 	axios.post(settings.root_url + '/api/super-admin-141592/update-format', formatForm)
	  //           .then(response => {
	  //           	if(response.data.result === "success"){
	  //           		this.formats =response.data.formats;
		 //            	this.message = this.$t('super_admin.updated_success');
		 //            	this.snackbar = true;
	  //           	} else {
	  //           		// this.message = this.$t('super_admin.updated_success');
		 //            	// this.snackbar = true;
	  //           	}
   //              }).catch(error => {
   //              });
			// },


			getFormatFileName(item){
	    		return settings.root_url + "/users/" + this.user.name + "/formats/" + item.file;
	    	},

	    	saveUserInfo(){
	    		if (this.$refs.form.validate()) {
	    			let formatForm = new FormData();
					formatForm.append('email', this.userForm.email);
					formatForm.append('password', this.userForm.password);
	    			axios.post(settings.root_url + '/api/super-admin-141592/update-user-info/' + this.$route.params.id, formatForm)
	                .then(response =>  {
			    		this.message = response.data.message;
			    		this.snackbar = true;
	                }).catch(error => {
	                });
	    		} else {
	    			console.log("validation error");
	    		}
	    	},

	    	deleteFormatTemplate(item){
	        	var r = confirm("Sei sicuro di voler cancellare questa foto prodotto?");
	        	if(r == true){
	        		axios.delete(settings.root_url + '/api/super-admin-141592/delete-format-template/' + item.id)
                    .then(response =>  {
						this.formats = response.data.formats;
                    }).catch(error => {

                    });
	        	}
	    	}
	    }
  	}
</script>