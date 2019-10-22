<template>
  <div class="sidebar">
    <Nation>Japan</Nation>
    <Nation>U.S.A</Nation>
    <Nation>Germany</Nation>
    <Nation>U.S.S.R</Nation>
    <Nation>U.K.</Nation>
    <Nation>France</Nation>
    <Nation>Italy</Nation>
    <Nation>Commonwealth</Nation>
    <Nation>Pan Asia</Nation>
    <Nation>Pan Europe</Nation>
    <Nation>Pan America</Nation>
  </div>
</template>

<script>
import Nation from "./Nation";

export default {
  name: "Sidebar",
  components: {
    Nation
  }
};
</script>

<style lang="less" scoped>
.sidebar {
  width: 240px;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
}
</style>