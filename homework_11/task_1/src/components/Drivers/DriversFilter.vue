<template>
  <div class="drivers-filter">
    <h2 class="drivers-filter__title">{{ title }}</h2>
    <ul class="drivers-filter__body">

      <li class="drivers-filter__item">
        <label class="drivers-filter__label label">
          <span class="label__title">Full name</span>
          <input 
          v-model.lazy="filterObj.name"
          type="text" class="label__input">
        </label>
      </li>

      <li class="drivers-filter__item">
          <label class="drivers-filter__label label">
            <span class="label__title">Experience up</span>
            <input 
            v-model.lazy="filterObj.expUp"
            type="number" class="label__input inp-num">
          </label>
        </li>

        <li class="drivers-filter__item">
          <label class="drivers-filter__label label">
            <span class="label__title">to</span>
            <input 
            v-model.lazy="filterObj.expTo"
            type="number" class="label__input inp-num">
          </label>
        </li>
        
    </ul>
    <button class="btn"
    @click="filterObj = {}"
    >Clear</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

  export default {
    name: 'DriversFilter',
    props: {
      title: {
        type: String,
        default: 'Filters:'
      },
    },
    data() {
      return {
        filterObj: {}
      }
    },
    watch: {
        filterObj: {
          handler(newValue) {
            this.updateFilter(newValue)
          },
          deep: true
        }
    },
    methods: {
      ...mapActions('drivers', ['updateFilter'])
    },
  }
</script>

<style lang="scss" scoped>
.drivers-filter {
  padding-top: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
		// .drivers-filter__title
		&__title {
      font-weight: 600;
      font-size: 18px;
    }
		// .drivers-filter__body
		&__body {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }
		// .drivers-filter__item
		&__item {}
		// .drivers-filter__label
		&__label {
      display: flex;
      align-items: center;
      gap: 10px;
    }
}
.label {
		// .label__title
		&__title {
      font-weight: 500;
    }
		// .label__input
		&__input {
      padding: 5px 10px;
      background-color: transparent;
      border-radius: 6px;
      border: 1px solid rgb(56, 161, 56);
    }
}
.inp-num{ width: 60px;}
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