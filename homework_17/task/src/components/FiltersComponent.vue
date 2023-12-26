<template>
  <div class="filters">

    <div class="filters__item filter">
      <h3 class="filter__title">{{ $t('homePage.headlines.seller') }}</h3>
      <div class="filter__item">
        <input id="roz" v-model="filteredObj.seller" key="rozetka" value="rozetka" type="checkbox" name="seller" >
        <label for="roz">Rozetka</label>
      </div>
      <div class="filter__item">
        <input id="other" v-model="filteredObj.seller" key="other" value="other" type="checkbox" name="seller" >
        <label for="other">{{ $t('homePage.headlines.otherSellers') }}</label>
      </div>
    </div>

    <div class="filters__item filter">
      <h3 class="filter__title">{{ $t('homePage.headlines.brand') }}</h3>
      <v-text-field v-model="searchBrand" class="filter__inp" :label="$t('homePage.headlines.search')"></v-text-field>
      <h3 class="filter__sub-title">{{ $t('homePage.headlines.alphabeticalList') }}</h3>
      <div class="filter__body">
        <div 
        v-for="item in filteredManufacturersList"
        :key="item"
        class="filter__item">
          <input :id="item" v-model="filteredObj.brand" :value="item" type="checkbox" name="manufacturer" >
          <label :for="item">{{ item }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


  export default {
    name: 'FiltersComponent',

    data() {
      return {
        searchBrand: null,
        filteredObj: {
          seller: [],
          brand: []
        },
      }
    },

    computed: {
      ...mapGetters('products', ['getManufacturersList']),
      filteredManufacturersList() {
        if(this.searchBrand)
        return this.getManufacturersList.filter(brand =>
          brand?.toLowerCase().includes(this.searchBrand?.toLowerCase())
        );
        else return this.getManufacturersList
      },
    },
    
    watch: {
      filteredObj: {
        handler(newValue) {
          this.updateFilter(newValue)
        },
        deep: true,
      }
    },

    methods: {
      ...mapActions('products', ['updateFilter']),
    },

  }
</script>

<style lang="scss" scoped>

.filters {
		// .filters__item
		&__item {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
}
.filter {
		// .filter__title
		&__title {
      margin-bottom: 15px;
    }
		// .filter__item
		&__item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
		// .filter__sub-title
		&__sub-title {
      margin-bottom: 15px;
    }
		// // .filter__body
		// &__body {}
    // // .filter__inp
    // &__inp{
    //   // margin-bottom: 10px;
    // }
}


</style>