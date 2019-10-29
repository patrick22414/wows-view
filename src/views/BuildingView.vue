<template>
  <div class="building-view">
    <Sidebar />
    <Preview />
    <Config />
  </div>
</template>

<script>
import Sidebar from "../components/building/Sidebar";
import Preview from "../components/building/Preview";
import Config from "../components/building/Config";

export default {
  name: "BuildingView",
  components: {
    Sidebar,
    Preview,
    Config
  }
};
</script>

<style lang="less" scoped>
.building-view {
  width: 100%;
  height: 88%;

  display: flex;
  flex-flow: row nowrap;
}
</style>