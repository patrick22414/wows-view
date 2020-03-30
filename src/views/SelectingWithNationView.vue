<template>
  <div class="selecting-with-nation-view">
    <Sidebar />
    <TechTree :nation-id="this.$route.params.nationId" />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import TechTree from "../components/selecting/TechTree";

export default {
  name: "SelectingWithNationView",
  components: {
    Sidebar,
    TechTree,
  },
  beforeCreate: function () {
    this.$store.dispatch("selectNation", this.$route.params.nationId);
  },
  beforeRouteUpdate: function (to, from, next) {
    this.$store.dispatch("selectNation", to.params.nationId);
    next();
  },
  beforeRouteLeave: function (to, from, next) {
    this.$store.dispatch("resetSelecting");
    next();
  },
};
</script>

<style lang="less" scoped>
.selecting-with-nation-view {
  width: 100%;
  height: 90%;
  display: flex;
  flex-flow: row nowrap;
}
</style>
