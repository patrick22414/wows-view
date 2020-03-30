<template>
  <div class="sidebar">
    <Nation v-for="nation in getNations" :key="nation.id" :nation="nation" />
  </div>
</template>

<script>
import Nation from "./Nation";
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  components: {
    Nation,
  },
  computed: mapGetters(["getNations"]),
};
</script>

<style lang="less" scoped>
.sidebar {
  width: 10%;
  height: 100%;
  min-width: 150px;

  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  overflow: hidden;
}
</style>
