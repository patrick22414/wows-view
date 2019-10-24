import Vue from 'vue'
import VueRouter from 'vue-router'
import SelectingView from '../views/SelectingView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: "selecting",
        component: SelectingView,
    },
    {
        path: '/building',
        name: 'building',
        component: () => import(/* webpackChunkName: "building" */ '../views/BuildingView.vue')
    },
    {
        path: '/comparing',
        name: 'comparing',
        component: () => import(/* webpackChunkName: "comparing" */ '../views/ComparingView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router
