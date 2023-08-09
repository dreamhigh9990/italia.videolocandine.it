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
	<div>
		<v-layout wrap justify-center my-3>
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
				v-for="(file, index) in printer_templates"
				:key="index"
			>
				<v-hover v-slot:default="{ hover }">
					<v-card
					max-width="150"
					max-height="350"
					style="padding: 10px; margin: 10px"
					:elevation="hover ? 12 : 2"
					>
						<v-img
							:src="getFormatFileName(file)"
							contain
							class="img-btn"
						>
							<v-btn @click.stop="deletePrinterTemplate(file)">Delete</v-btn>
						</v-img>
					</v-card>
				</v-hover>
			</v-flex>
		</v-layout>
		<!-- <v-layout wrap justify-end mt-3> -->
			<!-- <v-btn color="info" @click="updateFormats()">{{ $t('buttons.save') }}</v-btn> -->
<!-- 			<v-snackbar
		    v-model="snackbar"
		    color="success"
		    >
		      	{{ message }}
		    </v-snackbar>
		</v-layout> -->
	</div>
</template>

<script>
	import { settings } from '../settings.js'
	import helper from '../../helper.js'

  	export default {
  		props: ['user_id'],
  		components: {
		},
  		data () {
			return {
				uploading_dialog: false,
				loading_dialog_text: '',

				message: '',
				snackbar: false,

				printer_templates: [],
				user: null,
			}
		},
		watch: {
	    },
	    created(){
	    	this.init();
	    },
	    methods: {
	    	init(){
	    		axios.get(settings.root_url + '/api/super-admin-141592/printer-template/init/' + this.user_id)
		            .then(response => {
		                this.printer_templates = response.data.printer_templates;
		                this.user = response.data.user;
		            }).catch(response => {
		            	console.log("error");
		            });
	    	},
			prepareMedia(e){
				var counter = 0;
				this.uploading_dialog = true;
				this.loading_dialog_text = this.$t('super_admin.uploading_format');
				let items = e.target.files || e.dataTransfer.files;
	    		if (items.length > 0) {
					for (var i = 0; i < items.length; i++) {
						let printForm = new FormData();
						let attachment = items[i];
						printForm.append('printer', attachment);
						printForm.append('user_id', this.user_id);
	                    axios.post(settings.root_url + '/api/super-admin-141592/printer-template/upload', printForm)
			            .then(response => {
			            	counter++;
		                	var file = {
		                		'file': response.data.file,
		                		'id': response.data.id,
		                	}
		                	this.printer_templates.push(file);
		                	if(counter >= items.length)
		            			this.uploading_dialog = false;
		                }).catch(error => {
		                	this.uploading_dialog = false;
		                });
		            }
                }
			},
			getFormatFileName(item){
	    		return settings.root_url + "/users/" + this.user.name + "/printer-templates/thumbnail_" + item.file;
	    	},

	    	deletePrinterTemplate(item){
	        	var r = confirm("Sei sicuro di voler cancellare questa foto prodotto?");
	        	if(r == true){
	        		axios.delete(settings.root_url + '/api/super-admin-141592/delete-printer-template/' + item.id)
                    .then(response =>  {
						this.printer_templates = response.data.printer_templates;
                    }).catch(error => {

                    });
	        	}
	    	}
	    }
  	}
</script>