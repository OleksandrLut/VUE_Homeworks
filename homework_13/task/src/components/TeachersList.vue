<template>
  <div class="teachers-list">
    <h2 class="teachers-list__title">{{ title }}</h2>
    <div class="teachers-list__body">
      <div 
      v-for="(teacher, index) in getSortedTeachersList"
      :key="teacher.id"
      class="teachers-list__item item">
        <h3 class="item__title">
          {{ index+1 }} - {{ teacher.name }} <br>
        </h3>
        <div class="item__class">
          <span>Предмет:</span> {{ getlessonById(teacher.subjectId).title }}
        </div>
        <p class="item__content">
          {{ teacher.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
  export default {
    name: 'TeachersList',
    props: {
      title: {
        type: String,
        default: 'Список вчителів:'
      },
    },
    computed: {
      ...mapGetters('teachersModule', ['getSortedTeachersList']),
      ...mapGetters('lessonsModule', ['getlessonById'])
    },
  }
</script>

<style lang="scss" scoped>
.teachers-list {
    &__title{
      font-size: 20px;
      margin-bottom: 30px;
    }
		// .teachers-list__body
		&__body {}
		// .teachers-list__item
		&__item {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
}
.item {
		// .item__title
		&__title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    &__class{
      margin-bottom: 8px;
      span{
        font-weight: 600;
      }
    }
		// .item__content
		&__content {}
}

</style>