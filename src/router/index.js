import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Home.vue'
import Sector from '../Sector.vue'
import Sectorla from '../Sectorla.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/sector',
            name: 'sector',
            component: Sector
        },
        {
            path: '/sector-la',
            name: 'sectorla',
            component: Sectorla
        }
    ]
})