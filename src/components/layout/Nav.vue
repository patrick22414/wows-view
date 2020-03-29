<template>
  <nav>
    <router-link to="/">Home</router-link>
    {{" | "}}
    <router-link to="/selecting">Select and build a ship</router-link>
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
  padding: 10px;

  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
  justify-self: right;

  a {
    font-weight: bold;
    color: whitesmoke;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>