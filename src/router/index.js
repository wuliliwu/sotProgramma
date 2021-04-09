import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "views/stoHme/Home";
import sotBlog from "views/sotBlog/sotBlog";
import sotSocial from "views/sotsocial/sotSocial";
const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/',
  //   name: 'sotBlog',
  //   component: sotBlog
  // },
  {
    path: '/',
    name: 'sotSocial',
    component: sotSocial
  },





]

const router = new VueRouter({
  routes
})

export default router
