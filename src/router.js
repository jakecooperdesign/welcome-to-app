import Vue from 'vue'
import Router from 'vue-router'
import WelcomeTo from '@/views/WelcomeTo.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: WelcomeTo
        },
    ]
})