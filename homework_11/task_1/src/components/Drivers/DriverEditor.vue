<template>
  <div class="driver-editor page">
    <div class="driver-editor__container">
      <h2 class="driver-editor__title">{{ title }}</h2>
      <ul class="driver-editor__body">
        <li class="driver-editor__item">
          <label for="name" class="driver-editor__label">
            Name:
          </label>
          <input 
          v-model.lazy="driver.name"
          id="name" type="text" class="driver-editor__inp">
        </li>
        <li class="driver-editor__item">
            <label for="name" class="driver-editor__label">
              Experience:
            </label>
            <input 
            v-model.lazy="driver.exp"
            id="name" type="number" class="driver-editor__inp">
          </li>
      </ul>
      <button class="btn"
      @click="onAction"
      >{{ buttonTitle }}</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
  export default {
    name: 'DriverEditor',
    props: {
      title: {
        type: String,
        default: 'Driver:'
      },
    },
    data() {
      return {
        driver: {},
      }
    },
    computed: {
      ...mapGetters('drivers', ['getDriverById']),
      receivedDriverId(){
        return this.$route.params.driverId
      },
      buttonTitle() {
        return this.receivedDriverId ? 'Save' : 'Create' 
      }
    },
    created () {
      if(this.receivedDriverId)
      this.driver = {...this.getDriverById(this.receivedDriverId) }
    },
    methods: {
      ...mapActions('drivers', ['updateDriver', 'addDriver']),
      onAction(){
        if(!this.receivedDriverId) this.addDriver(this.driver)
        else this.updateDriver(this.driver)
        this.$router.push({
          name: 'drivers'
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.driver-editor {
		// .driver-editor__container
		&__container {}
		// .driver-editor__title
		&__title {
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 40px;
    }
		// .driver-editor__body
		&__body {
      width: 300px;
      margin-bottom: 30px;
    }
		// .driver-editor__item
		&__item {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
		// .driver-editor__label
		&__label {
      font-weight: 500;
    }
		// .driver-editor__inp
		&__inp {
      padding: 5px 10px;
      border-radius: 6px;
      border: 1px solid rgb(56, 161, 56);
      background-color: transparent;
    }
}
.btn {
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
}
</style>