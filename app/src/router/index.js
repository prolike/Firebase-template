import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/views/Index')

Vue.use(Router)

var router = new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes:
    [
      {
        path: '/',
        name: 'Index',
        component: Index,
      }
  ]
})

export default router;
