<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  created() {
    // this.$store.dispatch("user/getCurUser").catch(e => {
    //   console.log("app 获取用户信息出错：" , e)
    //   this.$router.push({path: '/'})
    // })
  }
}
</script>

