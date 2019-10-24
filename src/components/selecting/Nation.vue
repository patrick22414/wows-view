<template>
  <div class="nation" @click="selectNation(nation)">
    <div class="illuminant" :style="nation.selected ? {opacity: 1} : {}"></div>
    <p class="nation-title">{{nation.title}}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Nation",
  props: ["nation"],
  methods: {
    ...mapActions(["selectNation", "appendSiteTitle"])
  }
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