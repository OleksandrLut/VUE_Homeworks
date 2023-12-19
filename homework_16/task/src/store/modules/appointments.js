import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('appointments')
export default {
    namespaced: true,
    state: () => ({
      appointments: [],
      loading: false,
      error: null,
    }),
    getters: {
      isLoading: (state) => state.loading,
      hasError: (state) => state.error,

      getItemsList: (state) => state.appointments,
      getItemById: (state) => (itemId) => state.appointments.find((item) => item.id == itemId),
      getAppointmentByPropertyId: (state) => (propertyId) => {
        return state.appointments.find((item) => Object.values(item).includes(propertyId)) || null;
      },
      isDriverSelected: (state) => (id) => state.appointments.some((appointment) => appointment.driverId === id),
      isBusSelected: (state) => (id) => state.appointments.some((appointment) => appointment.busId === id),
    },
    mutations: {
      setItemsList(state, itemsList) {
        state.appointments = itemsList
      },
      deleteItem(state, itemId){
        state.appointments = state.appointments.filter(item => item.id !== itemId)
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
      deleteAppointmentByItemId({ dispatch, getters }, itemId){
        const appointmentForDelete = getters.getAppointmentByPropertyId(itemId)
        console.log('appointmentForDelete');
        console.log(appointmentForDelete);
        if(appointmentForDelete) {
          const id = appointmentForDelete.id
          dispatch('deleteItem', id)
        }
      }
    },
}
