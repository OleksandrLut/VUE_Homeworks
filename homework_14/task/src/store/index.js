import { createStore } from "vuex";
import { products } from "@/data/data";
import { provisors } from "@/data/data";

export default createStore({
  state: {
    products: [],
    provisors: [],
    searchValue: null,
  },
  getters: {
    products:(state) => state.products,

    provisors:(state) => state.provisors,

    getSearchValue:(state) => state.searchValue,

    getFilteredList: (state) => {
      if (!state.searchValue) return state.products;

      const searchLowerCase = state.searchValue.toLowerCase();
      return state.products.filter(
        (product) => product.title.toLowerCase().includes(searchLowerCase)
      );
    }

  },

  mutations: {
    setProducts(state, productsList){
      state.products = productsList
    },

    setProvisors(state, provisorsList){
      state.provisors = provisorsList
    },

    setNewSearchVal(state, newVal){
      state.searchValue = newVal
    },

    addNewProduct(state, newProductObj){
      state.products.push(newProductObj)
    }

  },

  actions: {
    loadProducts({commit}){
      commit('setProducts', products)
    },

    loadProvisors({commit}){
      commit('setProvisors', provisors)
    },

    updateSearchVal({commit}, newVal){
      commit('setNewSearchVal', newVal)
    },

    addNewProduct({commit}, newProductObj){
      commit('addNewProduct', {
        id:Date.now(),
        ...newProductObj
      })
    },

  },
  modules: {},
});
