<template>
  <div class="wrapper">

    <header class="header">
      <header-component/>
    </header>

    <main class="page">
      <slot></slot>
    </main>

    <footer class="footer">
      <footer-component/>
    </footer>


  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

  export default {
    name: 'MainMasterpage',
    components: { HeaderComponent, FooterComponent },
  }
</script>

<style lang="scss" scoped>

</style>