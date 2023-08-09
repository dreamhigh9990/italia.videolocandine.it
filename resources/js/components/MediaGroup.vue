<style scoped>
	.v-chip{
		height: auto;
	}
</style>
<template>
	<div>
		<div v-if="by_monitor === '1'">
			<div v-if="monitors.length">
				<v-chip v-for="(monitor, index) in monitors" :key="index" small>
					{{ monitor.name }}
				</v-chip>
			</div>
			<div v-if="!monitors.length">
				<v-chip color="red" text-color="white" small>
					{{ $t('labels.no_group')}}
				</v-chip>
			</div>
		</div>
		<div v-if="by_monitor === '0'">
			<div v-if="groups.length">
				<v-chip v-for="(group, index) in groups" :key="index" small>
					{{ group.name }}
				</v-chip>
			</div>
			<div v-if="!groups.length">
				<v-chip color="red" text-color="white" small>
					{{ $t('labels.no_group')}}
				</v-chip>
			</div>
		</div>
	</div>
</template>

<script>
	import { settings } from '../settings.js'
	import helper from '../helper.js'

  	export default {
  		props: ['item', 'by_monitor', 'monitors_all', 'groups_all'],

  		data () {
			return {
			}
		},
		created(){
	    	this.init();
	    },
	    computed: {
	    	monitors: function(){
	    		let self = this;
	    		return self.monitors_all.filter(function(monitor) {
	    			if(self.item.monitor_ids)
	    				return self.item.monitor_ids.split(',').map(Number).includes(monitor.id);
	    			else
	    				return false;
	    		});
	    	},
	    	groups: function(){
	    		let self = this;
	    		return self.groups_all.filter(function(group) {
	    			if(self.item.group_ids)
	    				return self.item.group_ids.split(',').map(Number).includes(group.id);
	    			else
	    				return false;
	    		});
	    	}
	    },
	    methods: {
	    	init(){
	    	},
		}
  	}
</script>