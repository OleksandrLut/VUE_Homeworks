<template>
  <div class="editor">
    <div class="editor__title">{{ title }}</div>
    <div class="editor__body">
      <div class="editor__item item">
        <div class="item__title">Driver:</div>

        <select 
        v-model="selectedAppointmentObj.driverId"
        >
          <option selected disabled>select driver...</option>

          <option 
          v-for="driver in getDriversList" 
          :key="driver.id" 
          :value="driver.id"
          :disabled="isDriverSelected(driver.id)"
          >
            {{ driver.name }}
          </option>

        </select>
      </div>
      <div class="editor__item item">
        <div class="item__title">Bus:</div>

        <select 
        v-model="selectedAppointmentObj.busId"
        >
          <option selected disabled>select bus...</option>

          <option 
          v-for="bus in getBussesList" 
          :key="bus.id" 
          :value="bus.id"
          :disabled="isBusSelected(bus.id)"
          >
            {{ bus.registration }}
          </option>

        </select>
      </div>
    </div>
    <div class="editor__button">

      <button 
      :disabled="isDisabled===null"
      @click="onAdd"
      >
        Add
      </button>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'AppointmentEditor',
  props: {
    title: {
      type: String,
      default: 'New appointment'
    },
  },
  data() {
    return {
      selectedAppointmentObj: {
        driverId: null,
        busId: null,
      }
    }
  },
  computed: {
    ...mapGetters('appointment', ['isDriverSelected', 'isBusSelected']),
    ...mapGetters('drivers', ['getDriversList']),
    ...mapGetters('busses', ['getBussesList']),
    isDisabled() {
      return this.selectedAppointmentObj.driverId && this.selectedAppointmentObj.busId
    },
  },
  methods: {
    ...mapActions('appointment', ['addAppointment']),
    onAdd() {
      this.addAppointment(this.selectedAppointmentObj)
      this.selectedAppointmentObj.driverId = null
      this.selectedAppointmentObj.busId = null
    },
  },
}
</script>


<style lang="scss" scoped>
.editor {
		// .editor__title
		&__title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 30px;
    }
		// .editor__body
		&__body {
      margin-bottom: 20px;
    }
		// .editor__item
		&__item {
      display: flex;
      align-items: center;
      gap: 10px;
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
		// .editor__button
		&__button {
      button{
        padding: 5px 20px;
        border-radius: 6px;
        background-color: rgb(56, 161, 56);
        color: #000;
        transition: all 0.3s ease 0s;
        &:hover{
          background-color: rgb(61, 176, 61);
          color: #fff;
          box-shadow: 0 0 5px #fff;
        }
        &:disabled{
          background-color: rgb(85, 121, 85);
          color: #b4b4b4;
          box-shadow: 0 0 5px transparent;
          cursor: default;
        }
      }
    }
}
.item {
		// .item__title
		&__title {
      font-weight: 500;
      flex: 0 0 70px;
    }
    select{
      width: 100%;
      padding: 5px 10px;
      background-color: transparent;
      border-radius: 6px;
      border: 1px solid rgb(56, 161, 56);
      font-size: 16px;
    }
}

</style>


<!-- :disabled="isOptionDisabled" -->