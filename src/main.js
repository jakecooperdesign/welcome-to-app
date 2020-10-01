import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import VuexUndoRedo from 'vuex-undo-redo';
import store from './store.js';

import './assets/css/index.css';

Vue.use(Vuex)
Vue.use(VuexUndoRedo)

Vue.config.productionTip = false

Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
