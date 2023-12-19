<template>
  <div class="wrapper">
    <headr class="header">
      <header-component/>
    </headr>
    <main class="page">
      <div class="page__container">
        <slot></slot>
      </div>
    </main>
    <footer class="footer">
      <footer-container/>
    </footer>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterContainer from "@/components/FooterContainer.vue";

  export default {
    name: 'MainMasterPage',
    components: {
      HeaderComponent, FooterContainer,
    },
  }
</script>

<style lang="scss">
</style>