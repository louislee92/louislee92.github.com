import axios from 'axios'
import Qs from 'qs'
import { Message } from 'element-ui';

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,    // 超时
});
// 添加响应拦截器
instance.interceptors.response.use(res=>{
  return res.data;
},err=>{
  if (err && err.message && err.message.indexOf('timeout') > -1) {
    return Promise.reject("请求超时");
  }
  // 响应拦失败拦截
  return Promise.reject(err)
})

const get = (url, data) => {
  return instance({
    method: "get",
    url: url,
    params: data,
    headers: {'token': localStorage.token},
    paramsSerializer: function(params) {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
    },
  })
}


const post = (url, data) => {
  return instance({
    method: "post",
    url: url,
    data: data || {},
    headers: {'token': localStorage.token},
  })
}

export default {get, post}


