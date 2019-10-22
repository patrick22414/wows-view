<template>
  <div class="sidebar">
    <Nation v-for="nation in nations" :key="nation.name" :nation="nation" />
  </div>
</template>

<script>
import Nation from "./Nation";

export default {
  name: "Sidebar",
  components: {
    Nation
  },
  data: function() {
    return {
      nations: [
        { name: "japan", fullName: "Japan" },
        { name: "usa", fullName: "U.S.A." },
        { name: "uk", fullName: "U.K." },
        { name: "germany", fullName: "Germany" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.sidebar {
  width: 240px;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-flow: column nowrap;
}
</style>