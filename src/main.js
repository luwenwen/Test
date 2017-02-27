// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
/*import Vuex from 'vuex'*/
import apiConfig from './config-api'
import tool from './libs/tool'
import { AlertPlugin } from 'vux'
import "./script/directive"

tool(Vue);
Vue.use(AlertPlugin)
/*Vue.use(Vuex)*/
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.apiConfig = apiConfig;
Vue.__Developing = true; //是否开发中，如果否，则发布时强制卸载mock
Vue.__Basepath = "http://localhost:3002/";
Vue.__HttpMethod = "JSONP";

Vue.http.options.emulateJSON = true;

var router = require("./config.js")(VueRouter);

/* eslint-disable no-new */

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
