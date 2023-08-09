<template>
	<v-container fluid>
	  <v-row class="fill-height">
	    <v-col>
	      <v-sheet height="64">
	        <v-toolbar flat color="white">
	          <v-btn outlined class="mr-4" @click="setToday">
	            {{ $t('labels.today') }}
	          </v-btn>
	          <v-btn fab text small @click="prev">
	            <v-icon small>mdi-chevron-left</v-icon>
	          </v-btn>
	          <v-btn fab text small @click="next">
	            <v-icon small>mdi-chevron-right</v-icon>
	          </v-btn>
	          <v-toolbar-title>{{ title }}</v-toolbar-title>
	          <div class="flex-grow-1"></div>
	        </v-toolbar>
	      </v-sheet>
	      <v-sheet height="1400">
	        <v-calendar
	          ref="calendar"
	          locale="it"
	          v-model="focus"
	          :events="events"
	          event-color="primary"
	          :event-margin-bottom="3"
	          :now="today"
	          :type="type"
						:event-more="false"
	          @click:event="showEvent"
	          @change="updateRange"
	        ></v-calendar>
	      </v-sheet>
	    </v-col>
	  </v-row>
	</v-container>
</template>
<script>
	import helper from '../../helper.js'
	import { settings } from '../../settings.js'
  export default {
    data() {
    	return {
	      today: this.getToday,
	      focus: this.getToday,
	      type: 'month',
	      start: null,
	      end: null,
	      events: [],
    	}
    },
    computed: {
    	getToday(){
    		return new Date()
    	},
      title () {
        const { start, end } = this
        if (!start || !end) {
          return ''
        }

        const startMonth = this.monthFormatter(start)
        const endMonth = this.monthFormatter(end)
        const suffixMonth = startMonth === endMonth ? '' : endMonth

        const startYear = start.year
        const endYear = end.year
        const suffixYear = startYear === endYear ? '' : endYear

        const startDay = start.day + this.nth(start.day)
        const endDay = end.day + this.nth(end.day)

        return `${startMonth} ${startYear}`
      },
      monthFormatter () {
        return this.$refs.calendar.getFormatter({
          timeZone: 'UTC', month: 'long',
        })
      },
    },
    created(){
    	this.getCampaigns();
    },
    mounted () {
			this.$refs.calendar.checkChange()
    },
    methods: {
    	getCampaigns(){
				axios.get(settings.root_url + '/api/campaigns')
					.then(response => {
						this.campaigns = response.data.campaigns;
						for (var i = this.campaigns.length - 1; i >= 0; i--) {
							let event = {
								'name': this.campaigns[i].name,
								'start': this.campaigns[i].start_date,
								'end': this.campaigns[i].end_date,
								'id': this.campaigns[i].id,
							}
							this.events.push(event);
						}
					}).catch(response => {
						console.log("error");
					});
			},
      setToday () {
        this.focus = this.today
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
      	this.$router.push({
					name: "campaign-edit",
					params: { id: event.id }
				})
      },
      updateRange ({ start, end }) {
        // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
        this.start = start
        this.end = end
      },
      nth (d) {
        return d > 3 && d < 21
          ? 'th'
          : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
      },
    },
  }
</script>
<!-- <style scoped>
	.fc-content{
		background-color: #42A5F5 !important;
	}
</style>
<template>
	<v-container fluid>
		<full-calendar
		ref="calendar"
		:events="events"
		:config="config"
		@event-selected="eventSelected"
		>
		</full-calendar>
	</v-container>
</template>
<script>
	import 'fullcalendar/dist/fullcalendar.css'
	import helper from '../../helper.js'
	import { settings } from '../../settings.js'

	export default {
		components: {
		},
		data () {
			return {
				events: [],
				campaigns: [],
				config: {
					locale: 'it',
					defaultView: 'month',
					buttonText: {
						today: 'oggi',
					},
					header: {
						right: ''
					}
				},
			}
		},
		created(){
			this.getCampaigns();
		},
		methods: {
			eventSelected(event){
				this.$router.push({
					name: "campaign-edit",
					params: { id: event.id }
				})
			},
			getCampaigns(){
				axios.get(settings.root_url + '/api/campaigns')
					.then(response => {
						this.campaigns = response.data.campaigns;
						for (var i = this.campaigns.length - 1; i >= 0; i--) {
							let event = {
								'title': this.campaigns[i].name,
								'start': this.campaigns[i].start_date,
								'end': this.campaigns[i].end_date,
								'id': this.campaigns[i].id,
							}
							this.events.push(event);
						}
					}).catch(response => {
						console.log("error");
					});
			},
		}
	}
</script> -->