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
        <div class="card">
          <div class="box">
            <div class="img-box">
              <img src="https://img.paulzzh.tech/touhou/random?proxy=1&random=123" alt="">
            </div>
            <div class="con-box">
              <div>
                <h2>游戏</h2>
                <p>同名桌游《现世通行》，毛线类桌游。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="box">
            <div class="img-box">
              <img src="https://img.paulzzh.tech/touhou/random?proxy=1&random=456" alt="">
            </div>
            <div class="con-box">
              <div>
                <h2>作品</h2>
                <p>1. 篆刻闲章</p>
                <p>2. 题字折扇</p>
                <p>3. 钥匙扣</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="box">
            <div class="img-box">
              <img src="https://img.paulzzh.tech/touhou/random?proxy=1&random=789" alt="">
            </div>
            <div class="con-box">
              <div @click="clickOnItem(3)">
                <h2>博客</h2>
                <p>社团相关资讯，以及社团状态</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="line1">不科学现象文化研究讨论会</div>
      <div class="line1">FROM 2021</div>
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
    }
  },
  mounted() {
    // this.randomPhotoObj();
    particles.func();
  },
  computed: {
  },
  methods: {
    clickOnItem(idx) {
      if(idx == 3) {
        window.open("http://blog.xstx.fun")
      }
    }
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
</style>
