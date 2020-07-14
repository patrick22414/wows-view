const state = {
  nations: [
    { id: "usa", title: "U.S.A.", selected: false },
    { id: "japan", title: "Japan", selected: false },
    { id: "ussr", title: "U.S.S.R.", selected: false },
    { id: "germany", title: "Germany", selected: false },
    { id: "uk", title: "U.K.", selected: false },
    { id: "commonwealth", title: "Commonwealth", selected: false },
    { id: "france", title: "France", selected: false },
    { id: "italy", title: "Italy", selected: false },
    { id: "pan_asia", title: "Pan-Asia", selected: false },
    { id: "europe", title: "Europe", selected: false },
    { id: "pan_america", title: "Pan-America", selected: false },
  ],
  ships: [],
};

const getters = {
  getNations: (state) => state.nations,

  getNationById: (state) =>
    function (id) {
      return state.nations.find((nation) => nation.id === id).title;
    },

  getShips: (state) =>
    function (type, tier) {
      return state.ships.filter((s) => s.type === type && s.tier === tier);
    },

  hasShip: (state) =>
    function (type, tier) {
      return state.ships.some((s) => s.type === type && s.tier === tier);
    },
};

const actions = {
  selectNation: function ({ commit, state }, nationId) {
    console.log(`select nation ${nationId}`);

    const ships = require(`../../assets/nations/${nationId}`).data;

    commit("setShips", ships);
    commit("setSelectedNation", nationId);
    commit("setSiteTitle", `WoWs View - Selecting - ${state.nations.find((n) => n.id === nationId).title}`);
  },

  resetSelecting: function ({ commit }) {
    commit("resetSelecting");
  },
};

const mutations = {
  setSelectedNation: function (state, id) {
    state.nations.forEach((nation) => {
      if (nation.id === id) {
        nation.selected = true;
      } else {
        nation.selected = false;
      }
    });
  },

  setShips: function (state, ships) {
    state.ships = ships;
  },

  resetSelecting: function (state) {
    state.nations.forEach((nation) => {
      nation.selected = false;
    });

    state.ships = [];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
