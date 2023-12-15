<template>
  <my-dialog ref="MyDialogRef">
    <div class="view-work">
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
  </my-dialog>
</template>

<script>
import MyDialog from "./common/MyDialog";

export default {
  components: {MyDialog},
  data() {
    return {
      works: [
        {name: '《现世通行》桌游', desc: '毛线传教聚会小游戏',
          category: "桌游", shop: {name: '淘宝链接', url: "https://item.taobao.com/item.htm?id=643184451728"},
          image: "http://backup.xstx.fun:280/download/%E3%80%90%E5%B9%BF%E5%91%8A%E5%AE%A3%E5%8F%91%E3%80%91%E5%9B%A7%E5%BA%97%E7%8E%B0%E4%B8%96%E9%80%9A%E8%A1%8C%E6%A1%8C%E6%B8%B8%E5%AE%A3%E5%8F%91.jpg"},
        {name: '《现世通行》简装版', desc: '方便携带，价格实惠',
          category: "桌游", shop: {name: '淘宝链接', url: "https://item.taobao.com/item.htm?id=643184451728"},
          image: require("../assets/img/xstx-pkb.png")},
        {name: '篆刻', desc: '纯手工篆刻，以有形的文字传达无形的意境，为世间所有的美好留下独一无二的印记',
          category: "篆刻", shop: {name: '定制连接', url: "https://item.taobao.com/item.htm?spm=a1z10.1-c-s.w4004-23620662481.6.381323f4BOlwbm&id=735016407903"},
          image: require("../assets/img/zk1.jpg")},
      ]
    }
  },
  methods: {
    show() {
      this.$refs.MyDialogRef.show();
    },
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
.view-work {
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
    }
    .desc {
      font-size: 80%;
    }

    .category {
      position: absolute;
      top: 0rem; left: 0rem;
      padding: .05rem .1rem;
      padding-right: .2rem;
      background: rgba(255,255,255,0.2);
      background: black;
      border-bottom-right-radius: 1rem;
      //font-size: 80%;
      font-family: $--font-family-honglei;
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
