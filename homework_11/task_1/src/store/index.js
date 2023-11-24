import { createStore } from "vuex";
import busses from "./modules/busses";
import drivers from "./modules/drivers";
import appointment from "./modules/appointment";

export default createStore({
  state: {
     
  },
  getters: {
    
  },
  mutations: {},
  actions: {},
  modules: {
    // bussesStore: busses,
    busses,
    drivers,
    appointment,
  },
});
