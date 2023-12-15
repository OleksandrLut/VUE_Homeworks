<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import url(@/assets/style/_reset.scss);
@import url(@/assets/style/common.scss);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.page__container{
  position: relative;
  .button {
    position: absolute;
    top: 10px;
    right: 0;
    width: 150px;
    text-align: right;
    .btn {
      margin-bottom: 10px;
    }
  }
}
.massage {
}
.account{
  span{
    font-weight: 600;
    text-transform: capitalize;
  }
}
</style>
