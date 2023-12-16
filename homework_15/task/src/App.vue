<template>
  <router-view />
</template>

<style lang="scss">
@import url("@/assets/_reset.scss");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btn{
  background-color: #00dcbf;
  padding: 6px 20px;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 17px;
  transition: all 0.3s ease 0s;
  &:hover{
    background-color: rgb(134, 197, 172);
  }
  &:disabled{
    background-color: #d3dfe5;
    cursor: default;
  }
}
</style>
