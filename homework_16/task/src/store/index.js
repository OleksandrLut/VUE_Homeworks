import { createStore } from "vuex";
import driversList from "./modules/driversList";
import bussesList from "./modules/bussesList";
import appointments from "./modules/appointments";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    driversList,
    bussesList,
    appointments,
  },
});
