<template>
	<v-container fluid>
		<v-layout>
			<v-flex xs12 sm12>
				<v-card>
					<v-card-title>
					<span class="headline">{{ $t('labels.select') }}</span>
					</v-card-title>
					<v-container grid-list-sm fluid>
						<v-layout row wrap>
							<v-flex
								v-for="(bg, index) in printer_templates"
								:key="index"
							>
								<v-hover v-slot:default="{ hover }">
									<v-card
									max-width="150"
									max-height="350"
									style="padding: 10px"
									:elevation="hover ? 12 : 2"
									@click="createNew(bg)">
										<v-img
											:src="getFormatName(bg)"
											contain
											style="margin-left: auto; margin-right: auto; cursor: pointer;"
										>
										</v-img>
									</v-card>
								</v-hover>
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
				user: null,
				printer_templates: [],
			}
		},

	    created(){
	    	this.init();
	    },
	    computed: {
		},
	    methods: {
	    	init(){
				axios.get(settings.root_url + '/api/printer/printer-templates')
		            .then(response => {
		                this.printer_templates = response.data.printer_templates;
		                this.user = response.data.user;
		            });
	    	},
	    	getFormatName(item){
	    		return settings.root_url + "/users/" + this.user.name + '/printer-templates/thumbnail_' + item.file;
	    	}, 
	    	createNew(bg){
	    		this.$router.push({
					name: "printer-create2",
					params: { id: bg.id }
				})
	    	}
	    }
  	}
</script>