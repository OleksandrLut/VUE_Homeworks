<template>
  <div class="drivers-list">
    <h2 class="drivers-list__title">{{ title }}</h2>
    <div class="drivers-list__body">
      <div class="drivers-list__sub-titles">
        <h4>Full name</h4>
        <h4>Experience</h4>
      </div>
      <ul class="drivers-list__items">
        <li 
        v-for="driver in getFilteredDriversList"
        :key="driver.id"
        class="drivers-list__item">
          <span>{{ driver.name }}</span>
          <span>{{ driver.exp }}</span>
          <button class="btn-icon"
          @click="onEdit(driver.id)"
          >&#x270E;</button>
          <button class="btn-icon"
          @click="removeDriver(driver.id)"
          >&#x1F5D1;</button>
        </li>
      </ul>
    </div>
    <button class="btn"
    @click="toDriverEditor"
    >Add driver</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


  export default {
    name:'DriversList',
    props: {
      title: {
        type: String,
        default: 'Our drivers:'
      },
    },
    computed: {
      ...mapGetters('drivers',['getFilteredDriversList', 'filteredDriversObj'])
    },
    // created () {
    //   this.filteredDriverList = this.getDriversList;
    // },
    methods: {
      ...mapActions('drivers', ['removeDriver']),
      toDriverEditor(){
        this.$router.push({
          name: 'editor',
        })
      },
      onEdit(id){
        this.$router.push({
          name: 'editor',
          params: {
            driverId: id,
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.drivers-list {
  width: 320px;
		// .drivers-list__title
		&__title {
      text-align: center;
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 40px;
    }
		// .drivers-list__body
		&__body {
      margin-bottom: 30px;

    }
		// .drivers-list__sub-titles
		&__sub-titles {
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-evenly;
      margin-bottom: 20px;
      padding-right: 40px;
    }
		// .drivers-list__items
		&__items {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
		// .drivers-list__item
		&__item {
      background-color: #696969;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      padding: 5px 15px;
      span:nth-child(1){
        flex: 0 0 150px;
        width: 100px;
      }
      span:nth-child(2){
        flex: 0 0 40px;
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