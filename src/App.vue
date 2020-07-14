<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  name: "app",
  components: {
    Header,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;

  min-width: 900px;
  min-height: 600px;

  font-family: "Oswald", -apple-system, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: whitesmoke;
  background-image: url(./assets/background.jpg);
  background-size: cover;

  overflow: hidden;
}
</style>
