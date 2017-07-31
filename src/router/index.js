import Vue from 'vue'
import Router from 'vue-router'

import VApiDemo from '../demos/apiDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VApiDemo',
      component: VApiDemo
    }
  ]
})
