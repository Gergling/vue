import Index from './view/index.vue'
import Sub1 from './view/sub1.vue'
import Sub2 from './view/sub2.vue'
import Sub3 from './view/sub3.vue'

module.exports = {
    path: '/module3',
    component: Index,
    children: [
        {
            path: 'sub1',
            component: Sub1
        },
        {
            path: 'sub2',
            component: Sub2
        },
        {
            path: 'sub3',
            component: Sub3
        }
    ]
}
