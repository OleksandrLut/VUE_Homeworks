<template>
  <div class="appointment page">
    <div class="appointment__container">
      <div class="appointment__body">
        <appointments-list/>
        <appointment-editor/>
      </div>
    </div>
  </div>
</template>

<script>
import AppointmentEditor from '@/components/Appointment/AppointmentEditor.vue';
import AppointmentsList from '@/components/Appointment/AppointmentsList.vue';
  export default {
    name: 'AppointmentView',
    components: {
    AppointmentsList,
    AppointmentEditor
},
  }
</script>

<style lang="scss" scoped>
.appointment {
		// .appointment__container
		&__container {}
		// .appointment__body
		&__body {
      width: 400px;
      margin: 0 auto;
    }
}

</style>