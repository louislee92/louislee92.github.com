<template>
  <div class="view-my-dialog" :class="{'active' : dialogVisible}">
    <i class="el-icon-close" @click="hide"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyDialog',
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    show() {
      this.dialogVisible = true;
    },
    hide() {
      this.dialogVisible = false;
    }
  }
}
</script>

<style lang="scss">
.view-my-dialog {
  position: absolute; top: 10%; left: -150%;
  width: 80%; height: 80%;
  transform: rotate(-45deg);
  transition: all .3s ease-in-out;
  border-radius: .05rem;
  backdrop-filter: blur(6px);

  &.active {
    left: 10%;
    transform: rotate(0deg);
  }


  .el-icon-close {
    position: absolute;
    right: 0; top: 0;
    color: inherit;
    font-size: .5rem;

    &:hover {color: red}
  }
}
</style>
