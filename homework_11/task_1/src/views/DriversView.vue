<template>
  <div class="drivers page">
      <div class="drivers__container">
        <drivers-list/>
        <drivers-filter/>
      </div>
    </div>
</template>

<script>
import DriversFilter from "@/components/Drivers/DriversFilter.vue";
import DriversList from "@/components/Drivers/DriversList.vue";
import { mapGetters } from "vuex";
  export default {
    name: "DriversView",
    components: { DriversList, DriversFilter },
    computed: {
        ...mapGetters("drivers", ["getDriversList"])
    },
}
</script>

<style lang="scss" scoped>
.drivers__container{
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>