import Vue from "vue";
import Vuex from "vuex";
import selecting from "./modules/selecting";
import building from "./modules/building";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    siteTitle: "WoWs View",
    info: require("../../assets/encyclopedia"),
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
