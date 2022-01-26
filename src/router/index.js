import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import ForgottenPassword from '../views/ForgottenPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'
import Download from "../views/Download";
  
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgottenPassword
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/download',
    name: 'Download',
    component: Download
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page

  // list public pages
  const publicPages = ['/','/home', '/login', '/register','/forgotpassword', '/resetpassword', '/featured-section'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('userData');

  if (authRequired && !loggedIn) {
    return next('/');
  }
  next();
});

