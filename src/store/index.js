import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    friends: [],
  },
  mutations: {
    addFriend(state, friend) {
      const newFriend = {
        id: Date.now(),
        ...friend,
      };
      state.friends.push(newFriend);
    },
  },
  actions: {
    addFriend({ commit }, friend) {
      commit("addFriend", friend);
    },
  },
});
