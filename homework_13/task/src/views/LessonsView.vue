<template>
  <div class="lessons page">
    <h2 class="lessons__title title-page">Виберіть уроки:</h2>
    <ul class="lessons__body">
      <li 
      v-for="lesson in lessonsList"
      :key="lesson.id"
      class="lessons__item">
        <label>
          <span>{{ lesson.title }}</span>
          <input 
          v-model="lessonsChosenList"
          :value="lesson.id"
          type="checkbox">
        </label>
      </li>
    </ul>
    <div class="lessons__button">
      <button
      class="btn"
      :disabled="lessonsChosenList.length === 0"
      @click="onAction"
      >
        Вибрати вчителів
      </button>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "LessonsView",
  data() {
    return {
      lessonsChosenList: []
    }
  },
  computed: {
    ...mapGetters('lessonsModule', ['lessonsList'])
  },
  methods: {
    onAction(){
      this.$router.push({
        name: 'selectedLessons',
        params: { selected_lessons_id_list: this.lessonsChosenList }
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.lessons {
  width: 300px;
  margin: 0 auto;
		// .lessons__title
		&__title {
    }
		// .lessons__body
		&__body {
      font-size: 16px;
      display: grid;
      gap: 10px;
      margin-bottom: 30px;
    }
		// .lessons__item
		&__item {
      label{
        display: flex;
        align-items: center;
        gap: 15px;
        span{
          flex: 1 1 auto;
        }
        input{
          flex: 0 0 auto;
        }
      }
    }
    &__button{
      text-align: center;
    }
}
</style>