import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home";
import Work from '../views/Work'

Vue.use(Router)

// 解决重复跳转路由控制台抛异常问题
const originPush = Router.prototype.push
Router.prototype.push = function (location) {
  return originPush.call(this, location).catch(err => err)
}

// 初始化路由
const router = new Router({
  // mode: 'history',
  base: '/',
  routes: [
      // 首页
    {path: '/', name: "Home", component: Home},
    // 游戏
    {path: '/work', name: "Work", component: Work},
  ]
});

export default router
