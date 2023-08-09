<style scoped>

</style>

<template>
	<v-container fluid>
		<v-toolbar color="grey lighten-2">
			<v-toolbar-title>{{ $t('shops.title') }}</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn color="primary" dark class="mb-2" to="/admin/shops/create">{{ $t('buttons.add_new') }}</v-btn>
		</v-toolbar>
		<v-data-table
		:headers="headers"
		:items="shops"
		class="elevation-1"
		:no-data-text="$t('labels.no_data')"
		hide-default-footer
		:mobile-breakpoint="300"
		>
	      	<template v-slot:item.start_time="{ item }">
				<strong>{{days[0]}}</strong> : {{ item.open1 }} - {{ item.close1 }}<br>
				<strong>{{days[1]}}</strong> : {{ item.open2 }} - {{ item.close2 }}<br>
				<strong>{{days[2]}}</strong> : {{ item.open3 }} - {{ item.close3 }}<br>
				<strong>{{days[3]}}</strong> : {{ item.open4 }} - {{ item.close4 }}<br>
				<strong>{{days[4]}}</strong> : {{ item.open5 }} - {{ item.close5 }}<br>
				<strong>{{days[5]}}</strong> : {{ item.open6 }} - {{ item.close6 }}<br>
				<strong>{{days[6]}}</strong> : {{ item.open7 }} - {{ item.close7 }}
	      	</template>
	      	<template v-slot:item.description="{ item }">
	      		<pre>{{ item.description }}</pre>
	      	</template>
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
	import helper from '../../helper.js'
  	export default {
  		components: {
        },
  		data () {
			return {
				dialog: false,
				editedIndex: -1,
				menu_date_start: false,
				menu_time_start: false,
				menu_date_end: false,
				menu_time_end: false,
				shopForm: {
					name: '',
					description: '',
					start_time: '',
					end_time: '',
				},
				defaultItem: {
					name: '',
					shop: '',
					start_time: '',
					end_time: '',
				},
				shops: [],
				days: [],
			}
		},
		computed: {
			headers(){
				return [
					{ text: this.$t('shops.fields.name'), value: 'name', align: 'center' },
					{ text: this.$t('shops.fields.opening_time'), value: 'start_time', align: 'center' },
					{ text: this.$t('shops.fields.description'), value: 'description', align: 'center' },
					{ text: this.$t('labels.actions'), value: 'actions', sortable: false, align: 'center' }
				]
			}
		},
	    created(){
            this.init();
	    },

	    methods: {
	    	init(){
		        this.days = helper.h_getDays();
	    		axios.get(settings.root_url + '/api/shops/load')
		            .then(response => {
		                this.shops = response.data.shops;
		            }).catch(response => {
		            	console.log("error");
		            });
	    	},
	      	editItem (item) {
	        	this.$router.push({
					name: "shop-edit",
					params: { id: item.id }
				})
	      	},

	      	deleteItem (item) {
	        	this.editedIndex = item.id;
	        	var r = confirm(this.$t('shops.fields.delete_confirm'));
	        	if(r == true){
	        		axios.post(settings.root_url + '/api/shops/delete/' + this.editedIndex)
                    .then(response =>  {
						this.getShops();
                    }).catch(error => {

                    });
	        	}
	        	this.editedIndex = -1;
	      	},

	      	close () {
				this.dialog = false
				this.editedIndex = -1;
			},
			save () {
				if (this.editedIndex > -1) {
					let shopForm = new FormData();
                    shopForm.append('name', this.shopForm.name);
                    shopForm.append('description', this.shopForm.description);
                    shopForm.append('start_time', this.shopForm.start_time);
                    shopForm.append('end_time', this.shopForm.end_time);
                    axios.post(settings.root_url + '/api/shops/update/' + this.editedIndex, shopForm)
                    .then(response =>  {
                    	this.getShops();
                    }).catch(error => {
                    });
				} else {
					let shopForm = new FormData();
                    shopForm.append('name', this.shopForm.name);
                    shopForm.append('description', this.shopForm.description);
                    shopForm.append('start_time', this.shopForm.start_time);
                    shopForm.append('end_time', this.shopForm.end_time);
                    axios.post(settings.root_url + '/api/shops/add-new', shopForm)
                    .then(response =>  {
                    	this.getShops();
                    }).catch(error => {
                    });
				}
                this.shopForm = this.defaultItem;
				this.editedIndex = -1;
				this.close()
			},
			getShops(){
	    		axios.get(settings.root_url + '/api/shops')
		            .then(response => {
		                this.shops = response.data.shops;
		            }).catch(response => {
		            	console.log("error");
		            });
	    	},
	    	getLocale(){
				return helper.getLocale();
			}
	    }
  	}
</script>