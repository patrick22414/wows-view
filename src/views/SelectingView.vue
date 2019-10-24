<template>
  <div class="selecting-view">
    <Sidebar />
    <TechTree />
  </div>
</template>

<script>
import Sidebar from "../components/selecting/Sidebar";
import TechTree from "../components/selecting/TechTree";

export default {
  name: "SelectingView",
  components: {
    Sidebar,
    TechTree
  },
  created: function() {
    this.$store.dispatch("changeSiteTitle", "WoWs View - Selecting");
  },
  destroyed: function() {
    this.$store.dispatch("resetSelecting");
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