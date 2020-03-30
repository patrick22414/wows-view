<template>
  <div class="param-item">
    <span class="param-title">{{ title }}</span>
    <span class="param-value">{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: "ParamItem",
  props: ["title", "value"],
};
</script>

<style lang="less" scoped>
.param-item {
  width: 400px;
  padding: 0.4em;
  background: rgba(0, 0, 0, 0.4);

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  border-bottom: solid rgba(0, 0, 0, 0.4);
}
</style>
