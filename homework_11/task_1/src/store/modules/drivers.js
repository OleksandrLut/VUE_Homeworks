import { isCorrespondToFilter } from "@/store/helpers";

export default {
  namespaced: true,

  state: {
    driversList:[
      {
        id:1,
        name: 'Ivanov R.M.',
        exp:12,
      },
      {
        id:2,
        name: 'Petrenco D.K.',
        exp:8,
      },
      {
        id:3,
        name: 'Kopernik S.D.',
        exp:19,
      },
    ],
    filteredDriversObj: {},
  },
  getters: {
    getDriversList: (state) => state.driversList,
    getDriverById: (state) => (driverId) => state.driversList.find((driver)=>driver.id == driverId),
    getFilteredDriversList: (state) => state.driversList.filter((driver)=>isCorrespondToFilter(driver, state.filteredDriversObj))
  },
  mutations: {
    removeDriver(state, driverId){
      state.driversList = state.driversList.filter((driver) => driver.id !== driverId)
    },
    setFilter(state, filteredDataObj){
      state.filteredDriversObj = filteredDataObj
    },
    addDriver(state, driver){
      state.driversList.push(driver)
    },
    updateDriver(state, driver){
      const driverIndex = state.driversList.findIndex(item=>item.id === driver.id)
      state.driversList[driverIndex] = driver
    }
  },
  actions: {
    removeDriver({commit, dispatch}, driverId){
      commit('removeDriver', driverId)
      dispatch(
        'appointment/removeAppointmentByDriverId',
        driverId,
        {root:true}
      )
    },
    updateFilter({commit}, filteredDataObj){
      commit('setFilter', filteredDataObj)
    },
    addDriver({commit}, driver){
      commit('addDriver',{
        id: new Date().getTime(),
        ...driver
      })
    },
    updateDriver({commit}, driver){
      commit('updateDriver', driver)
    }
  },
  modules: {},
};
