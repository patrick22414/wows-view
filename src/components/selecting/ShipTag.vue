<template>
  <router-link :to="`/building/${ship.id}`">
    <figure class="ship-tag">
      <img :src="ship.image" width="120" height="72" />
      <figcaption>{{ship.name}}</figcaption>
    </figure>
  </router-link>
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

  transition: background-color 0.4s ease;

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

    background: rgba(0, 0, 0, 0.6);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);

    transition: background-color 0.4s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.8);

    figcaption {
      background: rgba(0, 0, 0, 0.8);
    }
  }
}

a {
  color: unset;
  text-decoration: none;
}
</style>