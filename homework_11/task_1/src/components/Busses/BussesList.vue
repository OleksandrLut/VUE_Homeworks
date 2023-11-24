<template>
  <div class="busses-list">
    <h2 class="busses-list__title">{{ title }}</h2>
    <div class="busses-list__sub-titles">
      <h4>Registration</h4>
      <h4>Number of seats</h4>
    </div>
    <div class="busses-list__body">
      <bus-item 
      v-for="bus in getBussesList"
      :key="bus.id"
      :busObj="bus"/>
    </div>
    <div class="busses-list__button">
      <button class="busses-list__btn"
      @click="onEdit"
      >Add bus</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BusItem from './BusItem.vue';


  export default {
    name: "BussesList",
    props: {
        title: {
            type: String,
            default: "Our busses:"
        },
    },
    components: { BusItem },
    computed: {
      ...mapGetters('busses', ['getBussesList',])
    },
    methods: {
      onEdit() {
        this.$router.push({
          name: 'editor_bus'
        })
      }
    },
}
</script>

<style lang="scss" scoped>
.busses-list {
  margin: 0 auto;
  width: 320px;
		// .busses-list__title
		&__title {
      text-align: center;
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 40px;
    }
		// .busses-list__sub-titles
		&__sub-titles {
      font-weight: 500;
      display: flex;
      gap: 10px;
      justify-content: space-between;
      margin-bottom: 20px;
      h4:nth-child(1){
        padding-left: 10px;
      }
      h4:nth-child(2){
        padding-right: 40px;
      }
    }
		// .busses-list__body
		&__body {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 30px;
    }
    &__button{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__btn{
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
}

</style>