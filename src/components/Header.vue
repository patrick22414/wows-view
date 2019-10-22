<template>
  <div class="header">
    <h1>WoWs View - Selecting</h1>
  </div>
</template>

<script>
export default {
  name: "header"
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 15vh;

  background: rgba(0, 0, 0, 0.45);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.45);

  h1 {
    color: whitesmoke;
    font-size: 3rem;
    font-weight: 400;
    line-height: 15vh;
  }
}
</style>