import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import ForgottenPassword from '../views/ForgottenPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'
  
    Vue.use(VueRouter)
    const routes = [
      {
        path: '/',
        name: 'Home',
        component: Home
***REMOVED***,
      {
        path: '/register',
        name: 'Register',
        component: Register
***REMOVED***,
      {
        path: '/login',
        name: 'Login',
        component: Login
***REMOVED***,
    {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgottenPassword
    },
    {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword
    }
    ]
    const router = new VueRouter({
      mode: 'history',
      base: process.env.BASE_URL,
      routes
***REMOVED***
    export default router
