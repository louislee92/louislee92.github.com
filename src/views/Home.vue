<template>
  <div class="wrapper">
    <!-- 动态背景 -->
<!--    <div class="back-flash"></div>-->
    <!-- 中部菜单 -->
    <div class="center">
      <div class="title">现世通行</div>
      <div class="line3">GO THROUGH THE LAND</div>
      <div class="line1">东方Project同人社团</div>
      <div class="menu">
        <span class="menu-item" @click="selectMenu('game')">游戏</span>
        <span class="menu-item" @click="selectMenu('blog')">博客</span>
        <span class="menu-item" @click="selectMenu('work')">作品</span>
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
    }
  },
  mounted() {
    // this.randomPhotoObj();
    particles.func();
  },
  computed: {
  },
  methods: {
    selectMenu(id) {
      if(id == 'blog') {
        window.location.href = "http://blog.xstx.fun"
      }
      else if(id == 'game') {
        // this.$router.push({path: '/game'});
        window.location.href = "http://game.xstx.fun"
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
  .menu {
    display: flex;
    margin-top: .2rem;
    margin-bottom: .2rem;

    .menu-item:not(:last-child) {margin-right: .1rem;}
    .menu-item {
      border-radius: 0;
      padding: .05rem .1rem;
      font-family: "鸿雷板书简体-测试版", "宋体", "微软雅黑", inherit;
      font-size: .5rem;
      background: rgba(255,255,255,0.2);
      color: white;
      transition: all .3s;
      cursor: pointer;
      &:hover {
        background: rgba(255,255,255,0.8);
        color: black;
        border-radius: .5rem;
      }
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
