<template>
  <main-master-page>
    <div class="appointments top-page-pad">
        <h1 class="appointments__title">Призначення</h1>
        <div class="appointments__sub-titles">
          <span>Водій</span><span>Автобус</span>
        </div>

        <div v-if="isDriversLoding"><v-progress-circular indeterminate></v-progress-circular></div>
        <div v-else-if="isDriversError">Error</div>
        <ul v-else class="appointments__list">

          <li 
          v-for="appointment in getItemsList"
          :key="appointment.id"
          class="appointments__item"
          >
            <span>{{ getDriverById(appointment.driverId)?.name }}</span>
            <span>{{ getBussesById(appointment.busId)?.registration }}</span>
            <button class="btn-del"><font-awesome-icon :icon="['far', 'trash-can']" /></button>
          </li>
        </ul>

        <h2 class="appointments__form-title">Нове призначеня</h2>
        <div v-if="isDriversLoding && isBussesLoading"><v-progress-circular indeterminate></v-progress-circular></div>
        <div v-else-if="isBussesError">Error</div>
        <div v-else class="appointments__form form-appointments">
          <div class="form-appointments__item">
            <label for="driver-sel">Водій</label>
            <!-- ========== DRIVER-SELECT-ITERATION ============= -->
            <select 
            v-model="appointmedObj.driverId"
            name="drivers-select" 
            id="driver-sel" 
            class="_inp">
              <option disabled selected>Виберіть водія</option>
              <!-- ------- iteration-otion --------- -->
              <option
              v-for="driver in getDriversList"
              :key="driver.id"
              :value="driver.id"
              :disabled="isDriverSelected(driver.id)"
              >
                {{ driver.name }}
              </option>
              <!-- --------------------------------- -->
            </select>
          </div>
              
          <div class="form-appointments__item">
            <label for="bus-sel">Автобус</label>
            <!-- ========== BUS-SELECT-ITERATION ============= -->
            <select 
            v-model="appointmedObj.busId"
            name="bus-select" 
            id="bus-sel" 
            class="_inp">
              <option disabled selected>Виберіть автобус</option>
              <!-- ------- iteration-otion --------- -->
              <option 
              v-for="bus in getBussesList"
              :key="bus.id"
              :value="bus.id"
              :disabled="isBusSelected(bus.id)"
              >
                {{ bus.registration }}
              </option>
              <!-- --------------------------------- -->
            </select>
          </div>
        </div>
        <div class="appointments__button">
          <!-- ========== BUTTON-ADD-APPOINTMENT ============= -->
          <button class="_btn" @click="onAppointmentAction" :disabled="!appointmedObj.driverId || !appointmedObj.busId">Призначити</button>
        </div>

    </div>
  </main-master-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MainMasterPage from "@/masterpages/MainMasterPage.vue";

  export default {
    name: 'AppointmentsPage',
    components: { MainMasterPage,   },
    data() {
      return {
        appointmedObj: {}
      }
    },
    computed: {
      ...mapGetters('appointments', ['isLoading', 'hasError', 'getItemsList', 'isDriverSelected', 'isBusSelected',]),
      ...mapGetters('driversList', { getDriversList: 'getItemsList' }),
      ...mapGetters('driversList', { getDriverById: 'getItemById' }),
      ...mapGetters('driversList', { isDriversLoding: 'isLoading' }),
      ...mapGetters('driversList', { isDriversError: 'hasError' }),
      ...mapGetters('bussesList', { getBussesList: 'getItemsList' }),
      ...mapGetters('bussesList', { getBussesById: 'getItemById' }),
      ...mapGetters('bussesList', { isBussesLoading: 'isLoading' }),
      ...mapGetters('bussesList', { isBussesError: 'hasError' }),
    },
    created () {
      this.loadList()
      this.loadDriversList()
      this.loadBussesList()
    },
    methods: {
      ...mapActions('appointments', ['loadList', 'addItem', 'deleteItem']),
      ...mapActions('driversList', { loadDriversList: 'loadList' }),
      ...mapActions('bussesList', { loadBussesList: 'loadList' }),
      onAppointmentAction(){
        this.addItem(this.appointmedObj)
        this.appointmedObj={}
      }
    },
  }
</script>

<style lang="scss" scoped>
.appointments {
		// .appointments__title
		&__title {
      font-size: 24px;
      margin-bottom: 20px;
    }
		// .appointments__sub-titles
		&__sub-titles {
      display: flex;
      gap: 20px;
      margin-bottom: 15px;
      span{
        flex: 0 0 150px;
        text-align: center;
      }
    }
		// .appointments__list
		&__list {
      margin-bottom: 20px;
      min-height: 200px;
    }
		// .appointments__item
		&__item {
      display: flex;
      align-items: center;
      column-gap: 20px;
      span{
        flex: 0 0 150px;
        text-align: center;
      }
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
		// .appointments__form-title
		&__form-title {
      font-size: 18px;
      margin-bottom: 20px;
    }
    // .appointments__form
		&__form {
      margin-bottom: 30px;
    }
		// .appointments__button
		&__button {}
}
.form-appointments {
		// .form-appointments__item
		&__item {
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      label{
        flex: 0 0 80px;
      }
      select{
        flex: 0 0 170px;
      }
    }
}
.btn-del {
  padding: 0 10px;
  transition: all 0.3s ease 0s;
  &:hover{
    transform: scale(1.2);
  }
  &:active{
    transform: scale(1);
  }
  &:disabled{
    cursor: default;
    color: #c5d8d8;
  }
}
</style>