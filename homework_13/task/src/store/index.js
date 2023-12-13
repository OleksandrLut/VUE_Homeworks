import { createStore } from "vuex";
import teachersModule from "@/store/modules/teachersModule";
import lessonsModule from "@/store/modules/lessonsModule";

export default createStore({
  state: {
    userName: null,
    userPass: null,
  },
  getters: {
    userName: (state) => state.userName,
    userPass: (state) => state.userPass,
    isUserAuth: (state) => state.userName ? true : false,
  },
  mutations: {
    setUserName(state, userName){
      state.userName = userName
    },
    setUserPass(state, userPass){
      state.userPass = userPass
    },
    clearUserAuth(state) {
      state.userName = null;
      state.userPass = null;
    }
  },
  actions: {
    setUserName({ commit }, userName){
      commit('setUserName', userName)
    },
    setUserPass({ commit }, userPass){
      commit('setUserPass', userPass)
    },
    clearUserAuth({ commit }) {
      commit('clearUserAuth');
    },
  },
  modules: {
    teachersModule,
    lessonsModule,
  },
});

