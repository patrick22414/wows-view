<template>
  <div class="nation">
    <div class="illuminant"></div>
    <p class="full-name">{{nation.fullName}}</p>
  </div>
</template>

<script>
export default {
  name: "Nation",
  props: ["nation"]
};
</script>

<style lang="less" scoped>
.nation {
  width: 100%;
  height: 40pt;
  margin: 5px 0;

  background: rgba(255, 255, 255, 0.3);

  display: grid;
  grid-template-areas: "a";
  justify-items: center;
  align-items: center;

  .full-name {
    grid-area: a;
    font-size: 16pt;
  }

  .illuminant {
    grid-area: a;
    width: 100%;
    height: 100%;

    background: rgba(255, 255, 255, 0.4);

    filter: blur(4px);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    .illuminant {
      opacity: 1;
    }
  }
}
</style>