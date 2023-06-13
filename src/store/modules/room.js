import Vue from 'vue'
import $api from '../../api/inter'
import {Message} from "element-ui";

// 房间
const state = () => ({
  count: 0,
  photoObj: null,
})

// getters
const getters = {
  // 获取图片地址
  curPhotoSrc: (state, getters, rootState, rootGetters) => {
    return state.photoObj == null ? 'NULL' : state.photoObj.url;
  },
}

// actions，异步操作，通过mutation进行更新数据
const actions = {
  // 随机获取图片
  async randomPhotoObj ({ state, commit }) {
    if(state.photoObj) commit('SET_PHOTO_OBJ', null)
    let res = await $api.randomImage();
    console.log("获取图片：", res)
    if(res.success && res.data && res.data.length > 0) {
      commit('SET_PHOTO_OBJ', res.data[0])
    } else {
      Message.error("请求接口出错");
    }
  },

}

// mutations，定义更新数据方法，同步操作
const mutations = {
  ADD_SEAT_COUNT (state, c) {
    state.count++;
  },
  DEL_SEAT_COUNT (state, c) {
    state.count--;
  },
  SET_PHOTO_OBJ (state, obj) {
    Vue.set(state, 'photoObj', obj)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
