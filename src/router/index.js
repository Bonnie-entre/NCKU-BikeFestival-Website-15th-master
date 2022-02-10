import Vue from 'vue'
import Router from 'vue-router'
// import Intro from '@/components/Intro'
// import Parent from '@/components/Parent'
import Main from '@/components/Main'
import Department from '@/components/Department'
import Activity from '@/components/Activity'
import Columns from '@/components/Columns'
import SignUp from '@/components/SignUp'
import About from '@/components/About'
import Sponsor from '@/components/Sponsor'
// import Activity_voice from '@/components/Activity_voice'
// import OnlineSource from '@/components/OnlineSource'
import Live from '@/components/Live'
import Dept_design from '@/components/Dept_design'
import Dept_social from '@/components/Dept_social'
import Dept_undeclear from '@/components/Dept_undeclear'
import Dept_engineer from '@/components/Dept_engineer'
import Dept_science from '@/components/Dept_science'
import Dept_humanity from '@/components/Dept_humanity'
import Dept_medicine from '@/components/Dept_medicine'
import Dept_management from '@/components/Dept_management'
import Dept_computer from '@/components/Dept_computer'
import Dept_biological from '@/components/Dept_biological'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: { transitionName: 'slide' }
    },
    // {
    //   path: '/parent',
    //   name: 'Parent',
    //   component: Parent,
    //   meta: { transitionName: 'slide' }
    // },
    // {
    //   path: '/news',
    //   name: 'News',
    //   component: News,
    //   meta: { transitionName: 'slide' }
    // },
    {
      path: '/department',
      name: 'Department',
      component: Department,
      meta: { transitionName: 'slide' }
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
    // {
    //   path: '/activity_voice',
    //   name: 'Activity_voice',
    //   component: Activity_voice
    // },
    {
      path: '/column',
      name: 'Columns',
      component: Columns
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/sponsor',
      name: 'Sponsor',
      component: Sponsor
    },
    // {
    //   path: '/online',
    //   name: 'OnlineSource',
    //   component: OnlineSource
    // },
    // {
    //   path: '/live',
    //   name: 'Live',
    //   component: Live
    // }
    {
      path: '/Dept_design',
      name: 'Dept_design',
      component: Dept_design
    },
    {
      path: '/Dept_social',
      name: 'Dept_social',
      component: Dept_social
    },
    {
      path: '/Dept_undeclear',
      name: 'Dept_undeclear',
      component: Dept_undeclear
    },
    {
      path: '/Dept_engineer',
      name: 'Dept_engineer',
      component: Dept_engineer
    },
    {
      path: '/Dept_science',
      name: 'Dept_science',
      component: Dept_science
    },
    {
      path: '/Dept_humanity',
      name: 'Dept_humanity',
      component: Dept_humanity
    },
    {
      path: '/Dept_medicine',
      name: 'Dept_medicine',
      component: Dept_medicine
    },
    {
      path: '/Dept_management',
      name: 'Dept_management',
      component: Dept_management
    },
    {
      path: '/Dept_computer',
      name: 'Dept_computer',
      component: Dept_computer
    },
    {
      path: '/Dept_biological',
      name: 'Dept_biological',
      component: Dept_biological
    }
  ]
})
