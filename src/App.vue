<template>
    <div id="app">
        <myloading v-if="loading" v-bind:message="messageContent"></myloading>
        <router-view/>
    </div>
</template>

<script>
import myloading from "./components/loading/index";

export default {
  name: "app",
  data() {
    return {
      loading: true,
      messageContent: "系统正在玩命加载，请稍后……"
    };
  },
  components: {
    myloading
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import '../static/css/components.min.css';
@import '../static/css/layout.min.css'; */
</style>

