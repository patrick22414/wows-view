const state = {
    shipId: 0,
    shipInfo: {
        name: "",
    },

    profile: {},

    modifiers: []
}

const getters = {
    getParam: (state) => function (entry) {
        return state.profile[entry]
    }
}

const actions = {
    selectShip: function ({ commit }, id) {
        const ship = require(`../../../assets/ships/${id}`)

        console.log(`select ship #${id} ${ship.name}`)

        commit("setProfile", ship.profile)
        commit("setSiteTitle", `WoWs View - Building - ${ship.name}`)
    }
}

const mutations = {
    setProfile: function (state, profile) {
        state.profile = profile
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
