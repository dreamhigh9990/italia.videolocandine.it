<style scoped lang="scss">
	.img-btn{
		cursor: pointer;
		display: flex;
	    align-items: flex-end;
	    justify-content: center;
	    text-align: center;
	    padding-bottom: 8px;
	}
	.v-badge__badge{
		min-height: 30px;
	    min-width: 30px;
	    border-radius: 50%;
	    i{
	    	/*font-size: 28px;*/
	    }
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
								v-for="(image, index) in sortedPosters"
								:key="index"
							>
									<v-card
									style="display: flex; justify-content: center; align-items: center; padding: 10px"
									max-width="150"
									max-height="350">
										<v-badge
									    :color="favoriteColor(image)"
									    left
									    overlap
									    >
									      	<template v-slot:badge>
									        	<v-icon dark @click="toggleFavorite(image)"> mdi-star </v-icon>
									      	</template>
											<v-img
												:src="getImageName(image)"
												contain
												max-width="140"
												max-height="340"
												class="img-btn"
												@click="edit(image)"
											>
									        	<v-btn @click.stop="deleteSavedPoster(image)">Delete</v-btn>
											</v-img>
									    </v-badge>
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
				images: [],
			}
		},

	    created(){
            this.getImages();
	    },
	    computed: {
	    	sortedPosters(){
	    		return this.images.sort(function(a, b){
	    			return parseInt(b.is_favorite) - parseInt(a.is_favorite)
	    		})
	    	}
		},
	    methods: {
			getImages(){
	    		axios.get(settings.root_url + '/api/poster-editings')
		            .then(response => {
		                this.images = response.data.images;
		            });
	    	},
	    	getImageName(item){
	    		return settings.root_url + "/users/" + item.user_id + '/posters/' + item.image;
	    	},
	    	edit(image){
	    		this.$router.push({
					name: "poster-edit2",
					params: { id: image.id }
				})
	    	},
	    	deleteSavedPoster(image){
	        	var r = confirm("Sei sicuro di voler cancellare questa foto prodotto?");
	        	if(r == true){
	        		axios.post(settings.root_url + '/api/poster/delete-savedposter/' + image.id)
                    .then(response =>  {
						this.images = response.data.images;
                    }).catch(error => {

                    });
	        	}
			},
			isFavoriate(image){
				return parseInt(image.is_favorite) === 1;
			},
			favoriteColor(image){
				if(this.isFavoriate(image))
					return 'yellow';
				else
					return 'grey';
			},
			toggleFavorite(image){
				axios.post(settings.root_url + '/api/poster/toggle-favorite/' + image.id, {
					is_favorite: this.isFavoriate(image) ? false : true
				})
				.then(response => {
					this.getImages();
				})
			}
	    }
  	}
</script>