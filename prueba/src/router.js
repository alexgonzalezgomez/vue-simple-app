import Vue from 'vue'
import Router from 'vue-router'
// import MainView from '@/views/Main.vue'
import Base from '@/layout/Base.vue'

import Home from '@/components/Home.vue'
import ProductList from '@/components/product-list/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Base,
      meta: {
        current: Home
      }
    },
    {
      path: '/hhhh',
      name: 'hhhh',
      component: Base,
      meta: {
        current: ProductList
      }
    },
    // { path: '*', component: NotFoundComponent } para que no haya 404
  ]
})