// import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router';
import loginRegister from '../views/login-register.vue'
import register from '../components/register.vue'
import login from '../components/login.vue'
import index from '../views/index.vue'
import chat from '../views/chat.vue'
import userManagement from '../views/userManagement.vue'
import video from '../views/video.vue'
import data from '../views/data.vue'
import{userStore} from '@/utils/pinia'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/userManagement',
      name: 'userManagement',
      component: userManagement
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/data',
      name: 'data',
      component: data
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat,
      meta:{requiresAuth:true}
    },
    {
      path: '/login-register',
      name: 'login-register',
      component: loginRegister,
      children : [
        {
          path: 'register',
          name: 'register',
          component: register
        },
        {
          path: '/login-register',
          redirect: '/login-register/login'
        },
        {
          path: 'login',
          name: 'login',
          component: login
        }
      ]
    },
    
    
  ]
})

router.beforeEach((to, from, next) => {
  const pinia = userStore();
  to.matched.forEach((record) => {
    if (record.meta.requiresAuth) {
      if (pinia.getUser.token) {
        next();
      } else {
        alert('请先登录');
        next('/login-register');
      }
    } else {
      next();
    }
  })
})

export default router
