<template>
  <div class="selecting-view">
    <Sidebar />
    <Content />
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Content from "./Content";

export default {
  name: "SelectingView",
  components: {
    Sidebar,
    Content
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