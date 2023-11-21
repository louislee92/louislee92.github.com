<template>
  <my-dialog ref="MyDialogRef">
    <div class="view-game">
      <h1>现世通行OL安卓APP免费下载</h1>
      <div>
        <img class="download-img download" title="点击下载APP"
             @click="download"
             src="http://backup.xstx.fun:280/download/%E3%80%90%E5%B9%BF%E5%91%8A%E5%AE%A3%E5%8F%91%E3%80%91xstx-app-logo.png">
        <img class="download-img" src="http://backup.xstx.fun:280/download/%E3%80%90%E6%B8%B8%E6%88%8F%E5%AE%89%E8%A3%85%E3%80%91%E7%8E%B0%E4%B8%96%E9%80%9A%E8%A1%8COL0.6%E5%AE%89%E5%8D%93%E5%AE%89%E8%A3%85%E5%8C%85.png">
      </div>
      <h3>进群（819333537）约战</h3>
    </div>
  </my-dialog>
</template>

<script>
import MyDialog from "./common/MyDialog";
export default {
  name: 'Game',
  components: {MyDialog},
  data() {
    return {
      centerDialogVisible: false,
    }
  },
  methods: {
    show() {
      this.$refs.MyDialogRef.show();
    },
    download() {
      window.open("http://" + window.location.host + "/AssetBundles/Android/gtl-0.6.0.apk");
    }
  }
}
</script>

<style lang="scss">
.view-game {
  width: 80%;
  height: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .download-img {
    width: 2rem; margin-top: .2rem; margin-bottom: .2rem;
    transition: all .2s;
    &.download {
      cursor: pointer;
      margin-right: .2rem;
      &:hover{
        filter: blur(.03rem);
      }
    }

  }
}
</style>
