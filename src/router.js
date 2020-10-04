import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import WelcomeTo from '@/views/WelcomeTo.vue'
import PlayingCards from '@/views/PlayingCards.vue'
import UploadDeck from '@/views/UploadDeck.vue'

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
        {
            path: '/upload-deck',
            component: UploadDeck
        },
    ]
})