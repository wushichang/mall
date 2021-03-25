import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = ()=> import('views/home/home')
const Category = ()=> import('views/category/category')
const About = ()=> import('views/about/about')
const Profile = ()=> import('views/profile/profile')
const Detail = ()=> import('views/detail/Detail')


const routes = [
  {path: '' , redirect: '/home'},
  {path: '/home', component: Home},
  {path: '/category', component: Category},
  {path: '/about', component: About},
  {path: '/profile', component: Profile},
  {path: '/detail/:iid', component: Detail}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
