<template>
  <div class="selecting-view">
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";

export default {
  name: "SelectingView",
  components: {
    Sidebar,
  },
  beforeCreate: function () {
    this.$store.dispatch("changeSiteTitle", "WoWs View - Selecting");
  },
  beforeRouteLeave: function (to, from, next) {
    this.$store.dispatch("resetSelecting");
    next();
  },
};
</script>

<style lang="less" scoped>
.selecting-view {
  width: 100%;
  height: 90%;
  display: flex;
  flex-flow: row nowrap;
}
</style>
