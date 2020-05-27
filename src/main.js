import Vue from 'vue'
import App from './App.vue'
// 路由
import router from './router'
// css库
import './assets/style.css'
import './assets/animation.css'
import './assets/lib.css'

// 第三方专用
import VueLazyload from 'vue-lazyload' // 圖片嬾加載
import flexible from 'flexible.js' //手機自適應

flexible(960)

Vue.use(VueLazyload)
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')