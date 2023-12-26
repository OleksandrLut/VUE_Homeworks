import DbOperations from '@/store/helpers/DbOperations'
const collectionDB = new DbOperations('products')
export default {
    namespaced: true,
    state: () => ({
        products: [],

        loading: false,
        error: null,

        filteredObj: {
            seller: [],
            brand: []
        },
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,

        getItemsList: (state) => state.products,
        getItemById: (state) => (itemId) => state.products.find((item) => item.id == itemId),
        getManufacturersList: (state) => {
            return state.products.reduce((manufacturersList, currentItem) => {
                if (!manufacturersList.includes(currentItem.manufacturer)) {
                manufacturersList.push(currentItem.manufacturer);
                }
                return manufacturersList;
            }, []).sort();
        },
        getFilteredProductsList: (state) => {
            return state.products.filter(product => (
                (state.filteredObj.brand.length === 0 || state.filteredObj.brand.includes(product.manufacturer)) &&
                (state.filteredObj.seller.length === 0 || state.filteredObj.seller.includes(product.seller))
            ));
        }
    },
    mutations: {
        setItemsList(state, itemsList) {
            state.products = itemsList
        },
        deleteItem(state, itemId) {
            state.products = state.products.filter((item) => item.id !== itemId)
        },

        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
        clearStateList(state) {
          state.products = []
        },
        setFilter(state, filteredObj){
            state.filteredObj = { ...filteredObj}
        }
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
                    commit('deleteItem', itemId)
                    // dispatch('loadList')
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
        updateFilter({commit}, filteredObj){
            commit('setFilter', filteredObj)
        },
        clearStoreList({commit}){
          commit('clearStateList')
        }
    },
}
