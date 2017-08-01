import Vue from 'vue'
import Router from 'vue-router'

import VApiDemo from '../demos/apiDemo'
import VBetterScrollDemo from '../demos/betterScrollDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VApiDemo',
      component: VBetterScrollDemo
    }
  ]
})
