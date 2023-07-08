<template>
  <div class="work-wrapper">
    <my-menu-nav></my-menu-nav>
    <div v-viewer ref="viewer" class="work-list">
      <div class="work-item" v-for="(item, index) in works" @click="workOnClick(item, index)">
        <div class="layer">
          <img :src="item.image" :alt="item.name"/>
        </div>
        <div class="layer text">
          <div class="name">{{item.name}}</div>
          <div class="desc">{{item.desc}}</div>
        </div>
        <div v-if="item.category" class="category">{{item.category}}</div>
        <div v-show="item.shop" class="shop">
          <el-button size="mini" type="primary"
                     v-if="item.shop"
                     @click.stop="goShop(item.shop)">{{item.shop.name}}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyMenuNav from './common/MyMenuNav'

export default {
  components: {MyMenuNav},
  data() {
    return {
      works: [
        {name: '《现世通行》PVC版', desc: 'PVC材质的卡牌，铁盒外包装',
          category: "桌游", shop: {name: '囧店链接', url: "https://item.taobao.com/item.htm?id=651108429543"},
          image: require("../assets/img/xstx-thb.png")},
        {name: '《现世通行》精装版', desc: '布纹磨砂铜版纸，精品桌游质感',
          category: "桌游",
          image: require("../assets/img/xstx-jzb.png")},
        {name: '《现世通行》简装版', desc: '扑克蓝芯纸材质，简装方便，价格实惠',
          category: "桌游", shop: {name: '囧店链接', url: "https://item.taobao.com/item.htm?id=651108429543"},
          image: require("../assets/img/xstx-pkb.png")},
      ]
    }
  },
  methods: {
    workOnClick(item, index) {
      this.$refs.viewer.$viewer.show();
      this.$nextTick(()=>{this.$refs.viewer.$viewer.update().view(index)})
    },
    goShop(shop) {
      window.open(shop.url)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/const";
.work-wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-top: .6rem;
  position: relative;

  .work-list {
    position: absolute;
    left: 0; right: 0;
    padding: .3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .work-item {
    width: 3rem;
    height: 3rem;
    position: relative;
    cursor: pointer;
    margin-bottom: .1rem;
    margin-right: .1rem;
    overflow: hidden;

    .layer {
      position: absolute;
      top: 0; right: 0; left: 0; bottom: 0;
      overflow: hidden;
      img {
        height: 100%;
        position: relative;
        left: 50%;
        transform: translateX(-50%) scale(1);
        transition: all .2s;
      }
    }
    &:hover .layer img {
      transform: translateX(-50%) scale(1.2);
    }
    .layer.text {
      background-color: rgba(0,0,0,0.3);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: .2rem;
    }
    .name {
      font-weight: bold;
      margin-bottom: .1rem;
      font-family: $--font-family-honglei;
    }
    .desc {
      font-size: 80%;
      font-family: $--font-family-honglei;
    }

    .category {
      position: absolute;
      top: 0rem; left: 0rem;
      padding: .05rem .1rem;
      padding-right: .2rem;
      background: rgba(255,255,255,0.2);
      border-bottom-right-radius: 1rem;
      font-size: 80%;
    }
    .shop {
      position: absolute;
      bottom: -.4rem; left: 0; right: 0;
      height: .4rem;
      display: flex; align-items: center;justify-content: center;
      transition: all .2s;
    }
    &:hover .shop {bottom: 0;}

  }
}
</style>
