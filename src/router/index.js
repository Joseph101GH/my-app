// src/router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePlace from '@/views/HomePlace'
import SideNavbar from '@/components/SideNavBar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePlace',
    component: HomePlace
  },
  {
    path: '/about',
    name: 'About',
    component: SideNavbar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router