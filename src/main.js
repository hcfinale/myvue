// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import $ from 'jquery'
import Vue from 'vue'
import router from './router'
import Vuex from 'Vuex'
import Layout from './components/layout'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuex)
const store = new Vuex.Store({
	state :{
		totalPrice : 100,
		count : 0
	},
	inElement(state,price){
		state.totalPrice += price
	},
	deElement(state,price){
		state.totalPrice -= price
	},
	mutations:{
		increment(state,i=2){
			state.count += i;
		},
		decrease(state){
			state.count--;
		}
	}
})


new Vue({
el: '#app',
  router:router,
  store:store,
  components: { Layout },
  template: '<Layout/>'
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next()
})