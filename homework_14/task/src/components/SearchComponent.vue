<template>
  <div class="search">
    <input type="text" v-model="searchVal">
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


  export default {
    name: 'SearchComponent',
    computed: {
      ...mapGetters(['getSearchValue']),
      searchVal: {
        get(){
          return this.getSearchValue
        },
        set(newVal){
          this.updateSearchVal(newVal)
        }
      }
    },
    methods: {
      ...mapActions(['updateSearchVal'])
    },
  }
</script>

<style lang="scss" scoped>
.search {
  input{
    padding: 5px 10px;
    border-radius: 8px;
    border: 2px solid rgb(56, 161, 56);
    background-color: transparent;
  }
}

</style>