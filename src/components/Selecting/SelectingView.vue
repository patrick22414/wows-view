<template>
  <div class="selecting-view">
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";

export default {
  name: "SelectingView",
  components: {
    Sidebar
  }
};
</script>

<style lang="less" scoped>
.selecting-view {
  width: 100%;
  height: 85vh;
  display: flex;
  flex-flow: row nowrap;
}
</style>