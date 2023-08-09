<style scoped>
	.active{
		background-color: #757575;
	}
</style>

<template>
	<div>
	<v-navigation-drawer
	app
	v-model="drawer"
	dark
	clipped
	>
	    <v-list dense nav>
	      	<v-list-item
	        v-for="(item, index) in users"
	        :key="item.index"
	        @click="onMenuClick(item)"
	        :class="{'active': item.selected}"
	      	>
	        	<v-list-tile-action>
	          		<v-icon>{{ item.icon }}</v-icon>
	        	</v-list-tile-action>

	        	<v-list-item-content>
	          		<v-list-item-title>{{ item.title }}</v-list-item-title>
	        	</v-list-item-content>
	      	</v-list-item>
    	</v-list>
  	</v-navigation-drawer>
  	<v-app-bar
      	app
      	clipped-left
      	dark
    >
      	<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      	<v-toolbar-title>
      		{{ $t('app_name') }}
      	</v-toolbar-title>
      		<v-spacer></v-spacer>
      		<v-menu
		      	transition="slide-y-transition"
		      	offset-y
		      	bottom
		    >
		      	<template v-slot:activator="{ on }">
			        <v-btn
			          	v-on="on"
			          	text
			        >
		          	<v-icon left>account_circle </v-icon> Super Admin
		        	</v-btn>
		      	</template>
		      	<v-list
		      	nav>
		        	<v-list-item
		          		@click="onChangePasswordClick"
		        	>
		          		<v-list-item-title>Change Password</v-list-item-title>
		        	</v-list-item>
		        	<v-list-item
		          		@click="submit"
		        	>
		          		<v-list-item-title>Log out</v-list-item-title>
		        	</v-list-item>
		      	</v-list>
		    </v-menu>
    </v-app-bar>
    </div>
</template>

<script>
	import { settings } from '../settings.js'
	export default {
		data () {
			return {
				drawer: null,
				users: [
					{
						index: 1,
						title: "",
						icon: 'account_circle',
						to: 'users',
						selected: false
					},
				],
				locales: [
					{
						name: 'en',
						title: "English",
						src: "static/flags/us.png"
					},
					{
						name: 'it',
						title: "Italiana",
						src: "static/flags/it.png"
					}
				],
				locale: {}
			}
		},
		created() {
			if(localStorage.getItem('locale') === null){
				localStorage.setItem('locale', 'en');
			}
			let locale = localStorage.getItem('locale');
			import(`../../../lang/${locale}.json`).then((msgs) => {
				this.$i18n.setLocaleMessage(locale, msgs);
				this.$i18n.locale = locale;
				let locales = this.locales.filter(function(locale_){
					return locale_.name === locale;
				});
				this.locale = locales[0];
				this.getMenus();
			})
		},
		methods: {
			getMenus(){
				this.users[0].title = this.$t('sidebar.users');
			},
			onMenuClick(item) {
				this.users.map(function(x){
					x.selected = false;
					return x;
				});
				item.selected = true;
				this.$router.push({
					name: item.to
				})
			},
			submit () {
				axios.post(settings.root_url + '/api/superadmin-logout', {
                })
                .then(response =>  {
                	this.$router.go('/');
                }).catch(error => {
                });
			},
			onChangePasswordClick(){
				this.$router.push({
					name: 'change-password'
				})
			}
		}
	}
</script>