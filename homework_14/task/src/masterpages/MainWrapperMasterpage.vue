<template>
  <header-component/>
  <div class="main">
    <div class="main__container">

      <slot></slot>

    </div>
  </div>
</template>

<script>

import HeaderComponent from "@/components/HeaderComponent.vue";

  export default {
    name: 'MainWrapperMasterpage',
    components: {
      HeaderComponent,
    },
  }
</script>

<style lang="scss" scoped>
.main {
		// .main__container
		&__container {
      font-size: 22px;
    }
}

</style>