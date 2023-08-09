<template>
  <v-select
    :value="value"
    :items="weekDays"
    attach
    chips
    :label="$t('campaign.fields.days')"
    multiple
    @input="updateDays()"
    ref="daysComponent"
  >
  <!-- <input type="text" :value="value" @input="updateDays()" ref="custominput"/> -->
    <!-- <template v-slot:prepend-item>
      <v-list-item
      ripple
      @click="toggle"
      >
      <v-list-tile-action>
      <v-icon :color="date_form.days.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
      </v-list-tile-action>
      <v-list-item-content>
      <v-list-item-title>{{ $t('labels.select_all')}}</v-list-item-title>
      </v-list-item-content>
      </v-list-item>
      <v-divider class="mt-2"></v-divider>
    </template> -->
  </v-select>
</template>
<script>
import helper from "../helper.js";
export default {
  props: ['value'],
  data() {
    return {
    }
  },
  computed: {
    // localValue(){
    //   return this.value
    // },
    weekDays(){
      return helper.h_getDays()
    },
    // allDays () {
    //   return this.days.length === this.days.length
    // },
    // someDays () {
    //   return this.campaignForm.days.length > 0 && !this.allDays
    // },
  },
  methods: {
    updateDays(){
      console.log(this.$refs.daysComponent)
      // console.log(this.$refs.daysComponent.value)
      // this.$emit('input', this.$refs.daysComponent.value)
    }
    // toggle () {
    //   this.$nextTick(() => {
    //     if (this.allDays) {
    //       this.campaignForm.days = []
    //     } else {
    //       this.campaignForm.days = this.days.slice()
    //     }
    //   })
    // },
  }
}
</script>