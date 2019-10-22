import axios from "axios"
import { stat } from "fs";

const state = {
    selectedNation: "",
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
    selectNation: async function ({ commit }, id) {
        console.log(`select nation ${id}`);

        const resp = await axios.get(`https://api.worldofwarships.ru/wows/encyclopedia/ships/?application_id=d9e3cd11e2529af77d0317ff1597b2be&nation=${id}&language=en&fields=name%2Ctier%2Cis_premium%2Cis_special%2Ctype`);

        if (resp.data.status === "ok") {
            console.log(resp.data.data);
            commit("setShips", resp.data.data);
        } else {
            console.log("not ok");
        }

        commit("setSelectedNation", id);
    },
};

const mutations = {
    setSelectedNation: function (state, id) {
        state.selectedNation = id;
        state.nations.forEach(nation => {
            if (nation.id === id) {
                nation.selected = true;
            } else {
                nation.selected = false;
            }
        });
    },

    setShips: function (state, data) {
        state.ships = [];

        for (const id in data) {
            if (data.hasOwnProperty(id)) {
                const ship = data[id];
                if (!ship.name.startsWith("[")) {
                    state.ships.push({
                        id,
                        ...ship,
                    })
                }
            }
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
