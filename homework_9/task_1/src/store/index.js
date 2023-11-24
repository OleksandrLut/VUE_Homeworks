import { createStore } from "vuex";
import { productsData } from "@/constants/shopData";
import { makeProductListOfData } from "./helpers";

export default createStore({
  state: {
    productsList : {},
  },
  getters: {
    notebooks: (state) => {return makeProductListOfData(state.productsList, 'notebooks')},
    tv: (state) => {return makeProductListOfData(state.productsList, 'tv')},
    phones: (state) => {return makeProductListOfData(state.productsList, 'phones')},
    monitors: (state) => {return makeProductListOfData(state.productsList, 'monitors')},
    currentProductList: (state) => productCategory => {return makeProductListOfData(state.productsList, productCategory)},
  },
  mutations: {
    loadData(state, dataList){
      state.productsList = dataList
    }
  },
  actions: {
    loadData({commit}) {
      commit('loadData', productsData)
    }
  },
});
