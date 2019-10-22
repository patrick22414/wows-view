import Vue from 'vue';
import Vuex from 'vuex';
import selecting from "./modules/selecting";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        selecting
    }
});
