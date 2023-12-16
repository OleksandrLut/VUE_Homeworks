<template>
  <main-massterpage>
    <div class="lessons">
      <div>
        <font-awesome-icon id="icon-about" :icon="['fas', 'graduation-cap']" size = '10x' color = '#42b983' />
      </div>
      <div>
        <router-view/>
      </div>
    </div>
  </main-massterpage>
</template>

<script>
import MainMassterpage from "@/masterpages/MainMassterpage.vue";

  export default {
    name: 'LessonsView',
    components: { MainMassterpage },
  }
</script>

<style lang="scss" scoped>
.lessons{
}
#icon-about{
  transition: all 0.3s ease 0s;
  margin-bottom: 30px;
  cursor: pointer;
  &:hover{
    transform: scale(1.05);
    color: #bbb;
  }
}
</style>