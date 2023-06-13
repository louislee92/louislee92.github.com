import Vue from 'vue'
import $api from '../../api/inter'
import $router from "../../router";
import {Message} from "element-ui";

// 用户相关状态
// initial state
const state = () => ({
  theme: 'light',
  curUser: {
    id: '123456',
    name: '张三',
    age: 23
  },
})

// getters
const getters = {
  // 用户是否登录
  isLogin: (state) => {
    return
  },
  // 获取当前用户ID
  curUserId: (state, getters, rootState, rootGetters) => {
    return state.curUser ? state.curUser.id : undefined
  },
  // 比对userId是否是当前用户id
  isCurUserId: (state, getters, rootState, rootGetters) => {
    return (userId) => {
      return userId == getters.curUserId;
    }
  },
  // 根据userId获取当前主题
  getCurThemeByUserId: (state, getters, rootState, rootGetters) => {
    return (userId) => {
      if(getters.isCurUserId(userId)) return state.curTheme;
      else return '';
    }
  }
}

// actions，异步操作，通过mutation进行更新数据
const actions = {
  //context:{
  //         state,   等同于store.$state，若在模块中则为局部状态
  //         rootState,   等同于store.$state,只存在模块中
  //         commit,   等同于store.$commit
  //         dispatch,   等同于store.$dispatch
  //         getters   等同于store.$getters
  // }
  // 获取用户信息
  async getCurUser ({ state, commit }) {

  },

}

// mutations，定义更新数据方法，同步操作
//
const mutations = {
  SET_CUR_USER (state, curUser) {
    Vue.set(state, 'curUser', curUser)
  },
  TOGGLE_THEME (state, test) {
    state.theme = state.theme == 'light' ? 'dark' : 'light'
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
