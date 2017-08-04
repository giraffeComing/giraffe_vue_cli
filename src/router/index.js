import Vue from 'vue'
import Router from 'vue-router'


import VApi from '../demos/apiDemo.vue'
import VSwiper from '../demos/swiperDemo.vue'
import VBetterScroll from '../demos/betterScrollDemo.vue'


import VIndex from '../views/index/index.vue'
import VError from '../views/404/404.vue'
import VDemo from '../views/allDemos/allDemos.vue'
import VExercise from '../views/exercise/exercise'

Vue.use(Router)

export default new Router({
  routes: [
      //路由重定向
      { path: '/', redirect: '/index'},
      //首页
      {
          path: '/index',
          component: VIndex,
          name: 'VIndex',
      },
      //练习
      {
          path: '/exercise',
          component: VExercise,
          name: 'VExercise',
      },
      // demo集合页
      {
          path: '/demos',
          component: VDemo,
          children: [
              { path: '/', redirect: 'api' },
              {
                  path: 'api',
                  component: VApi,
                  name: 'api'
              },
              {
                  path: 'betterScroll',
                  component: VBetterScroll,
                  name: 'betterScroll'
              },
              {
                  path: 'swiper',
                  component: VSwiper,
                  name: 'swiper'
              },
          ]
      },
      //404页面
      {
          path: '*',
          component: VError,
          name: 'Error'
      },
  ]
})
