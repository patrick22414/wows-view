<template>
  <div class="about">
    <p>This is the about page</p>
  </div>
</template>

<script>
export default {
  name: "About",
  beforeCreate: function () {
    this.$store.dispatch("changeSiteTitle", "WoWs View - About");
  },
};
</script>

<style lang="less" scoped>
p {
  font-size: 16pt;
  margin: 1em;
}
</style>
