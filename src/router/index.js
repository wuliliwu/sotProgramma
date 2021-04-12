import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "views/stoHme/Home";
import sotBlog from "views/sotBlog/sotBlog";
import sotSocial from "views/sotsocial/sotSocial";
import blogContent from "views/blogcontent/blogContent";
import sotScan from "views/sotscan/sotScan";
import deal from "views/deal/deal";
// import exChange from "views/exchange/exChange";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'sotBlog',
    component: sotBlog
  },
  {
    path: '/scoial',
    name: 'sotSocial',
    component: sotSocial
  },
  //
  // {
  //   path: '/',
  //   name: 'blogContent',
  //   component: blogContent
  // },


  {
    path: '/scan',
    name: 'sotScan',
    component: sotScan
  },

  //
  {
    path: '/deal',
    name: 'deal',
    component: deal
  },

  // {
  //   path: '/',
  //   name: 'exChange',
  //   component: exChange
  // },
  // sotScan







]

const router = new VueRouter({
  routes
})

export default router
