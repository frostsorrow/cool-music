import Vue from 'vue'
import Router from 'vue-router'
import Rank from 'page/rank/rank'
import Recommend from 'page/recommend/recommend'
import Singer from 'page/singer/singer'
import Search from 'page/search/search'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/',
      name: 'singer',
      component: Singer
    },
    {
      path: '/',
      name: 'search',
      component: Search
    }
  ]
})
