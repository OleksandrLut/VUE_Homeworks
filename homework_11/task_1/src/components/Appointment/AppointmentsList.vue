<template>
  <div class="appointments-list">
    <div class="appointments-list__title">{{ title }}</div>
    <ul class="appointments-list__body">
      <li class="appointments-list__sub-titles">
        <span>Drivers</span>
        <span>Bus registration plate</span>
      </li>
      <li 
      v-for="appointment in getAppointmentList"
      :key="appointment.id"
      class="appointments-list__item">
        <span>{{ appointment.driver }}</span>
        <span>{{ appointment.busReg }}</span>
        <button 
        class="btn-icon"
        @click="removeAppointment(appointment.id)"
        >&#x1F5D1;</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
  export default {
    name: 'AppointmentsList',
    props: {
      title: {
        type: String,
        default: 'Appointments:'
      },
    },
    data() {
      return {
        appointmentsListToShow: []
      }
    },
    computed: {
      ...mapGetters('appointment', ['getAppointmentList']),
      ...mapGetters('drivers', ['getDriversList']),
      ...mapGetters('busses', ['getBussesList']),
    },
    methods: {
      ...mapActions('appointment', ['removeAppointment'])
    },
  }
</script>

<style lang="scss" scoped>
.appointments-list {
  margin-bottom: 40px;
		// .appointments-list__title
		&__title {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 40px;
    }
		// .appointments-list__body
		&__body {
      display: grid;
      gap: 15px;
    }
    // .appointments-list__sub-titles
		&__sub-titles {
      display: flex;
      justify-content: space-around;
      gap: 20px;
      font-weight: 500;

    }
		// .appointments-list__item
		&__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #696969;
      padding: 5px 15px;
      span{
        &:nth-child(1){
          flex: 0 0 150px;
        }
      }
    }
}
.btn-icon {
  width: 30px;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,0.3);
  transition: all 0.3s ease 0s;
      &:hover{
        color: #fff;
        box-shadow: 0 0 5px #fff;
      }
}

</style>