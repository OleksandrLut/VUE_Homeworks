<template>
  <div class="home">
    <home-component/>
  </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue';


export default {
  name: "HomeView",
  components: {
    HomeComponent
  },
};
</script>
<style lang="scss">
.home{
  margin-top: -100px;
}
</style>