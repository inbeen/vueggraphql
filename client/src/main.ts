import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
// vue apollo
import VueApollo from 'vue-apollo';
import apolloProvider from './apollo';

Vue.config.productionTip = false;

// install plugins
Vue.use(VueApollo);

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     const token = localStorage.getItem('apollo_token');
//     if (!token) {
//       next('/login');
//       return;
//     }
//   }
//   next();
// });

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
