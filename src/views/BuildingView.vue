<template>
  <div class="building-view">
    <Sidebar />
    <Profile />
    <Config />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Profile from "../components/building/Profile";
import Config from "../components/building/Config";

export default {
  name: "BuildingView",
  components: {
    Sidebar,
    Profile,
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