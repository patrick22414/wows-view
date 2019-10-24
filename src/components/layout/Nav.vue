<template>
  <nav>
    <router-link to="/">Select and build a ship</router-link>
    {{" | "}}
    <router-link to="/comparing">Compare ships</router-link>
    {{" | "}}
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="less" scoped>
nav {
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