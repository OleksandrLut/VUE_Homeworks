

export default {
  namespaced: true,

  state: {
    bussesList:[
      {
        id: 1,
        registration: 'AA5443KA',
        seatsCount: 40
      },
      {
        id: 2,
        registration: 'AA3543KA',
        seatsCount: 55
      },
      {
        id: 3,
        registration: 'AA2773KE',
        seatsCount: 34
      },
    ],
  },
  getters: {
    getBussesList: (state) => state.bussesList,
    getBusById: (state) => (busId) => state.bussesList.find((bus) => bus.id == busId)
  },
  mutations: {
    removeBus(state, busId){
      state.bussesList = state.bussesList.filter((bus) => bus.id !== busId)
    },
    addBus(state, busObj){
      state.bussesList.push(busObj)
    },
    updateBus(state, busObj){
      const busIndex = state.bussesList.findIndex((bus)=>bus.id===busObj.id)
      state.bussesList[busIndex] = busObj
    }
  },
  actions: {
    removeBus({commit, dispatch}, busId){
      commit('removeBus', busId)
      dispatch(
        'appointment/removeAppointmentByBusId',
        busId,
        {root:true}
      )
    },
    addBus({commit}, busObj){
      commit('addBus',{
        id: new Date().getTime(),
        ...busObj
      })
    },
    updateBus({commit}, busObj){
      commit('updateBus', busObj)
    }
  },
  modules: {},
};