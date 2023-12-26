export default {
  namespaced: true,
  
  state: {
    cartList: []
  },
  getters: {
    cartList: (state) => state.cartList,
  },
  mutations: {
    setProductInCartList(state, productId) {
      if (!state.cartList.includes(productId)) {
        state.cartList.push(productId);
      }
    },
    removeFromCart(state, productIdToRemove) {
      state.cartList = state.cartList.filter((productId) => productId !== productIdToRemove);
    }
  },
  actions: {
    addToCart({commit}, productId){
      commit('setProductInCartList', productId)
    },
    removeFromCart({commit}, productId){
      commit('removeFromCart', productId)
    }
    
  },
  modules: {},
};