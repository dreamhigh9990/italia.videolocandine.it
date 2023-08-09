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
	        v-for="item in campaigns"
	        :key="item.index"
	        @click="onMenuClick(item)"
	        :class="{'active': item.selected}"
	      	>
	        	<v-list-item-icon>
	          		<v-icon>{{ item.icon }}</v-icon>
	        	</v-list-item-icon>

	        	<v-list-item-content>
	          		<v-list-item-title>{{ item.title }}</v-list-item-title>
	        	</v-list-item-content>
	      	</v-list-item>

	      	<v-list-group
	      	prepend-icon="list_alt"
		    no-action
		    >
				<template v-slot:activator>
					<v-list-item>
						<v-list-item-title>{{ $t('sidebar.poster') }}</v-list-item-title>
					</v-list-item>
				</template>
				<v-list-item
				v-for="medium in poster"
				:key="medium.index"
				@click="onMenuClick(medium)"
				:class="{'active': medium.selected}"
				>
					<v-list-item-title v-text="medium.title"></v-list-item-title>
					<v-list-item-icon>
						<v-icon v-text="medium.icon"></v-icon>
					</v-list-item-icon>
				</v-list-item>
			</v-list-group>

			<v-list-group
	      	prepend-icon="print"
		    no-action
		    >
		    	<template v-slot:activator>
					<v-list-item>
						<v-list-item-title>{{ $t('sidebar.printer') }}</v-list-item-title>
					</v-list-item>
				</template>
		      	<v-list-item
		        v-for="item in items"
		        :key="item.index"
		        @click="onMenuClick(item)"
		        :class="{'active': item.selected}"
		      	>
		          	<v-list-item-title>{{ item.title }}</v-list-item-title>
		        	<v-list-item-icon>
		          		<v-icon>{{ item.icon }}</v-icon>
		        	</v-list-item-icon>
		      	</v-list-item>
	      	</v-list-group>
	      	<v-list-group
	      	prepend-icon="perm_media"
		    no-action
		    >
				<template v-slot:activator>
					<v-list-item>
						<v-list-item-title>{{ $t('sidebar.media') }}</v-list-item-title>
					</v-list-item>
				</template>
				<v-list-item
				v-for="medium in media"
				:key="medium.index"
				@click="onMenuClick(medium)"
				:class="{'active': medium.selected}"
				>
					<v-list-item-title v-text="medium.title"></v-list-item-title>
					<v-list-item-icon>
						<v-icon v-text="medium.icon"></v-icon>
					</v-list-item-icon>
				</v-list-item>
			</v-list-group>
			
<!-- 			<v-list-item
	        v-for="(item, index) in items2"
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
	      	</v-list-item> -->
	      	<v-list-group
	      	prepend-icon="settings"
		    no-action
		    >
				<template v-slot:activator>
					<v-list-item>
						<v-list-item-title>{{ $t('sidebar.settings') }}</v-list-item-title>
					</v-list-item>
				</template>
				<v-list-item
				v-for="setting in getSettings"
				:key="setting.index"
				@click="onMenuClick(setting)"
				:class="{'active': setting.selected}"
				>
					<v-list-item-title v-text="setting.title"></v-list-item-title>
					<v-list-item-icon>
						<v-icon v-text="setting.icon"></v-icon>
					</v-list-item-icon>
				</v-list-item>
			</v-list-group>
    	</v-list>
  	</v-navigation-drawer>
  	<v-app-bar
      	app
      	clipped-left
      	dark
      	
    >
      	<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      	<v-toolbar-title style="cursor: pointer;" @click="onTitleClick()">
      		{{ $t('app_name') }}
      	</v-toolbar-title>
      		<v-spacer></v-spacer>
<!--       		<v-menu
			offset-y
			>
				<template v-slot:activator="{ on }">
					<v-btn
					icon
					dark
					v-on="on"
					>
					<img :src="getFlagSrc(locale)">
					</v-btn>
				</template>

				<v-list>
					<v-list-tile
					v-for="(item, i) in locales"
					:key="i"
					
					>
					<v-list-item-title @click="onLocale(item)" style="cursor: pointer;">
						<img :src="getFlagSrc(item)" class="mr-2">{{ item.title }}
					</v-list-item-title>
					</v-list-tile>
				</v-list>
			</v-menu> -->
			<div v-if="user">
				{{ $t('labels.logged_in_as') }} {{ user.email }}
			</div>
			<v-menu
			offset-y
			>
				<template v-slot:activator="{ on }">
					<v-btn icon dark v-on="on">
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>

				<v-list>
					<v-list-item @click="gotoSettings">
						<v-list-item-title>
							<v-icon>settings</v-icon> {{ $t('labels.settings') }}
						</v-list-item-title>
					</v-list-item>
					<v-list-item @click="gotoProfile">
						<v-list-item-title>
							<v-icon>account_circle</v-icon> {{ $t('labels.profile') }}
						</v-list-item-title>
					</v-list-item>
					<v-list-item @click="logout">
						<v-list-item-title>
							<v-icon>exit_to_app</v-icon> {{ $t('labels.logout') }}
						</v-list-item-title>
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
				user: null,
				campaigns: [
					{
						index: 1,
						title: "",
						icon: 'local_movies',
						to: 'campaigns',
						selected: false
					},
				],
				items: [
					{
						index: 3,
						title: "",
						icon: 'queue',
						to: 'printer-create',
						selected: false
					},
					{
						index: 4,
						title: "",
						icon: 'playlist_play',
						to: 'printer-edit',
						selected: false
					},
				],
				// items2: [
				// 	{
				// 		index: 6,
				// 		title: "",
				// 		icon: 'send',
				// 		to: 'sponsor',
				// 		selected: false
				// 	},
				// ],
				settings: [
					{
						index: 7,
						title: "",
						icon: 'account_circle',
						to: 'users',
						selected: false
					},
					{
						index: 8,
						title: "",
						icon: 'group_work',
						to: 'group',
						selected: false
					},
					{
						index: 9,
						title: "",
						icon: 'desktop_windows',
						to: 'monitors',
						selected: false
					},
					{
						index: 10,
						title: "",
						icon: 'shopping_cart',
						to: 'shops',
						selected: false
					},
				],
				media: [
					{
						index: 6,
						title: "rooms",
						icon: 'dashboard',
						to: 'rooms',
						selected: false
					},
					{
						index: 11,
						title: "",
						icon: 'videocam',
						to: 'videos',
						selected: false
					},
					{
						index: 12,
						title: "",
						icon: 'image',
						to: 'images',
						selected: false
					},
					{
						index: 13,
						title: "",
						icon: 'collections',
						to: 'poster',
						selected: false
					},
					// {
					// 	index: 17,
					// 	title: "",
					// 	icon: 'collections',
					// 	to: 'printer',
					// 	selected: false
					// },
				],
				poster: [
					{
						index: 14,
						title: "",
						icon: "queue",
						to: "poster-create",
						selected: false
					},
					{
						index: 15,
						title: "Salvate",
						icon: "playlist_play",
						to: "poster-edit",
						selected: false
					}
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
			import(`../../lang/${locale}.json`).then((msgs) => {
				this.$i18n.setLocaleMessage(locale, msgs);
				this.$i18n.locale = locale;
				let locales = this.locales.filter(function(locale_){
					return locale_.name === locale;
				});
				this.locale = locales[0];
				this.getMenus();
			})
			axios.get(settings.root_url + '/api/user-details')
            .then(response => {
                this.user = response.data.user;
            }).catch(response => {
            });
		},
		computed: {
			getSettings(){
				let self = this
				if(this.user){
					let settings_without_group = this.settings.filter(function(setting){
						return setting.index != 8 || self.user.by_monitor == 0
					})
					if(this.user.role == 'shopmanager'){
						return settings_without_group;
					} else if(this.user.role == 'user'){
						return settings_without_group.filter(function(setting){
							return setting.index != 7 && setting.index != 10;
						});
					}
				}
			}
		},
		methods: {
			getMenus(){
				this.campaigns[0].title = this.$t('sidebar.campaign');
				this.items[0].title = this.$t('sidebar.print_create');
				this.items[1].title = this.$t('sidebar.print_edit');
				this.poster[0].title = this.$t('labels.create');
				this.poster[1].title = this.$t('labels.published');
				this.settings[0].title = this.$t('sidebar.users');
				this.settings[1].title = this.$t('sidebar.group');
				this.settings[2].title = this.$t('sidebar.monitor');
				this.settings[3].title = this.$t('sidebar.shop');
				this.media[0].title = this.$t('sidebar.rooms');
				this.media[1].title = this.$t('sidebar.videos');
				this.media[2].title = this.$t('sidebar.images');
				this.media[3].title = this.$t('sidebar.scheduled_posters');
				// this.media[3].title = this.$t('sidebar.scheduled_printers');
			},
			getFlagSrc(item){
				return settings.root_url + '/' + item.src;
			},
			onMenuClick(item) {
				this.campaigns.map(function(x){
					x.selected = false;
					return x;
				});
				this.poster.map(function(x){
					x.selected = false;
					return x;
				});
				this.items.map(function(x){
					x.selected = false;
					return x;
				});
				// this.items2.map(function(x){
				// 	x.selected = false;
				// 	return x;
				// });
				this.settings.map(function(x){
					x.selected = false;
					return x;
				});
				this.media.map(function(x){
					x.selected = false;
					return x;
				});
				item.selected = true;
				this.$router.push({
					name: item.to
				})
			},
			logout () {
				axios.post(settings.root_url + '/api/logout', {
                })
                .then(response =>  {
                	this.$router.go('/');
                }).catch(error => {
                });
			},
			gotoSettings(){
				this.$router.push({
					name: 'settings'
				});
			},
			gotoProfile(){
				this.$router.push({
					name: 'profile'
				});
			},
			onLocale(item){
				localStorage.setItem('locale', item.name);
				location.reload();
			},
			onTitleClick(){
				this.$router.push({
					name: 'dashboard'
				})
			}
		}
	}
</script>