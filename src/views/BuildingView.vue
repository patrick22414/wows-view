<template>
  <div class="building-view">
    <Sidebar />
    <Preview />
    <Config />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Preview from "../components/building/Preview";
import Config from "../components/building/Config";

export default {
  name: "BuildingView",
  components: {
    Sidebar,
    Preview,
    Config
  },
  beforeCreate: function() {
    this.$store.dispatch("selectShip", this.$route.params.id);
  }
};
</script>

<style lang="less" scoped>
.building-view {
  width: 100%;
  height: 90%;

  display: flex;
  flex-flow: row nowrap;
}
</style>