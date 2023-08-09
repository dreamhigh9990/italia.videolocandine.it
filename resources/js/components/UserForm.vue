<template>
	<v-card>
		<v-container grid-list-md>
			<v-card-title>
				<span class="headline" v-if="local_user.id == -1">{{ $t('users.fields.create') }}</span>
				<span class="headline" v-if="local_user.id != -1">{{ $t('users.fields.edit') }}</span>
			</v-card-title>
			<v-card-text>
				<v-form
			    ref="form"
			    v-model="valid"
			    :lazy-validation="true"
			  	>
					<v-layout wrap>
						<v-flex xs12 sm12 md6>
							<v-text-field v-model="local_user.name" :label="$t('users.fields.name')" :rules="nameRules"></v-text-field>
						</v-flex>
						<v-flex xs12 sm12 md6>
							<v-text-field v-model="local_user.fullname" :label="$t('users.fields.fullname')" :rules="fullnameRules"></v-text-field>
						</v-flex>
						<v-flex xs12 sm12 md6>
							<v-text-field v-model="local_user.email" label="email" :rules="emailRules"></v-text-field>
						</v-flex>
						<v-flex xs12 sm12 md6>
							<v-text-field v-if="local_user.id==-1" v-model="local_user.password" label="password" :rules="passwordRules"></v-text-field>
							<v-text-field v-if="local_user.id!=-1" v-model="local_user.password" label="password"></v-text-field>
						</v-flex>
						<v-flex xs12 sm12 md12>
					        <v-select
				            v-model="local_shop_ids"
				            :items="shops"
				            item-text="name"
							item-value="id"
				            :label="$t('shops.title')"
				            :rules="shopRules"
				            chips
				            multiple
					        >
					        </v-select>
						</v-flex>
						<v-flex xs12 sm12 md12>
							<v-radio-group v-model="local_user.by_monitor">
						      	<v-radio :label="$t('labels.show_monitor_list')" value="1"></v-radio>
						      	<v-radio :label="$t('labels.manage_monitor_by_group')" value="0"></v-radio>
						    </v-radio-group>
						</v-flex>
					</v-layout>
					<v-layout wrap justify-end>
						<v-btn @click="onCancel" class="mr-2">{{ $t('buttons.cancel')}}</v-btn>
						<v-btn color="info" @click="onSave">{{ $t('buttons.save')}}</v-btn>
					</v-layout>
				</v-form>
			</v-card-text>
		</v-container>
	</v-card>
</template>
<script>
	import { settings } from '../settings.js'
	import helper from '../helper.js'

  	export default {
  		components: {
		},
  		
  		props: ['user', 'shop_ids'],

  		data () {
			return {
				valid: true,
				local_shop_ids: [],
				shops: [],
				local_user: Object.assign({}, this.user),

				fullnameRules: [
			        v => !!v || this.$t('labels.fullname_required'),
			    ],
				nameRules: [
			        v => !!v || this.$t('labels.name_required'),
			    ],
				passwordRules: [
			        v => !!v || this.$t('labels.password_required'),
			    ],
			    shopRules: [
			        v => !!v || 'Shop should be assigned',
			    ],
			    emailRules: [
			        v => !!v || this.$t('labels.email_required'),
			        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			    ],
			}
		},
		watch: {
			user(obj){
				this.local_user = Object.assign({}, this.user);
				if(obj.id == -1){
	    			this.$refs.form.resetValidation();
				}
			},
			shop_ids(val){
				this.local_shop_ids = val;
			}
		},
		created(){
			this.init();
		},
	    methods: {
	    	init(){
	    		axios.get(settings.root_url + '/api/users/init-user-form')
                .then(response =>  {
                	this.shops = response.data.shops;
                }).catch(error => {
                });
	    	},
			onSave(){
	    		if (this.$refs.form.validate()) {
	    			let userForm = new FormData();
					userForm.append('name', this.local_user.name);
					userForm.append('fullname', this.local_user.fullname);
					userForm.append('email', this.local_user.email);
					userForm.append('password', this.local_user.password);
					userForm.append('shop_ids', this.local_shop_ids);
					userForm.append('role', 'user');
					userForm.append('by_monitor', this.local_user.by_monitor);
	    			if(this.local_user.id == -1){
		    			axios.post(settings.root_url + '/api/users/add-new', userForm)
		                .then(response =>  {
				    		this.$emit("updated");
		                }).catch(error => {
		                });
	    			} else {
	    				axios.post(settings.root_url + '/api/users/update/' + this.local_user.id, userForm)
		                .then(response =>  {
							this.$emit("updated");
		                }).catch(error => {

		                });
	    			}
	    		} else {
	    			console.log("validation error");
	    		}
	    	},
	    	onCancel(){
	    		this.$emit("cancel");
	    	},
	    }
  	}
</script>