import Vue from 'vue'
import Router from 'vue-router'

import VApiDemo from '../demos/apiDemo'
import VSwiperDemo from '../demos/swiperDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VApiDemo',
      component: VSwiperDemo
    }
  ]
})
