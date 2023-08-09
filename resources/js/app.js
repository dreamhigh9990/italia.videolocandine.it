
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import store from './store'
// window.Vuetify = require('vuetify');
// import Vuetify, {
// 	VApp,
// 	VList, VListGroup, VListTile, VListTileAction, VListTileTitle, VListTileContent, 
// 	VSpacer,
// 	VNavigationDrawer,
// 	VToolbar, VToolbarTitle, VToolbarSideIcon,
// 	VMenu,
// 	VBtn, VIcon, 
// 	VContent, VContainer,
// 	VCard, VCardTitle, VCardText, VCardActions, 
// 	VLayout, VFlex, VSheet, 
// 	VDataTable, 
// 	VTextField, VTextarea, VCheckbox, VSelect,
// 	VDialog,
// } from 'vuetify/lib'
import VueRouter from 'vue-router'
import { i18n } from '../lang/index.js'
import it from 'vuetify/es5/locale/it'
// import { Fabric } from 'vue-fabric';
import VueToastr from "vue-toastr";

Vue.use(VueRouter);
Vue.use(i18n);
Vue.use(VueToastr, {
	defaultTimeout: 0,
	defaultProgressBar: false,
    defaultClassNames: ["animated", "zoomInUp"],
    closeButton: true,
	// defaultStyle: { "background-color": "#F5594E" }
});
import vuetify from './plugins/vuetify'
// Vue.use(Vuetify);
// Vue.use(Vuetify, {
	
// 	lang: {
// 		locales: {it},
// 		current: 'it'
// 	},
//   	components: {
// 	    VApp,
// 	    VList, VListGroup, VListTile, VListTileAction, VListTileTitle, VListTileContent, 
// 	    VSpacer,
// 	    VNavigationDrawer,
// 	    VToolbar, VToolbarTitle, VToolbarSideIcon,
// 	    VMenu,
// 	    VBtn, VIcon, 
// 	    VContent, VContainer,
// 	    VCard, VCardTitle, VCardText, VCardActions, 
// 	    VLayout, VFlex, VSheet, 
// 	    VDataTable, 
// 	    VTextField, VTextarea, VCheckbox, VSelect,
// 	    VDialog,
//   	},
// })
//   	export default new Vuetify({ 
//   		theme: {
// 	    themes: {
// 	      light: {
// 	      	primary: '#42a5f5',
// 	        // primary: colors.purple,
// 	        // secondary: colors.grey.darken1,
// 	        // accent: colors.shades.black,
// 	        // error: colors.red.accent3
// 	      },
// 	      dark: {
// 	        primary: '#2196F3',
// 	      }
// 	    }
  		
//   	} })
// Vue.use(Fabric);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// Vue.component('navbar-component', require('./components/NavbarComponent.vue').default);
Vue.component('sidebar-component', require('./components/SidebarComponent.vue').default);
Vue.component('footer-component', require('./components/FooterComponent.vue').default);

import router from './router'

const app = new Vue({
    el: '#app',
    store,
    vuetify,
    i18n,
    router,
});
