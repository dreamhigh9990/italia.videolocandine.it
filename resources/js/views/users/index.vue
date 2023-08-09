<template>
	<v-container fluid>
		<v-toolbar color="grey lighten-2">
			<v-toolbar-title>{{ $t('users.title') }}</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn color="primary" dark class="mb-2" @click="onAdd">{{ $t('buttons.add_new') }}</v-btn>
		</v-toolbar>
		<v-dialog v-model="dialog" max-width="800px" persistent>
			<user-form :user="user" :shop_ids="shop_ids" @updated="onUpdate" @cancel="close"></user-form>
		</v-dialog>
		<v-data-table
		:headers="headers"
		:items="users"
		class="elevation-1"
		hide-default-footer
		disable-pagination
		:no-data-text="$t('labels.no_data')"
		:mobile-breakpoint="300"
		>
			<template v-slot:item.actions="{ item }">
		        <v-icon
				small
				class="mr-2"
				@click="editItem(item)"
				>
					edit
				</v-icon>
				<v-icon
				small
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
	import UserForm from '../../components/UserForm'

  	export default {
  		components: {
  			UserForm,
        },
  		data () {
			return {
				dialog: false,
				users: [],

				user: {},
				shop_ids: [],
				detaultUser: {
					id: -1,
					name: '',
					fullname: '',
					email: '',
					password: ''
				},
			}
		},
		computed: {
			headers(){
				return [
					{ text: this.$t('users.fields.fullname'), value: 'fullname', align: 'center' },
					{ text: this.$t('users.fields.username'), value: 'name', align: 'center' },
					{ text: this.$t('users.fields.email'), value: 'email', align: 'center' },
					{ text: this.$t('labels.actions'), value: 'actions', sortable: false, align: 'center' }
				]
			}
		},
	    created(){
            this.getusers();
	    },
	    methods: {
	    	onAdd(){
	    		this.user = Object.assign({}, this.detaultUser);
	    		if(this.user.shop_ids == null){
	        		this.shop_ids = [];
	        	} else {
	        		this.shop_ids = this.user.shop_ids.split(',').map(Number);
	        	}
	    		this.dialog = true;
	    	},
	      	editItem (item) {
	        	this.user = Object.assign({}, item);
	        	if(this.user.shop_ids == null){
	        		this.shop_ids = [];
	        	} else {
	        		this.shop_ids = this.user.shop_ids.split(',').map(Number);
	        	}
	        	this.dialog = true;
	      	},

	      	deleteItem (item) {
	        	var r = confirm(this.$t('users.fields.delete_confirm'));
	        	if(r == true){
	        		axios.post(settings.root_url + '/api/users/delete/' + item.id)
                    .then(response =>  {
						this.getusers();
                    }).catch(error => {

                    });
	        	}
	      	},
	      	close () {
        		this.dialog = false
      		},
      		onUpdate(){
      			this.getusers();
      			this.close();
      		},
			getusers(){
	    		axios.get(settings.root_url + '/api/users')
		            .then(response => {
		                this.users = response.data.users;
		            }).catch(response => {
		            	console.log("error");
		            });
	    	},
	    }
  	}
</script>