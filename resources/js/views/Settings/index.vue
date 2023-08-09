<style scoped>

</style>

<template>
	<v-container fluid>
		<v-card>
			<v-card-title>
				<span class="headline">{{ $t('labels.monitor_list') }}</span>
			</v-card-title>
			<v-card-text>
				<v-container fluid>
					<v-layout wrap>
						<v-flex xs12 sm12 md12>
							<v-alert
						      outlined
						      type="warning"
						    >
						      	<div v-html="monitor_list_alert"></div>
						    </v-alert>
						</v-flex>
						<v-flex xs12 sm12 md12>
							<v-radio-group v-model="by_monitor" :readonly="user.role=='user'">
						      	<v-radio :label="$t('labels.show_monitor_list')" value="1"></v-radio>
						      	<v-radio :label="$t('labels.manage_monitor_by_group')" value="0"></v-radio>
						    </v-radio-group>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card-text>
			<v-card-actions>
				<v-container fluid>
					<v-layout justify-end>
						<v-btn color="info" :disabled="user.role=='user'" @click="saveByMonitor">{{ $t('buttons.save')}}</v-btn>
					</v-layout>
				</v-container>
			</v-card-actions>
		</v-card>
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
				by_monitor: '',
				user: {},
			}
		},
		computed: {
			monitor_list_alert: function(){
				return this.$t('labels.monitor_list_alert');
			}
		},
	    created(){
    		this.initByMonitor();
	    },
	    methods: {
	    	initByMonitor(){
	    		axios.get(settings.root_url + '/api/settings/init')
	            .then(response => {
	            	this.by_monitor = response.data.user.by_monitor;
	            	this.user = response.data.user;
	            }).catch(response => {
	            });
	    	},


	    	saveByMonitor(){
	    		axios.post(settings.root_url + '/api/settings/update-by-monitor', {
	    			by_monitor: this.by_monitor
	    		})
	            .then(response => {
	            	this.$toastr.s(
				      	this.$t('labels.updated_successfully'),
				    );
	            	this.initByMonitor();
	            }).catch(response => {
	            	this.$toastr.e(
                		'error',
				      	'Something went wrong',
				    );
	            });
	    	}
	    }
  	}
</script>