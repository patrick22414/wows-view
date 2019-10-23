<template>
  <div class="content">
    <ShipTag v-for="ship in getShips" :key="ship.id" :ship="ship" />
  </div>
</template>

<script>
import ShipTag from "./ShipTag";
import { mapGetters } from "vuex";

export default {
  name: "Content",
  components: {
    ShipTag
  },
  computed: mapGetters(["getShips"])
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-flow: column wrap;

  //   overflow: scroll;
}
</style>
