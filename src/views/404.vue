<!--
 * @Author: your name
 * @Date: 2021-10-22 15:11:38
 * @LastEditTime: 2021-10-22 15:28:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \newback\src\views\404.vue
-->
<template>
  <div class="notfound">
    <img src="../assets/img/刀.jpeg" alt="" />
    <h2>页面找不到了,<span @click="goHome">点击返回首页</span></h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scope>
div.notfound {
  /* width: 100%; */
  height: 100vh;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  h2 {
    font-size: 30px;
    color: white;
    position: absolute;
    top: 40%;
    left: calc(20% - 100px);
    span {
      color: cyan;
      cursor: pointer;
    }
  }
}
</style>