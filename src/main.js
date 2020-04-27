// console.log('ok')
// 导图vue
import Vue from '../node_modules/vue/dist/vue.js'
import App from './App.vue'

import '../node_modules/mint-ui/lib/style.min.css'
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 导入路由模块

import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 导入mui包
import '../lib/mui/css/mui.min.css'
import '../lib/mui/fonts/mui.ttf'
import '../lib/mui/css/icons-extra.css'
import '../lib/mui/fonts/mui-icons-extra.ttf'

// 导入路由模块
import router from './router.js'
// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

let vm = new Vue({
    el: '#app',
    data: {

    },
    methods: {},
    router:router,
    render: c => c(App),

})
