import Vue from 'vue'
import App from './App.vue'

import VueRouter from  'vue-router'

import Routes from './routes'

export const bus = new Vue();

Vue.use(VueRouter);
//custom directives
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color="#"+Math.random().toString().slice(2,8);
  }
});


Vue.directive('rain',{
  bind(el,binding,vnode){
    el.style.backgroundColor="#"+Math.random().toString().slice(2,8);
  }
});
//custom
const router=new VueRouter({
routes:Routes,
mode:'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})


