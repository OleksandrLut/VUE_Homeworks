<template>
  <div class="bus-editor page">
    <div class="bus-editor__container">
      <div class="bus-editor__wrap">
        <h2 class="bus-editor__title">{{ title }}</h2>
        <ul class="bus-editor__body">
          <li class="bus-editor__item">
            <label for="reg-num">Registration</label>
            <input v-model.lazy="busObject.registration" type="text" id="reg-num">
          </li>
          <li class="bus-editor__item">
            <label for="count">Seats count</label>
              <input v-model.lazy="busObject.seatsCount" type="number" id="count">
          </li>
        </ul>
        <button class="btn"
        @click="onAction"
        >{{ buttonTitle }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
  export default {
    name: 'BusEditor',
    props: {
      title: {
        type: String,
        default: 'Bus:'
      },
    },
    data() {
      return {
        busObject: {},
      }
    },
    computed: {
      ...mapGetters('busses',['getBusById']),
      receivedBusId() {
        return this.$route.params.busId 
      },
      buttonTitle(){
        return this.receivedBusId ? 'Save' : 'Create'
      }
    },
    created () {
      if(this.receivedBusId)
      this.busObject = {...this.getBusById(this.receivedBusId) }
    },
    methods: {
      ...mapActions('busses', ['addBus', 'updateBus']),
      onAction(){
        if(!this.receivedBusId){
          this.addBus(this.busObject)
        } else {
          this.updateBus(this.busObject)
        }
        this.$router.push({
          name: 'busses'
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.bus-editor {
		// .bus-editor__container
		&__container {}
    &__wrap{
      width: 300px;
      margin: 0 auto;
    }
		// .bus-editor__title
		&__title {
      text-align: center;
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 40px;
    }
		// .bus-editor__body
		&__body {
      margin-bottom: 30px;
    }
		// .bus-editor__item
		&__item {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      label{
        font-weight: 500;
      }
      input{
        padding: 5px 10px;
        border-radius: 6px;
        border: 1px solid rgb(56, 161, 56);
        background-color: transparent;
      }
    }
}
.page {
}
.btn {
  width: 100%;
  text-align: center;
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