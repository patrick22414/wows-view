<template>
  <figure class="ship-tag">
    <img :src="ship.image" width="120" height="72" />
    <figcaption>{{ship.name}}</figcaption>
  </figure>
</template>

<script>
export default {
  name: "ShipTag",
  props: ["ship"]
};
</script>

<style lang="less" scoped>
.ship-tag {
  width: 120px;
  height: 72px;
  margin: 5px;
  background: rgba(255, 255, 255, 0.6);

  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;

  img {
    grid-row: 1 / span 2;
    grid-column: 1 / span 1;
  }

  figcaption {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;

    // width: 120px;
    // height: 24px;
    font-weight: 300;

    background: rgba(0, 0, 0, 0.6);
  }
}
</style>