<template>
  <div class="my-menu-nav">
    <div class="home" @click="$router.push('/')">现世通行</div>
    <div style="flex-grow: 1"></div>
    <div class="menu-item" @click="selectMenu('game')">游戏</div>
    <div class="menu-item" @click="selectMenu('blog')">博客</div>
    <div class="menu-item" @click="selectMenu('work')">作品</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
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
      else if(id == "work") {
        this.$router.push({path: '/work'});
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-menu-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: .6rem;
  padding: 0rem .3rem;
  background: black;
  display: flex;
  align-items: center;
  font-family: "微软雅黑", sans-serif;
  .home {
    font-size: .25rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
  .menu-item {
    margin-left: .1rem;
    border: 1px solid white;
    padding: .05rem .15rem;
    border-radius: 1rem;
    cursor: pointer;
    &:hover {

      opacity: 0.9;
    }
  }
}
</style>
