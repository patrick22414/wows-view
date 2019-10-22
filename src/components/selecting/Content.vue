<template>
  <div class="content">
    <div
      class="ship-item"
      v-for="ship in getShips"
      :key="ship.id"
      :style="ship.is_premium || ship.is_special ? {color: `gold`} : {}"
    >{{`${ship.tier} ${ship.name}`}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Content",
  computed: mapGetters(["getShips"])
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-flow: column wrap;
}

.ship-item {
  margin: 10px;
}
</style>
