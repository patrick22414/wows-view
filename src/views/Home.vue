<template>
  <div class="home">
    <p>This is the home page</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeCreate: function () {
    this.$store.dispatch("changeSiteTitle", "WoWs View");
  },
};
</script>

<style lang="less" scoped>
p {
  font-size: 16pt;
  margin: 1em;
}
</style>
