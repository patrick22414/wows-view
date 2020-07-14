const state = {
  id: 0,
  name: "",
  type: "",
  tier: "",
  description: "",
  images: {},
  params: {},
  modifiers: [],
};

const getters = {
  getParam: (state) =>
    function (entry) {
      return state.params[entry];
    },
};

const actions = {
  selectShip: function ({ commit }, name) {
    const ship = require(`../../assets/ships/${name}`);

    console.log(`select ship #${ship.ship_id} ${name}`);

    commit("setShip", ship);
    commit("setSiteTitle", `WoWs View - Building - ${name}`);
  },
};

const mutations = {
  setShip: function (state, ship) {
    state.id = ship.id;
    state.name = ship.name;
    state.type = ship.type;
    state.tier = ship.tier;
    state.description = ship.description;
    state.images = ship.images;
    state.params = ship.params;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
