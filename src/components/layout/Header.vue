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
  height: 12%;

  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);

  h1 {
    color: whitesmoke;

    font-size: 36pt;
    font-weight: 400;

    line-height: 12vh;
  }
}

#nav {
  position: absolute;
  top: 0;
  right: 0;
  padding: 2vh;
  height: 12vh;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>