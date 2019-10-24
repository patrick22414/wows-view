<template>
  <div class="tech-tree">
    <TechBranch :title="`Battleships`" :type="`Battleship`" />
    <div class="separator"></div>
    <TechBranch :title="`Cruisers`" :type="`Cruiser`" />
    <div class="separator"></div>
    <TechBranch :title="`Destroyers`" :type="`Destroyer`" />
    <div class="separator"></div>
    <TechBranch :title="`Aircraft Carriers`" :type="`AirCarrier`" />
  </div>
</template>

<script>
import TechBranch from "./TechBranch";

export default {
  name: "TechTree",
  components: {
    TechBranch
  }
};
</script>

<style lang="less" scoped>
.tech-tree {
  width: 87.5%;
  overflow: auto;

  display: flex;
  flex-flow: row nowrap;

  justify-content: space-evenly;

  .separator {
    width: 1px;
    height: 96%;

    background: whitesmoke;
    filter: blur(1px);

    top: 2%;
    position: sticky;
  }
}

.tech-tree {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Edge and IE 10+ */
}

.tech-tree::-webkit-scrollbar {
  width: 0 !important; /* Chrome, Safari and Opera */
}
</style>