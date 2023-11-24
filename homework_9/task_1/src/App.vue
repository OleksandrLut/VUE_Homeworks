<template>
  <header-component class="header"/>
  <div class="main">
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    HeaderComponent,
  },
  computed: {
    ...mapGetters(["notebooks"])
  },
  created() {
    this.loadData();
  },
  methods: {
    ...mapActions(["loadData"]),
  },
};
</script>


<style lang="scss">
@import url(@/assets/_reset.scss);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
h1{
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 50px;
}
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.main{
  max-width: 1470px;
  margin: 0 auto;
  padding: 100px 15px 0;
}
</style>
