<template>
  <header>
    <h1>{{getSiteTitle}}</h1>
    <Nav />
  </header>
</template>

<script>
import Nav from "./Nav";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: {
    Nav
  },
  computed: mapGetters(["getSiteTitle"])
};
</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 10%;

  min-height: 72px;

  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);

  display: grid;

  grid-template-rows: auto;
  grid-template-columns: auto auto;

  align-items: center;

  h1 {
    grid-row: 1 / span 1;
    grid-column: 1 / span 2;

    color: whitesmoke;

    font-size: 36pt;
    font-weight: 400;
  }
}

#nav {
  position: absolute;
  top: 0;
  right: 0;
  padding: 2vh;

  grid-row: 1 / span 1;
  grid-column: 2 / span 1;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>