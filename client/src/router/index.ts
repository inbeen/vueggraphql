import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/index.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/home.vue'),
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('@/views/user.vue'),
          meta: {
            requireAuth: true,
          }
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/about.vue'),
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue'),
    }
  ],
});
