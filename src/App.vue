<template>
  <div id="app">
    <Header></Header>
    <SelectingView></SelectingView>
  </div>
</template>

<script>
import Header from "./components/Header";
import SelectingView from "./components/selecting/SelectingView";

export default {
  name: "app",
  components: {
    Header,
    SelectingView
  }
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

  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: whitesmoke;
  background-image: url(./assets/background1.jpg);

  overflow: hidden;
}
</style>
