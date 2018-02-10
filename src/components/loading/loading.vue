<template>
    <div class="loading">
        <img class="loading-img" src="./img/loading3.gif" />
        <span class="loading-text">{{message}}</span>
    </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "系统正在玩命加载，请稍后……"
    }
  }
};
</script>
<style scoped>
.loading {
  width: 100%;
  height: 100%;
  cursor: wait;
  display: flex !important;
  position: absolute;
  top: 0px;
  left: 0px;
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column !important;
  -ms-flex-align: center !important;
  -ms-flex-pack: center !important;
  z-index: 999999999999;
}
.loading-img {
  opacity: 0.4;
}
.loading-text {
  float: left;
  height: 50px;
  font-size: 20px;
  padding-left: 30px;
  display: block;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
