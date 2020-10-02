import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/views/HomePage.vue'
import WelcomeTo from '@/components/views/WelcomeTo.vue'
import PlayingCards from '@/components/views/PlayingCards.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/welcomeTo',
            component: WelcomeTo
        },
        {
            path: '/playing-cards',
            component: PlayingCards
        },
    ]
})