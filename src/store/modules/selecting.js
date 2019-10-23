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
        { id: "pan_america", title: "Pan-America", selected: false }
    ],
    ships: [],
};

const getters = {
    getNations: state => state.nations,
    getShips: state => state.ships,
};

const actions = {
    selectNation: function ({ commit }, id) {
        console.log(`select nation ${id}`);

        const ships = require(`../../assets/${id}`);

        commit("setShips", ships.data);
        commit("setSelectedNation", id);
    },
};

const mutations = {
    setSelectedNation: function (state, id) {
        state.nations.forEach(nation => {
            if (nation.id === id) {
                nation.selected = true;
            } else {
                nation.selected = false;
            }
        });
    },

    setShips: function (state, data) {
        state.ships = data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
