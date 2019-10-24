<template>
  <header>
    <h1>WoWs View - Selecting</h1>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 15vh;

  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);

  h1 {
    color: whitesmoke;

    font-size: 48pt;
    font-weight: 400;

    line-height: 15vh;
  }
}
</style>