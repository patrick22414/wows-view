<template>
  <div class="comparing-view">
    <p>Compare ships</p>
    <div class="param-item">
      <span class="param-name">Firing Range</span>
      <span class="param-value">16.0 km</span>
    </div>
    <div class="param-item">
      <span class="param-name">Firing Range</span>
      <span class="param-value">16.0 km</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComparingView",
  created: function () {
    this.$store.dispatch("changeSiteTitle", "WoWs View - Comparing");
  },
};
</script>

<style lang="less" scoped>
p {
  font-size: 16pt;
  margin: 1em;
}

.param-item {
  width: 400px;
  padding: 0.5em;
  background: rgba(0, 0, 0, 0.3);

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  border-bottom: solid rgba(0, 0, 0, 0.3);

  //   .param-value {
  //     font-family: "Inconsolata", Consolas, "Courier New", Courier, monospace;
  //     font-size: 16pt;
  //     font-weight: bold;
  //   }
}
</style>
