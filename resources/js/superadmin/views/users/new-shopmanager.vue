<style scoped>

</style>

<template>
	<v-container fluid>
		<v-form
	    ref="form"
	    v-model="valid"
	    lazy-validation
	  	>
			<v-card>
				<v-card-title>
				<span class="headline">{{ $t('shops.fields.create') }}</span>
				</v-card-title>
				<v-card-text>
					<v-container grid-list-md>
						<v-layout wrap>
							<v-flex xs12 sm12 md12>
								<v-text-field v-model="userForm.name" label="name" :rules="nameRules"></v-text-field>
							</v-flex>
							<v-flex xs12 sm12 md12>
								<v-text-field v-model="userForm.fullname" label="fullname" :rules="fullnameRules"></v-text-field>
							</v-flex>
							<v-flex xs12 sm12 md12>
								<v-text-field v-model="userForm.email" label="email" :rules="emailRules"></v-text-field>
							</v-flex>
							<v-flex xs12 sm12 md12>
								<v-text-field v-model="userForm.password" label="password" :rules="passwordRules"></v-text-field>
							</v-flex>
<!-- 							<v-flex xs12 sm12 md12>
								<v-select
								v-model="shop_id"
								:items="shops"
								label="shops"
								item-text="name"
								item-value="id"
					            return-object
								></v-select>
							</v-flex> -->
						</v-layout>
					</v-container>
				</v-card-text>
				<v-card-actions>
					<v-container>
						<v-layout justify-end>
							<v-snackbar
						    v-model="snackbar"
						    :color="color"
						    >
						      	{{ message }}
						    </v-snackbar>
							<v-btn to="/admin/shops">{{ $t('buttons.cancel')}}</v-btn>
							<v-btn color="info" @click="create">{{ $t('buttons.save')}}</v-btn>
						</v-layout>
					</v-container>
				</v-card-actions>
			</v-card>
		</v-form>
	</v-container>
</template>
<script>
	import Vue from 'vue';
	import { settings } from '../../settings.js'
	import helper from '../../../helper.js'

  	export default {
  		components: {
		},
  		data () {
			return {
				valid: true,
				uploading_dialog: false,
				message: '',
				snackbar: false,
				color: 'success',

				// shops: [],

				shop_id: '',
				userForm: {
					name: '',
					fullname: '',
					password: '',
					email: '',
				},
				
				fullnameRules: [
			        v => !!v || 'Full name is required',
			    ],
				nameRules: [
			        v => !!v || 'Name is required',
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
	    created(){
	    	this.init();
	    },
	    methods: {
	    	init(){
	    		// axios.get(settings.root_url + '/api/super-admin-141592/init-new-shopmanager')
		     //        .then(response => {
		     //            // this.shops = response.data.shops;
		     //        }).catch(response => {
		            	
		     //        });
	    	},
			create(){
	    		if (this.$refs.form.validate()) {
	    			let userForm = new FormData();
					userForm.append('name', this.userForm.name);
					userForm.append('fullname', this.userForm.fullname);
					userForm.append('email', this.userForm.email);
					userForm.append('password', this.userForm.password);
	    			axios.post(settings.root_url + '/api/super-admin-141592/create-new-shopmanager', userForm)
	                .then(response =>  {
			    		this.message = response.data.message;
			    		this.color = 'success';
			    		this.snackbar = true;

			    		this.$router.push({
							name: 'users'
						})
	                }).catch(error => {
	                	this.message = error.message;
	                	this.color = 'error';
			    		this.snackbar = true;
	                });
	    		} else {
	    			console.log("validation error");
	    		}
	    	}
	    }
  	}
</script>