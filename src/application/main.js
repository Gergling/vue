import Vue from 'vue'
import VueRouter from 'vue-router'

import Routed from './router.vue'
//import stuff from './router.js'

Vue.use(VueRouter)

new Vue({
    router: new VueRouter({
        routes: [
            { path: '/foo', component: { template: '<div>foo</div>' } },
            { path: '/bar', component: Routed }
        ]
    }),
    el: '[data-vue]',
    data: {
        currentRoute: window.location.hash.split('#')[1],
        message: 'Header'
    }
});
