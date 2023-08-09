<style scoped>

</style>

<template>
	<v-container fluid>
		<v-toolbar color="grey lighten-2">
			<v-toolbar-title>{{ $t('users.title') }}</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn color="primary" dark class="mb-2" @click="onNewShopManager">New Shop Manager</v-btn>
		</v-toolbar>
		<v-data-table
		:headers="headers"
		:items="users"
		class="elevation-1"
		hide-default-footer
		>
			<template v-slot:item.actions="{ item }">
		        <v-icon
				small
				class="mr-2"
				@click="editUser(item)"
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
  	export default {
  		data () {
			return {
				users: [],
			}
		},
		computed: {
			headers(){
				return [
					{ text: this.$t('users.fields.fullname'), value: 'fullname', align: 'center' },
					{ text: this.$t('users.fields.username'), value: 'name', align: 'center' },
					{ text: this.$t('users.fields.email'), value: 'email', align: 'center' },
					{ text: this.$t('users.fields.role'), value: 'role', align: 'center' },
					{ text: this.$t('labels.actions'), value: 'actions', sortable: false, align: 'center' }
				]
			}
		},
	    created(){
            this.getusers();
	    },
	    methods: {
	    	editUser(user){
	    		this.$router.push({
					name: "edit-user",
					params: { id: user.id }
				})
	    	},
	      	deleteItem (item) {
	        	this.editedIndex = item.id;
	        	var r = confirm(this.$t('users.fields.delete_confirm'));
	        	if(r == true){
	        		axios.post(settings.root_url + '/api/super-admin-141592/delete-user/' + this.editedIndex)
                    .then(response =>  {
						this.getusers();
                    }).catch(error => {

                    });
	        	}
	        	this.editedIndex = -1;
	      	},
			getusers(){
	    		axios.get(settings.root_url + '/api/super-admin-141592/users')
		            .then(response => {
		                this.users = response.data.users;
		            }).catch(response => {
		            	console.log("error");
		            });
	    	},
	    	onNewShopManager(){
	    		this.$router.push({
					name: 'new-shopmanager'
				})
	    	}
	    }
  	}
</script>