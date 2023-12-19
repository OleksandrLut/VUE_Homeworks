import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('driversList')
export default {
    namespaced: true,
    state: () => ({
      driversList: [],
      loading: false,
      error: null,
    }),
    getters: {
      isLoading: (state) => state.loading,
      hasError: (state) => state.error,

      getItemsList: (state) => state.driversList,
      getItemById: (state) => (itemId) => state.driversList.find((item) => item.id == itemId),
      
    },
    mutations: {
      setItemsList(state, itemsList) {
        state.driversList = itemsList
      },
      deleteItem(state, itemId){
        state.driversList = state.driversList.filter(item => item.id !== itemId)
      },
      setLoading(state, value) {
        state.loading = value
      },
      setError(state, error) {
        state.error = error
      },
    },
    actions: {
      loadList({ commit }) {
        commit('setError', null)
        commit('setLoading', true)
        collectionDB
          .loadItemsList()
          .then((list) => {
            commit('setItemsList', list)
          })
          .catch((error) => {
            commit('setError', error)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      },
      addItem({ commit, dispatch }, item) {
        commit('setError', null)
        commit('setLoading', true)
        collectionDB
          .addItem(item)
          .then(() => {
            dispatch('loadList')
          })
          .catch((error) => {
            commit('setError', error)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      },
      deleteItem({ commit }, itemId) {
        commit('setError', null)
        commit('setLoading', true)

        collectionDB
          .deleteItem(itemId)
          .then(() => {
            // dispatch('loadList')
            commit('deleteItem', itemId)
          })
          .catch((error) => {
            commit('setError', error)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      },
      updateItem({ commit, dispatch }, { itemId, data }) {
        commit('setError', null)
        commit('setLoading', true)

        collectionDB
          .updateItem(itemId, data)
          .then(() => {
            dispatch('loadList')
          })
          .catch((error) => {
            commit('setError', error)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      },
      loadFilteredData({ commit }, { fieldTitle, compareOperator, valueToCompare }) {
        commit('setError', null)
        commit('setLoading', true)
        collectionDB
          .loadFilteredData(fieldTitle, compareOperator, valueToCompare)
          .then((list) => {
            commit('setItemsList', list)
          })
          .catch((error) => {
            commit('setError', error)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      },
      loadFilteredList({commit}, filteredObj){
        commit('setError', null)
        commit('setLoading', true)
        let {name, experienceFrom, experienceTo} = filteredObj
        collectionDB
        .loadFilteredDriversList(name, experienceFrom, experienceTo)
        .then((list) => {
            commit('setItemsList', list)
          })
          .catch((error) => {
            commit('setError', error)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      }
    },
}
