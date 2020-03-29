<template>
  <div class="tech-branch">
    <h2>{{title}}</h2>
    <div v-for="tier in tiers.filter(tier => hasShip(type, tier))" class="tier-tag" :key="tier">
      <h3>{{tierToRoman(tier)}}</h3>
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
    ShipTag
  },
  data: function() {
    return {
      tiers: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    };
  },
  computed: mapGetters(["getShips", "hasShip"]),
  methods: {
    tierToRoman: function(tier) {
      switch (tier) {
        case 10:
          return "X";
        case 9:
          return "IX";
        case 8:
          return "VIII";
        case 7:
          return "VII";
        case 6:
          return "VI";
        case 5:
          return "V";
        case 4:
          return "IV";
        case 3:
          return "III";
        case 2:
          return "II";
        case 1:
          return "I";

        default:
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.tech-branch {
  width: 24%;
  height: auto;

  h2 {
    height: 2em;
    margin: 30px 40px;
    background: rgba(255, 255, 255, 0.4);

    font-size: 20pt;
    font-weight: 400;
    line-height: 2em;
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.8);
  }

  .tier-tag {
    background: rgba(0, 0, 0, 0.3);

    margin-bottom: 15px;
    padding: 5px 0;

    display: flex;
    flex-flow: row wrap;

    justify-content: center;

    h3 {
      width: 100%;
      //   border-bottom: solid whitesmoke;

      //   background: rgba(255, 255, 255, 0.6);

      font-weight: 400;
    }
  }
}
</style>