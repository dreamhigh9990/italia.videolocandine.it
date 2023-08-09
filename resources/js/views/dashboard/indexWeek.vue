<style scoped>
  .theme--light.v-calendar-daily .v-calendar-daily_head-day{
    height: 300px;
  }
  .v-toolbar__content{
    border-bottom: solid 1px #e0e0e0;
    padding: 0;
  }
</style>
<template>
  <v-container fluid>
    <v-card class="fill-height">
      <v-card-text>
        <v-sheet height="64">
          <v-toolbar color="white" flat>
            <v-btn color="primary" class="ml-n4 mr-4" @click="setToday">
              {{ $t('labels.today') }}
            </v-btn>
            <v-btn fab text small @click="prev">
              <v-icon small>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn fab text small @click="next">
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
          </v-toolbar>
        </v-sheet>
        <v-sheet min-height="600" style="border-top: solid 1px #e0e0e0;">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
	          event-color="primary"
            :events="events"
            :event-margin-bottom="8"
            :now="today"
            type="week"
            locale="it"
						:event-more="false"
            @change="updateRange"
	          @click:event="showEvent"
          >
          </v-calendar>
        </v-sheet>
      </v-card-text>
    </v-card>
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
        type: 'week',
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
      console.log(this.$refs.calendar)
      this.$refs.calendar.$el.childNodes[1].style.display = 'none'
      this.$refs.calendar.$el.childNodes[0].style.minHeight = '300px'
      this.$refs.calendar.$el.childNodes[0].childNodes[0].style.width = '0'
      this.$refs.calendar.$el.childNodes[0].childNodes.forEach(function(node, index){
        if(index !== 0){
          node.childNodes[1].style.paddingBottom = '30px'
        }
      })
      
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
      getEventColor (event) {
        return event.color
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
      updateRange ({ start, end }) {
        // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
        this.start = start
        this.end = end
      },
      showEvent ({ nativeEvent, event }) {
      	this.$router.push({
					name: "campaign-edit",
					params: { id: event.id }
				})
      },
      nth (d) {
        return d > 3 && d < 21
          ? 'th'
          : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
      },
    },
  }
</script>