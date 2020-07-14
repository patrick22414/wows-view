import Vue from "vue";
import Vuex from "vuex";
import selecting from "./modules/selecting";
import building from "./modules/building";

const encyclopedia = require("../assets/encyclopedia");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    siteTitle: "WoWs View",

    ship_types_dict: encyclopedia.ship_types,
  },
  getters: {
    getSiteTitle: (state) => state.siteTitle,
    getShipTypeImage: (state) =>
      function (type) {
        return state.info.ship_type_images[type].image;
      },
  },
  actions: {
    changeSiteTitle: function ({ commit }, newTitle) {
      commit("setSiteTitle", newTitle);
    },
  },
  mutations: {
    setSiteTitle: function (state, newTitle) {
      state.siteTitle = newTitle;
      document.title = newTitle;
    },
  },
  modules: {
    selecting,
    building,
  },
});
