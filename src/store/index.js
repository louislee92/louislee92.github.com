import Vue from 'vue'
import Vuex from 'vuex'
import user from "./modules/user"
import room from './modules/room'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from "secure-ls"

Vue.use(Vuex)
const state = () => ({})
const getters = {}
const mutations = {}
const actions = {}

var ls = new SecureLS({
  encodingType: "aes",    //加密类型
  isCompression: false,   //是否压缩
  encryptionSecret: "encryption",   //PBKDF2值  加密秘密
});

let storageKey = 'vuex'
localStorage.removeItem(storageKey);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user, room
  },
  plugins: [
    createPersistedState({
      // key: SystemConfig.storageKey,
      // storage: window.localStorage,
      // 以下使用ls加密
      key: storageKey,
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      }
    })

  ]
})
