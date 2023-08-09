import VueRouter from 'vue-router'
import Layout from './views/Layout.vue'

// const dashboard = () => import(/* webpackChunkName:"dashboard" */'./views/dashboard/indexWeek.vue').then(m => m.default || m)
const dashboard = () => import(/* webpackChunkName:"dashboard" */'./views/dashboard/index.vue').then(m => m.default || m)
const campaigns = () => import(/* webpackChunkName:"campaigns" */'./views/campaign/index.vue').then(m => m.default || m)
const campaignCreate = () => import(/* webpackChunkName:"campaignCreate" */'./views/campaign/create.vue').then(m => m.default || m)
const campaignEdit = () => import(/* webpackChunkName:"campaignEdit" */'./views/campaign/edit.vue').then(m => m.default || m)
const monitors = () => import(/* webpackChunkName:"monitors" */'./views/monitor/index.vue').then(m => m.default || m)
const sponsor = () => import(/* webpackChunkName:"sponsor" */'./views/sponsor/index.vue').then(m => m.default || m)
const shops = () => import(/* webpackChunkName:"shops" */'./views/shop/index.vue').then(m => m.default || m)
const shopCreate = () => import(/* webpackChunkName:"shopCreate" */'./views/shop/create.vue').then(m => m.default || m)
const shopEdit = () => import(/* webpackChunkName:"shopEdit" */'./views/shop/edit.vue').then(m => m.default || m)
const poster = () => import(/* webpackChunkName:"poster" */'./views/poster/index.vue').then(m => m.default || m)
const poster2 = () => import(/* webpackChunkName:"poster2" */'./views/poster/index2.vue').then(m => m.default || m)
const posterCreate = () => import(/* webpackChunkName:"posterCreate" */'./views/poster/create.vue').then(m => m.default || m)
const posterCreate2 = () => import(/* webpackChunkName:"posterCreate2" */'./views/poster/create2.vue').then(m => m.default || m)
const posterEdit = () => import(/* webpackChunkName:"posterEdit" */'./views/poster/edit.vue').then(m => m.default || m)
const posterEdit2 = () => import(/* webpackChunkName:"posterEdit2" */'./views/poster/edit2.vue').then(m => m.default || m)
const printerCreate = () => import(/* webpackChunkName:"printerCreate" */'./views/printer/create.vue').then(m => m.default || m)
const printerEdit = () => import(/* webpackChunkName:"printEdit" */'./views/printer/edit.vue').then(m => m.default || m)
const printerEdit2 = () => import(/* webpackChunkName:"printerEdit2" */'./views/printer/edit2.vue').then(m => m.default || m)
const printerCreate2 = () => import(/* webpackChunkName:"printerCreate2" */'./views/printer/create2.vue').then(m => m.default || m)
const rooms = () => import(/* webpackChunkName:"rooms" */'./views/rooms/index.vue').then(m => m.default || m)
const images = () => import(/* webpackChunkName:"images" */'./views/images/index.vue').then(m => m.default || m)
const videos = () => import(/* webpackChunkName:"videos" */'./views/videos/index.vue').then(m => m.default || m)
const videosEdit = () => import(/* webpackChunkName:"videosEdit" */'./views/videos/edit.vue').then(m => m.default || m)
const canvas = () => import(/* webpackChunkName:"canvas" */'./views/canvas/index.vue').then(m => m.default || m)
const imageEdit = () => import(/* webpackChunkName:"imageEdit" */'./views/images/edit.vue').then(m => m.default || m)
const groups = () => import(/* webpackChunkName:"groups" */'./views/group/index.vue').then(m => m.default || m)
const users = () => import(/* webpackChunkName:"users" */'./views/users/index.vue').then(m => m.default || m)
const settings = () => import(/* webpackChunkName:"settings" */'./views/settings/index.vue').then(m => m.default || m)
const profile = () => import(/* webpackChunkName:"profile" */'./views/profile/index.vue').then(m => m.default || m)

const routes = [
    {
        path: '/admin',
        component: Layout,
        children :[
            {
                name: 'dashboard',
                path: '/admin/dashboard',
                component: dashboard,
            },
            {
                name: 'campaigns',
                path: '/admin/campaigns',
                component: campaigns,
            },
            {
                name: 'campaignCreate',
                path: '/admin/campaigns/create',
                component: campaignCreate,
            },
            {
                name: 'campaign-edit',
                path: '/admin/campaigns/:id/edit',
                component: campaignEdit,
            },
            {
                name: 'monitors',
                path: '/admin/monitors',
                component: monitors,
            },
            {
                name: 'sponsor',
                path: '/admin/sponsor',
                component: sponsor,
            },
            {
                name: 'rooms',
                path: '/admin/rooms',
                component: rooms,
            },
            {
                name: 'printer-create',
                path: '/admin/printer-create',
                component: printerCreate
            },
            {
                name: 'printer-create2',
                path: '/admin/printer-create2/:id',
                component: printerCreate2
            },
            {
                name: 'printer-edit',
                path: '/admin/printer-edit',
                component: printerEdit
            },
            {
                name: 'printer-edit2',
                path: '/admin/printer-edit2/:id',
                component: printerEdit2
            },
            {
                name: 'poster',
                path: '/admin/poster',
                component: poster
            },
            {
                name: 'poster2',
                path: '/admin/poster2/:id/edit',
                component: poster2
            },
            {
                name: 'poster-create',
                path: '/admin/poster-create',
                component: posterCreate
            },
            {
                name: 'poster-create2',
                path: '/admin/poster-create/:id',
                component: posterCreate2
            },
            {
                name: 'poster-edit',
                path: '/admin/poster-edit',
                component: posterEdit
            },
            {
                name: 'poster-edit2',
                path: '/admin/poster-edit2/:id',
                component: posterEdit2
            },
            {
                name: 'shops',
                path: '/admin/shops',
                component: shops,
            },
            {
                name: 'shop-create',
                path: '/admin/shops/create',
                component: shopCreate,
            },
            {
                name: 'shop-edit',
                path: '/admin/shops/:id/edit',
                component: shopEdit,
            },
            {
                name: 'images',
                path: '/admin/images',
                component: images,
            },
            {
                name: 'videos',
                path: '/admin/videos',
                component: videos,
            },
            {
                name: 'videos-edit',
                path: '/admin/videos/:id/edit',
                component: videosEdit,
            },
            {
                name: 'canvas',
                path: '/admin/canvas',
                component: canvas,
            },
            {
                name: 'image-edit',
                path: '/admin/images/:id/edit',
                component: imageEdit,
            },
            {
                name: 'group',
                path: '/admin/groups',
                component: groups,
            },
            {
                name: 'users',
                path: '/admin/users',
                component: users,
            },
            {
                name: 'settings',
                path: '/admin/settings',
                component: settings,
            },
            {
                name: 'profile',
                path: '/admin/profile',
                component: profile,
            },
        ]
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
    // base: '/vl/public',
    // base: '/test/public',
    base: '/'
});

router.beforeEach((to, from, next) => {
    return next()
});

export default router;