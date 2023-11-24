import { createStore } from "vuex";
import { dancersData } from "@/data/appData.js";
import { generateUniqueId } from "@/store/helpers.js";

export default createStore({
  state: {
    boysList: [],
    girlsList: [],
    selectedDancersList: [],
    selectedDancingCouple:{
      boys: null,
      girls: null,
    }
  },
  getters: {
    boysList: (state) => state.boysList,
    girlsList: (state) => state.girlsList,
    getSelectedCoupleList: (state) => state.selectedDancersList,
    selectedBoy:(state)=>state.selectedDancingCouple.boys,
    selectedGirl:(state)=>state.selectedDancingCouple.girls,
    getNamesById: (state) => {
      return state.selectedDancersList.map((couple) => {
        return {
          id: couple.id,
          boys: state.boysList.find((boy) => boy.id === couple.boys)?.name || null,
          girls: state.girlsList.find((girl) => girl.id === couple.girls)?.name || null,
        };
      });
    },
    getBlockedList: (state) => {
      const selectedGirls = state.selectedDancersList.map((couple) => couple.girls);
      const allGirls = state.girlsList.map((girl) => girl.id);
      return allGirls.filter((girlId) => !selectedGirls.includes(girlId));
    },
  },
  mutations: {
    setData(state, dancersData) {
      state.boysList = dancersData.boys;
      state.girlsList = dancersData.girls;
    },
    setDancerToSelectedList(state, { gender, dancerId }) {

      state.selectedDancingCouple[gender] = dancerId;
    },
    addCouple(state){
      const newCouple = {
        id: generateUniqueId(),
        boys: state.selectedDancingCouple.boys,
        girls: state.selectedDancingCouple.girls,
      };
      state.selectedDancersList.push(JSON.parse(JSON.stringify(newCouple)));
      state.selectedDancingCouple.boys = null,
      state.selectedDancingCouple.girls = null
    },
    removeCouple(state, coupleId) {
      const indexToRemove = state.selectedDancersList.findIndex(couple => couple.id === coupleId);
      if (indexToRemove !== -1) {
        state.selectedDancersList.splice(indexToRemove, 1);
      }
    },
  },
  actions: {
    loadData({ commit }) {
      commit('setData', dancersData);
    },
    selectDancer({ commit }, { gender, id }) {
      commit('setDancerToSelectedList', { gender, dancerId: id });
    },
    addCouple({commit}){
      commit('addCouple')
    },
    removeCouple({commit}, coupleId){
      commit('removeCouple', coupleId)
    }
  },
});
