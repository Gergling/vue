import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

new Vue({
    router: new VueRouter({
        routes: [
            'module1',
            'module2',
            'module3'
        ].map((moduleName) => require('../' + moduleName + '/routing'))
    }),
    el: '[data-vue]',
    data: {
        message: 'Header'
    }
});
