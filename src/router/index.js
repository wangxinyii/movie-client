import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    // name: 'layout',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('@/views/index/index.vue')
      },
      {
        path: '/movie',
        name: 'movie',
        component: () => import('@/views/movie/index.vue')
      },
      {
        path: '/selectCinema',
        name: 'selectCinema',
        component: () => import('@/views/cinema/index.vue')
      },
      {
        path: '/movieDetail',
        name: 'movieDetail',
        component: () => import('@/views/movieDetail/index.vue')
      },
      {
        path: '/selectSeat',
        name: 'selectSeat',
        component: () => import('@/views/cinemaDetail/index.vue')
      },
      {
        path: '/faceLogin',
        name: 'faceLogin',
        component: () => import('@/views/faceLogin/index.vue')
      },
      {
        path: '/buySeat',
        name: 'buySeat',
        component: () => import('@/views/buySeat/index.vue')
      },
      {
        path: '/pay',
        name: 'pay',
        component: () => import('@/views/pay/index.vue')
      },
      {
        path: '/paySuccess',
        name: 'paySuccess',
        component: () => import('@/views/paySuccess/index.vue')
      },
      {
        path: '/person',
        name: 'person',
        component: () => import('@/views/person/index.vue'),
        children: [
          {
            path: '/myOrder',
            name: 'myOrder',
            component: () => import('@/views/person/myOrder/index.vue')
          },
          {
            path: '/myInfo',
            name: 'myInfo',
            component: () => import('@/views/person/myInfo/index.vue')
          },
          {
            path: '/updatePassword',
            name: 'updatePassword',
            component: () => import('@/views/person/updatePassword/index.vue')
          }
        ]
      }
    ]
  },
  /* {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue')
  } */
]

const router = new VueRouter({
  routes
})

export default router
