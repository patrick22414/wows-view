<template>
  <div class="sidebar">
    <div class="nation" v-for="nation in getNations" :key="nation.id">
      <div class="illuminant" :style="nation.selected ? {opacity: 1} : {}"></div>
      <p class="nation-title">{{nation.title}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  computed: mapGetters(["getNations"])
};
</script>

<style lang="less" scoped>
.sidebar {
  width: 12.5%;
  height: 100%;
  min-width: 150px;

  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  overflow: hidden;

  .nation {
    width: 100%;
    height: 40pt;
    margin: 5px 0;

    background: rgba(255, 255, 255, 0.3);

    display: grid;
    grid-template-areas: "a";
    justify-items: center;
    align-items: center;

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
}
</style>