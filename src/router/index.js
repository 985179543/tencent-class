import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import classify from '@/pages/classify/classify'
import classlist from '@/pages/classlist/classlist'
import mine from '@/pages/mine/mine'
import search from '@/pages/search/search'
import addNav from '@/pages/addNav'
import Course from '@/pages/course/course'
import Info from '@/pages/course/info'
import Directory from '@/pages/course/directory'
import Related from '@/pages/course/related'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/classlist',
      component: classlist
    },
    {
      path: '/mine',
      component: mine
    },
    {
      name: 'search',
      path: '/search',
      component: search
    },
    {
      name: 'addNav',
      path: '/addnav',
      component: addNav
    },
    {
      name: 'course',
      path: '/course',
      component: Course,
      children: [
        {
          path: 'Info',
          component: Info
        },
        {
          path: 'directory',
          component: Directory
        },
        {
          path: 'related',
          component: Related
        }
      ]
    }
  ]
})
