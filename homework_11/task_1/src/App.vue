<template>
  <div class="wrapper">
    <header-component />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
}
</script>

<style lang="scss">
@import url(@/assets/_reset.scss);

body {
  background-color: #737373;
}

.wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

[class*="__container"] {
  max-width: 1470px;
  padding: 0 15px;
  margin: 0 auto;
}

[class*="__container"] {
  max-width: 1470px;
  padding: 0 15px;
  margin: 0 auto;
}

.page {
  padding-top: 50px;
}

[class*="__title-pag"] {
  margin-bottom: 40px;
  font-weight: 600;
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    bottom: -5px;
    left: 0;
    background-color: rgb(56, 161, 56);
    position: absolute;
  }
}</style>

