<template>
  <router-link :to="`/building/${ship.name}`">
    <figure class="ship-tag" :class="{ 'ship-tag-premium': ship.is_premium, 'ship-tag-special': ship.is_special }">
      <div class="illuminant"></div>
      <img :src="ship.images.small" width="107" />
      <figcaption>{{ ship.name }}</figcaption>
    </figure>
  </router-link>
</template>

<script>
export default {
  name: "ShipTag",
  props: ["ship"],
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

  overflow: hidden;

  .illuminant {
    grid-row: 1 / span 2;
    grid-column: 1;

    background: linear-gradient(grey, white);
    opacity: 0;
    transition: all 0.4s ease;
  }

  img {
    grid-row: 1 / span 2;
    grid-column: 1;

    align-self: end;
    justify-self: center;

    z-index: 98;
  }

  figcaption {
    grid-row: 1;
    grid-column: 1;

    align-self: start;

    z-index: 99;

    background: rgba(0, 0, 0, 0.75);

    transition: all 0.4s ease;
  }

  &:hover {
    .illuminant {
      opacity: 1;
    }

    figcaption {
      background: rgba(0, 0, 0, 0.25);
    }
  }
}

.ship-tag-premium {
  .illuminant {
    background: linear-gradient(palegoldenrod, white);
  }
}

.ship-tag-special {
  .illuminant {
    background: linear-gradient(pink, white);
  }
}

a {
  color: unset;
  text-decoration: none;
}
</style>
