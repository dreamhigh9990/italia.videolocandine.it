
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
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
import { i18n } from '../../lang/index.js'
import it from 'vuetify/es5/locale/it'
import vuetify from '../plugins/vuetify'
import FontPicker from 'font-picker-vue';

Vue.use(VueRouter);
Vue.use(i18n);
Vue.use(FontPicker);

Vue.component('sidebar-component', require('./components/SidebarComponent.vue').default);
Vue.component('footer-component', require('../components/FooterComponent.vue').default);

import router from './router'

const app = new Vue({
    el: '#app',
    vuetify,
    i18n,
    router,
});
