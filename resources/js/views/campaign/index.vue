<style scoped>

</style>

<template>
	<v-container fluid>
		<v-layout wrap justify-end>
			<v-flex xs12 sm6 md3>
				<v-text-field
				v-model="search"
				:label="$t('labels.search')"
				append-icon="search">
				</v-text-field>
			</v-flex>
		</v-layout>
		<v-toolbar color="grey lighten-2">
			<v-toolbar-title>{{ $t('campaign.fields.campaigns')}}</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn color="primary" dark class="mb-2" to="/admin/campaigns/create">{{ $t('buttons.add_new')}}</v-btn>
		</v-toolbar>
		<v-data-table
		:headers="headers"
		:items="campaigns"
		:loading="!isLoaded"
		class="elevation-1"
		:items-per-page="100"
		:loading-text="$t('labels.loading_items')"
		:footer-props="footer_props"
		:no-data-text="$t('labels.no_data')"
		:mobile-breakpoint="300"
		:search="search"
		>
			<template v-slot:item.start_time="{ item }">
				{{ getStartTime(item) }}
			</template>
			<template v-slot:item.end_time="{ item }">
				{{ getEndTime(item) }}
			</template>
			<template v-slot:item.sponsor="{ item }">
				<v-icon
				v-if="item.sponsor == 1"
				>
					check_box
				</v-icon>
				<v-icon
				v-if="item.sponsor == 0"
				>
					check_box_outline_blank
				</v-icon>
			</template>
			<template v-slot:item.actions="{ item }">
				<v-icon
				class="mr-2"
				@click="editItem(item)"
				>
					edit
				</v-icon>
<!-- 				<v-icon
				@click="deleteItem(item)"
				>
					delete
				</v-icon> -->
			</template>
		</v-data-table>
	</v-container>
</template>

<script>
	import { settings } from '../../settings.js'
	import helper from '../../helper.js'
  	export default {
  		data () {
			return {
				isLoaded: false,
				campaigns: [],
				search: '',
				footer_props: {
					itemsPerPageText: "Righe per pagina",
					itemsPerPageOptions: [100],
				},
			}
		},
	    computed: {
			headers(){
				return [
					{ text: this.$t('campaign.fields.name'), value: 'name', sortable: false, align: 'center', },
					{ text: this.$t('labels.start_time'), value: 'start_time', sortable: false, align: 'center' },
					{ text: this.$t('labels.end_time'), value: 'end_time', sortable: false, align: 'center' },
					{ text: this.$t('labels.sponsor'), value: 'sponsor', sortable: false, align: 'center' },
					{ text: this.$t('labels.actions'), value: 'actions', sortable: false, align: 'center' }
				]
			}
		},
	    created(){
        this.getCampaigns();
	    },

	    methods: {
	      	// deleteItem (item) {
	        // 	var r = confirm(this.$t('labels.delete_confirm'));
	        // 	if(r == true){
	        // 		axios.post(settings.root_url + '/api/campaigns/delete/' + item.id)
          //           .then(response =>  {
					// 	this.getCampaigns();
          //           }).catch(error => {

          //           });
	        // 	}
	      	// },
			getCampaigns(){
	    		axios.get(settings.root_url + '/api/campaigns')
		            .then(response => {
		                this.campaigns = response.data.campaigns;
		                this.isLoaded = true;
		            }).catch(response => {
		            	console.log("error");
		            });
	    	},
	    	editItem(item){
	    		this.$router.push({
					name: "campaign-edit",
					params: { id: item.id }
				})
	    	},
	    	getStartTime(item){
	    		return helper.formatDate(item.start_date) + ' ' + item.start_time;
	    	},
	    	getEndTime(item){
	    		return helper.formatDate(item.end_date) + ' ' + item.end_time;
	    	}
	    }
  	}
</script>
