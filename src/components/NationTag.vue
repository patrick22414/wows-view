<template>
  <router-link class="nation-tag" :to="`/selecting/${nation.id}`">
    <div class="illuminant" :style="nation.selected ? { opacity: 1 } : {}"></div>
    <p class="nation-title">{{ nation.title }}</p>
  </router-link>
</template>

<script>
export default {
  name: "NationTag",
  props: ["nation"],
};
</script>

<style lang="less" scoped>
.nation-tag {
  width: 100%;
  height: 40pt;
  margin: 5px 0;

  color: whitesmoke;
  text-decoration: none;

  background: rgba(255, 255, 255, 0.3);

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
  justify-items: center;
  align-items: center;

  &.router-link-exact-active {
    font-weight: bold;
    color: whitesmoke;
  }

  .nation-title {
    grid-row: 1;
    grid-column: 1;
    font-size: 16pt;
    text-shadow: 0 0 12px rgba(0, 0, 0, 1);
    z-index: 99;

    transition: all 0.4s ease;
  }

  .illuminant {
    grid-row: 1;
    grid-column: 1;
    width: 100%;
    height: 100%;

    z-index: 98;

    background: rgba(255, 255, 255, 0.4);

    filter: blur(4px);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    .illuminant {
      opacity: 0.5;
    }
  }
}
</style>
