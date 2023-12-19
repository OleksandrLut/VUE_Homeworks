<template>
  <div class="filters-drivers__body">
    <div class="filters-drivers__items">
      <input 
        v-model="filteredObj.name"
        type="text" 
        class="filters-drivers__item _inp _inp-large"
        placeholder="ПІБ"
      >
      <input 
        v-model="filteredObj.experienceFrom"
        type="number"  
        class="filters-drivers__item _inp _inp-small"
        placeholder="Стаж від"
      >
      <input 
        v-model="filteredObj.experienceTo"
        type="number"  
        class="filters-drivers__item _inp _inp-small"
        placeholder="Стаж до"
      >
    </div>
    <button @click="onFilterAction"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
    <button @click="onCleaarDriversFilter"><font-awesome-icon :icon="['fas', 'broom']" /></button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    name: 'DriversFilter',
    data() {
      return {
        filteredObj: {}
      }
    },
    methods: {
      ...mapActions('driversList', ['loadFilteredList', 'loadList']),
      onFilterAction() {
        this.loadFilteredList(this.filteredObj)
      },
      onCleaarDriversFilter(){
        this.filteredObj = {}
        this.loadList()
      }
    },
  }
</script>

<style lang="scss" scoped>
.filters-drivers {
		// .filters-drivers__body
		&__body {
      display: flex;
      align-items: center;
      gap: 25px;
    }
		// .filters-drivers__items
		&__items {
      display: flex;
      align-items: center;
      column-gap: 15px;
      row-gap: 5px;
      flex-wrap: wrap;
    }
		// .filters-drivers__item
		&__item {
      &::placeholder{
        font-size: 12px;
      }
    }
}

</style>