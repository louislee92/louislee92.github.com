import service from './service'

export default {
  // 随机获取一张图片接口
  randomImage() { return service.get("/v2/");},
}
