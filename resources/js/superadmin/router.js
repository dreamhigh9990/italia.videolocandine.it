import VueRouter from 'vue-router'
import Layout from './views/Layout.vue'

const users = () => import(/* webpackChunkName:"users" */'./views/users/index.vue').then(m => m.default || m)
const userEdit = () => import(/* webpackChunkName:"userEdit" */'./views/users/edit-user.vue').then(m => m.default || m)
const newShopManager = () => import(/* webpackChunkName:"newShopManager" */'./views/users/new-shopmanager.vue').then(m => m.default || m)

const changePassword = () => import(/* webpackChunkName:"changePassword" */'./views/profile/index.vue').then(m => m.default || m)

const routes = [
    {
        path: '/super-admin-141592',
        component: Layout,
        children :[
            {
                name: 'users',
                path: '/super-admin-141592/users',
                component: users,
            },
            {
                name: 'edit-user',
                path: '/super-admin-141592/edit-user/:id',
                component: userEdit,
            },
            {
                name: 'change-password',
                path: '/super-admin-141592/password-change',
                component: changePassword,
            },
            {
                name: 'new-shopmanager',
                path: '/super-admin-141592/new-shopmanager',
                component: newShopManager,
            },
        ]
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
    base: '/vl/public',
    base: '/'
});

router.beforeEach((to, from, next) => {
    return next()
});

export default router;