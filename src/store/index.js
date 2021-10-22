/*
 * @Author: your name
 * @Date: 2021-09-04 21:10:38
 * @LastEditTime: 2021-09-04 23:37:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \traning\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login:''
  },
  mutations: {
    setLogin(state,data) {
      sessionStorage.setItem('login', data)
      state.login =data
    }
  },
  actions: {
  },
  modules: {
  }
})
