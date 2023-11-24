
export default {
  namespaced: true,
  state: {
    appointmentList:[
      {
        id: 1,
        driverId:3,
        busId:2,
      },
      {
        id: 2,
        driverId:1,
        busId:1,
      }
    ]
  },
  getters: {
     getAppointmentList(state, getters, rootState, rootGetters) {
      const drivers = rootGetters['drivers/getDriversList'];
      const busses = rootGetters['busses/getBussesList'];

      const currentList = state.appointmentList.map(appointment => {

        const driver = drivers.find(driver => driver.id === appointment.driverId);

        const bus = busses.find(bus => bus.id === appointment.busId);

        return {
          id: appointment.id,
          driver: driver ? driver.name : null,
          busReg: bus ? bus.registration : null,
        };
      });

      return currentList;
    },

    isDriverSelected: (state) => (id) => state.appointmentList.some((appointment) => appointment.driverId === id),
    isBusSelected: (state) => (id) => state.appointmentList.some((appointment) => appointment.busId === id),
  },
  mutations: {
    addAppointment(state, appointmentObj){
      state.appointmentList.push(appointmentObj)
    },
    removeAppointment(state,appointmentId){
      state.appointmentList = state.appointmentList.filter((appointment)=>appointment.id !== appointmentId)
    },
    removeAppointmentByBusId(state,busId){
      state.appointmentList = state.appointmentList.filter((appointment)=>appointment.busId !== busId)
    },
    removeAppointmentByDriverId(state,driverId){
      state.appointmentList = state.appointmentList.filter((appointment)=>appointment.driverId !== driverId)
    },
  },
  actions: {
    addAppointment({commit}, appointmentObj){
      commit('addAppointment', {
        id: new Date().getTime(),
        ...appointmentObj
      })
    },
    removeAppointment({commit}, appointmentId){
      commit('removeAppointment', appointmentId)
    },
    removeAppointmentByBusId({commit}, busId){
      commit('removeAppointmentByBusId', busId)
    },
    removeAppointmentByDriverId({commit}, driverId){
      commit('removeAppointmentByDriverId', driverId)
    },
  },
  modules: {},
};