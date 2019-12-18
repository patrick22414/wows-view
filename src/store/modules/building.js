const state = {
    shipId: 0,
    shipInfo: {
        nation: "",
        type: "",
        tier: 0,
    },

    params: {},

    modifiers: []
}

const getters = {
    getParam: (state) => function (entry) {
        return state.params[entry]
    }
}

const actions = {
    selectShip: function ({ commit }, id) {

    }
}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations,
}
