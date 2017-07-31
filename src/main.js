// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 定义好store模块之后一定要记得在main.js主入口文件中引入一下！然后在下面的vue实例中注册
import store from './store/index'
// 引入本地存储
import localStore from 'store'
//引入axios
import axios from 'axios'

Vue.config.productionTip = false

//vue原型下引入本地存储
Vue.prototype.$localStore=localStore;
//vue原型下引入axios
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store:store,
    template: '<App/>',
    components: { App }
})
