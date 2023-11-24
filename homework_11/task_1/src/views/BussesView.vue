<template>
  <div class="busses page">
    <div class="busses__container">
      <busses-list/>
    </div>
  </div>
</template>

<script>
import BussesList from '@/components/Busses/BussesList.vue';

  export default {
    name: "BussesView",
    components: { BussesList },
}
</script>

<style lang="scss" scoped>

</style>