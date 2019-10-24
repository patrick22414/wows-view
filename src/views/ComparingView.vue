<template>
  <div class="comparing-view">Compare ships</div>
</template>

<script>
export default {
  name: "ComparingView",
  created: function() {
    this.$store.dispatch("changeSiteTitle", "WoWs View - Comparing");
  }
};
</script>