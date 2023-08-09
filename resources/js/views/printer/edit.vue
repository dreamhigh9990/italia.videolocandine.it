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
		<v-layout>
			<v-flex xs12 sm12>
				<v-card min-height="300">
					<v-card-title>
					<span class="headline">{{ $t('labels.select') }}</span>
					</v-card-title>
					<v-container grid-list-sm fluid>
						<v-layout row wrap>
							<v-flex
								v-for="(image, index) in saved_printers"
								:key="index"
							>
									<v-card
									style="display: flex; justify-content: center; align-items: center; padding: 10px"
									max-width="150"
									max-height="350"
									@click="edit(image)">
										<v-img
											:src="getImageName(image)"
											contain
											max-width="140"
											max-height="340"
											class="img-btn"
										>
								        	<v-btn @click.stop="deleteSavedPoster(image)">Delete</v-btn>
										</v-img>
									</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
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
				saved_printers: [],
			}
		},

	    created(){
            this.init();
	    },
	    computed: {
		},
	    methods: {
			init(){
	    		axios.get(settings.root_url + '/api/printer/saved-printers')
		            .then(response => {
		                this.saved_printers = response.data.saved_printers;
		            });
	    	},
	    	getImageName(item){
	    		return settings.root_url + "/users/" + item.user_name + '/printers/' + item.thumbnail;
	    	},
	    	edit(image){
	    		this.$router.push({
					name: "printer-edit2",
					params: { id: image.id }
				})
	    	},
	    	deleteSavedPoster(image){
	        	var r = confirm("Sei sicuro di voler cancellare questa foto prodotto?");
	        	if(r == true){
	        		axios.post(settings.root_url + '/api/printer/delete-saved-printer/' + image.id)
                    .then(response =>  {
						this.saved_printers = response.data.saved_printers;
                    }).catch(error => {

                    });
	        	}
			}
	    }
  	}
</script>