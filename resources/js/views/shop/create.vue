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
					<v-container fluid>
						<v-layout wrap>
							<v-flex md12>
								<v-text-field v-model="shopForm.name" :label="$t('shops.fields.shop')" :rules="nameRules"></v-text-field>
							</v-flex>
							<template v-for="index in 7">
								<v-flex xs12 xs3 md3>{{days[index - 1]}}</v-flex>
								<v-flex xs6 sm4 md4>
									<v-menu
									:close-on-content-click="false"
									v-model="menu_time_start[index - 1]"
									offset-y
									>
										<template v-slot:activator="{ on }">
											<v-text-field v-on="on" v-model="shopForm.start_times[index - 1]" :label="$t('labels.start_time')" readonly style="width: 120px;"></v-text-field>
										</template>
										<v-time-picker v-model="shopForm.start_times[index - 1]" format="24hr">
										</v-time-picker>
									</v-menu>
								</v-flex>
								<v-flex xs6 sm4 md4>
									<v-menu
									:close-on-content-click="false"
									v-model="menu_time_end[index - 1]"
									offset-y
									>
										<template v-slot:activator="{ on }">
											<v-text-field v-on="on" v-model="shopForm.end_times[index - 1]" :label="$t('labels.end_time')" readonly style="width: 120px;"></v-text-field>
										</template>
										<v-time-picker v-model="shopForm.end_times[index - 1]" format="24hr">
										</v-time-picker>
									</v-menu>
								</v-flex>
							</template>
							<v-flex sm12>
								<v-textarea
								v-model="shopForm.description"
								:label="$t('campaign.fields.description')"
								></v-textarea>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card-text>
				<v-card-actions>
					<v-container>
						<v-layout justify-end>
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
	import { settings } from '../../settings.js'
	import helper from '../../helper.js'
	import { VTimePicker, VForm } from 'vuetify/lib'
  	export default {
  		components: {
            VTimePicker, VForm
        },
  		data () {
			return {
				valid: true,
				menu_time_start: [false, false, false, false, false, false, false],
				menu_time_end: [false, false, false, false, false, false, false],
				days: [],
				shopForm: {
					name: '',
					description: '',
					start_times: ["", "", "", "", "", "", ""],
					end_times: ["", "", "", "", "", "", ""],
				},

				nameRules: [
			        v => !!v || this.$t('labels.name_required'),
			    ],
			}
		},
	    created(){
	    	this.init();
	    },
	    computed: {
	    },
	    methods: {
	    	init(){
	    		this.days = helper.h_getDays();
	    	},
			create(){
				if (this.$refs.form.validate()) {
			        this.snackbar = true
	                axios.post(settings.root_url + '/api/shops/add-new', {
		                name: this.shopForm.name,
		                description: this.shopForm.description,
		                start_times: this.shopForm.start_times,
		                end_times: this.shopForm.end_times,
	                })
	                .then(response =>  {
	                	this.$router.push({name: 'shops'});
	                }).catch(error => {
	                });
				}
			}
        }
  	}
</script>