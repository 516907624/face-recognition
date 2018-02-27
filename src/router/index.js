import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import info from '@/components/info'
import DetailsPage from '@/components/Detailspage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/info/:action',
      name: 'info',
      component: info
    },
    {
      path: '/detail/:action',
      name: 'DetailsPage',
      component: DetailsPage
    }
  ]
})
