import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    users: [],
    selectedUser: null,
    isSearching: false,
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_SELECTED_USER(state, user) {
      state.selectedUser = user;
    },
    SET_IS_SEARCHING(state, value) {
      state.isSearching = value;
    },
  },
  actions: {
    async fetchUsers({ commit, state }) {
      commit("SET_IS_SEARCHING", true);
      if (state.searchQuery && state.searchQuery.trim()) {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        commit("SET_USERS", response.data);
      } else {
        commit("SET_USERS", []);
      }
      commit("SET_SELECTED_USER", null);
      commit("SET_IS_SEARCHING", false);
    },
    selectUser({ commit }, user) {
      commit("SET_SELECTED_USER", user);
    },
  },
});
