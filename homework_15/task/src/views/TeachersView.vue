<template>
  <main-massterpage>
    <div class="teachers-page">
      <div>
        <font-awesome-icon id="icon-about" :icon="['fas', 'address-card']" size = '10x' color = '#42b983' />
      </div>
      <h1 class="teachers-page__title">
        Наші вчителі:
      </h1>
      <div class="teachers-page__body">
        <teacers-by-subject-item v-for="subject in getSubjectsList" :key="subject.id" :subject-id="subject.id"/>
      </div>
    </div>
  </main-massterpage>
</template>

<script>
import TeacersBySubjectItem from "@/components/TeacersBySubjectItem.vue";
import MainMassterpage from "@/masterpages/MainMassterpage.vue";
import { mapGetters } from "vuex";

  export default {
    name: 'TeachersView',
    components: { MainMassterpage, TeacersBySubjectItem },
    computed: {
      ...mapGetters('subjects', ['getSubjectsList'])
    },
  }
</script>

<style lang="scss" scoped>
.teachers-page {
		// .teachers-page__title
		&__title {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 40px;
    }
		// .teachers-page__body
		&__body {}
}

#icon-about{
  transition: all 0.3s ease 0s;
  cursor: pointer;
  &:hover{
    transform: scale(1.2);
    color: #bbb;
  }
}
</style>