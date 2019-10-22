<template>
  <div class="nation">
    {{children}}
    <div class="illuminant"></div>
  </div>
</template>

<script>
export default {
  name: "Nation"
};
</script>

<style lang="less" scoped>
.nation {
  width: 100%;
  height: 3rem;

  //   margin: 0.5rem 0;

  background: rgba(255, 255, 255, 0.3);

  .illuminant {
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