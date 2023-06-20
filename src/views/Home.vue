<template>
  <div class="wrapper">
    <!-- 动态背景 -->
    <div class="back-flash"></div>
    <!-- 中部菜单 -->
    <div class="center">
      <div class="title">现世通行</div>
      <div class="line3">GO THROUGH THE LAND</div>
      <div class="line1">东方Project同人社团</div>
      <div class="center-menu">
        <div class="card" v-for="(item, index) in menus" @click="clickOnItem(item.id)">
          <div class="box">
            <div class="img-box">
              <img :src="`https://img.paulzzh.tech/touhou/random?proxy=1&random=${item.id}`" alt="">
            </div>
            <div class="con-box">
              <div>
                <h2>{{item.title}}</h2>
                <p>{{item.detail}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="line1">不科学现象文化研究讨论会</div>
      <div class="line1" style="padding-bottom: .2rem;">FROM 2021</div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState, mapMutations} from "vuex";
import particles from "../libs/particle-lines/particles";
export default {
  name: 'Home',
  data() {
    return {
      menus: [
        {id: 'game', title: '游戏', detail: '社团同名桌游：现世通行'},
        {id: 'work', title: '作品', detail: '篆刻闲章、手写折扇、钥匙扣等周边'},
        {id: 'blog', title: '博客', detail: '社团相关资讯和社团动态'},
      ]
    }
  },
  mounted() {
    // this.randomPhotoObj();
    particles.func();
  },
  computed: {
  },
  methods: {
    clickOnItem(id) {
      if(id == 'blog') {
        window.location.href = "http://blog.xstx.fun"
      }
      else if(id == 'game') {
        this.$router.push({path: '/game'});
      }
    }
  },
  destroyed() {
    particles.remove();
  }
}
</script>


<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;

  .back-flash {
    height: 150%;
    width: 150%;
    position: fixed;
    z-index: -1;
    top: -20%;
    left: -20%;
    transform: rotate(10deg);
    background: -webkit-linear-gradient(left,
      rgba(255,255,255,0)0, rgba(255,255,255,0.05)50%,
      rgba(255,255,255,0)100%) no-repeat;
    background-size: 10% 100%;

    animation: linear infinite flash 5s;
  }
  .center {
    //height: 100%;
    min-height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > div {
      text-align: center;
      transition: .4s all;
    }
  }
  .center-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .card{
      /* 相对定位 */
      position: relative;
      width: 320px;
      height: 320px;
      margin: 20px;
      /* 开启3D效果 */
      transform-style: preserve-3d;
      perspective: 1000px;
    }
    .card .box{
      /* 绝对定位 */
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      /* 设置过渡 */
      transition: 1s ease;
    }
    .card .box .img-box{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .card .box .img-box img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .card .box .con-box{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #333;
      display: flex;
      justify-content: center;
      align-items: center;
      /* 隐藏旋转div元素的背面 */
      backface-visibility: hidden;
      transform-style: preserve-3d;
      /* 默认沿Y轴旋转180度 */
      transform: rotateY(180deg);
    }
    .card .box .con-box div{
      transform-style: preserve-3d;
      padding: 20px;
      color: #fff;
      /* 渐变背景 */
      background: linear-gradient(30deg,#514a9d,#24c6dc);
      /* 默认沿Z轴偏移100px */
      transform: translateZ(100px);
      box-shadow: 0 0 .3rem #514a9d;
      border-radius: .1rem;
      animation: linear infinite flash2 5s;
      transition: 2s all;
      cursor: pointer;
      &:hover {
        border-radius: 2rem;
      }
    }
    .card .box .con-box div h2{
      font-size: 20px;
      letter-spacing: 1px;
    }
    .card .box .con-box div p{
      margin-top: 5px;
      font-size: 15px;
      text-align: justify;
    }
    .card:hover .box{
      /* 鼠标移入，盒子旋转180度 */
      transform: rotateY(180deg);
    }
  }
  .line1 {
    font-size: .10rem;
    opacity: .8;
    font-weight: 100;
  }
  .title {
    font-size: .5rem;
    font-weight: bold;
    padding-top: .2rem;
    &:hover {
      //color: red;
      text-shadow: 0 0 .05rem white;
    }
  }

  .line3 {
    font-size: .18rem;
    opacity: .8;
    font-weight: 100;
  }
}

@keyframes flash {
  0% { background-position: 0 0, 0 0; opacity: 1; }
  99% { background-position: 100% 0, 0 0; opacity: 1; }
  100% { background-position: 100% 0, 0 0; opacity: 0; }
}

@keyframes flash2 {
  0% {box-shadow: 0 0 .3rem #514a9d;}
  50% {box-shadow: 0 0 .3rem #24c6dc;}
  100% {box-shadow: 0 0 .3rem #514a9d;}
}
</style>
