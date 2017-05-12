import Index from './view/index.vue'
import Sub1 from './view/sub1.vue'
import Sub2 from './view/sub2.vue'

module.exports = {
    path: '/module1',
    component: Index,
    children: [
        {
            path: '',
            component: {
            	template: '<div>Root.</div>'
            }
        },
        {
            path: 'sub1',
            component: Sub1
        },
        {
            path: 'sub2',
            component: Sub2
        }
    ]
}
