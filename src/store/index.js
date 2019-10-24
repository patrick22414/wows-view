import Vue from 'vue';
import Vuex from 'vuex';
import selecting from "./modules/selecting";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        siteTitle: "WoWs View"
    },
    getters: {
        getSiteTitle: state => state.siteTitle
    },
    actions: {
        changeSiteTitle: function ({ commit }, newTitle) {
            commit("setSiteTitle", newTitle);
        }
    },
    mutations: {
        setSiteTitle: function (state, newTitle) {
            state.siteTitle = newTitle;
            document.title = newTitle;
        }
    },
    modules: {
        selecting
    }
});
