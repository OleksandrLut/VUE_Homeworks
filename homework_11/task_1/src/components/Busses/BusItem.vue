<template>
  <div class="bus-item">
    <div class="bus-item__body">
      <div class="bus-item__registration">{{ busObj.registration }}</div>
      <div class="bus-item__seat-places-count">{{ busObj.seatsCount }}</div>
      <button class="btn-icon"
      @click="onEdit"
      >&#x270E;</button>
      <button class="btn-icon"
      @click="onRemove"
      >&#x1F5D1;</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

  export default {
    name: 'BusItem',
    props: {
      busObj: {
        type: Object,
        required: true, 
      },
    },
    methods: {
      ...mapActions('busses', ['removeBus']),
      onRemove(){
        console.log(this.busObj.id);
        this.removeBus(this.busObj.id)
      },
      onEdit(){
        this.$router.push({
          name: 'editor_bus',
          params: {
            busId: this.busObj.id
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.bus-item {
  background-color: #696969;
  padding: 5px 15px;
		// .bus-item__body
		&__body {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
    }
		// .bus-item__registration
		&__registration {
      flex: 0 0 120px;
    }
		// .bus-item__seat-places-count
		&__seat-places-count {}
		// .bus-item__btn

    .btn-icon{
      width: 30px;
      border-radius: 6px;
      border: 1px solid rgba(0,0,0,0.3);
      transition: all 0.3s ease 0s;
      &:hover{
        color: #fff;
        box-shadow: 0 0 5px #fff;
      }
    }
}

</style>