<template>
  <div class="tech-branch">
    <h2>{{ title }}</h2>
    <div v-for="tier in tiersWithShip" class="tier-tag" :key="tier">
      <h3>{{ romanTiers[tier] }}</h3>
      <ShipTag v-for="ship in getShips(type, tier)" :key="ship.id" :ship="ship" />
    </div>
  </div>
</template>

<script>
import ShipTag from "./ShipTag";
import { mapGetters } from "vuex";

export default {
  name: "TechBranch",
  props: ["title", "type"],
  components: {
    ShipTag,
  },
  data: function () {
    return {
      tiers: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      romanTiers: {
        "10": "X",
        "9": "IX",
        "8": "VIII",
        "7": "VII",
        "6": "VI",
        "5": "V",
        "4": "IV",
        "3": "III",
        "2": "II",
        "1": "I",
      },
    };
  },
  computed: {
    tiersWithShip: function () {
      return this.tiers.filter((tier) => this.hasShip(this.type, tier));
    },
    ...mapGetters(["getShips", "hasShip"]),
  },
};
</script>

<style lang="less" scoped>
.tech-branch {
  width: 24%;
  height: auto;

  h2 {
    height: 2em;
    margin: 30px;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);

    font-size: 20pt;
    font-weight: 400;
    line-height: 2em;
    text-shadow: 0 0 12px rgba(0, 0, 0, 1);
  }

  .tier-tag {
    background: rgba(0, 0, 0, 0.3);

    margin-bottom: 15px;
    padding: 5px 0;

    display: flex;
    flex-flow: row wrap;

    justify-content: center;

    transition: all 0.4s ease;

    h3 {
      width: 100%;
      padding-bottom: 6px;
      font-weight: 400;
      transition: all 0.4s ease;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(10px);

      h3 {
        text-shadow: white 0 0 12px;
      }
    }
  }
}
</style>
