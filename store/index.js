import Vuex from "vuex";
import { createFlashStore } from "vuex-flash";

const state = () => ({
});

const mutations = {
};

const createStore = () => {
  return new Vuex.Store({
    state,
    getters: {},
    mutations,
    actions: {},
    plugins: [createFlashStore()]
  });
};

export default createStore;
