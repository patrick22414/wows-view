<template>
  <div class="selecting-view">
    <Sidebar />
    <TechTree />
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import TechTree from "./TechTree";

export default {
  name: "SelectingView",
  components: {
    Sidebar,
    TechTree
  }
};
</script>

<style lang="less" scoped>
.selecting-view {
  width: 100%;
  height: 88vh;
  display: flex;
  flex-flow: row nowrap;
}
</style>