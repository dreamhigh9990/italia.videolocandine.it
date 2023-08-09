import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import createPersistedState from 'vuex-persistedstate'

export default new Vuex.Store({
  state: {
		token: localStorage.getItem('access_token') || null,
		auth: {
			name: '',
			email: '',
			// is_admin: false,
		},
  	video_filter: {
  		video: '',
  		campaign_id: '',
  		group_id: ''
  	},
	},
	getters: {
		getVideoFilter(state){
		  return state.video_filter;
		},
	},
  mutations: {
		videoFilter(state, filter) {
		  state.video_filter.video = filter.video
		  state.video_filter.campaign_id = filter.campaign_id
		  state.video_filter.group_id = filter.group_id
		},
  },
  actions: {
		setVideoFilter(context, filter){
			context.commit('videoFilter', filter)
		}
	},
	plugins: [
		createPersistedState({ storage: window.sessionStorage })
	]
})
