<template>
  <router-link class="nation" :to="`/selecting/${nation.id}`">
    <div class="illuminant" :style="nation.selected ? { opacity: 1 } : {}"></div>
    <p class="nation-title">{{ nation.title }}</p>
  </router-link>
</template>

<script>
export default {
  name: "Nation",
  props: ["nation"],
};
</script>

<style lang="less" scoped>
.nation {
  width: 100%;
  height: 40pt;
  margin: 5px 0;

  color: whitesmoke;
  text-decoration: none;

  background: rgba(255, 255, 255, 0.3);

  display: grid;
  grid-template-areas: "a";
  justify-items: center;
  align-items: center;

  &.router-link-exact-active {
    color: whitesmoke;
  }

  .nation-title {
    grid-area: a;
    font-size: 16pt;
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.8);
  }

  .illuminant {
    grid-area: a;
    width: 100%;
    height: 100%;

    background: rgba(255, 255, 255, 0.3);

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
