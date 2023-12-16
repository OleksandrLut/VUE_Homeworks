<template>
    <div class="lessons-select">
      <h1 class="lessons-select__title">Виберіть уроки:</h1>
    </div>

      <div class="lessons-select__body">

        <ul class="lessons-select__list">
          <li 
          v-for="lesson in getSubjectsList"
          :key="lesson.id"
          class="lessons-select__item">
            <input id="lesson" v-model="seletedSubjects" type="checkbox" :value="lesson.id">
            <label for="lesson">{{ lesson.title }}</label>
          </li>
        </ul>

      </div>
      <div class="lessons-select__button">
        <button 
        class="btn"
        :disabled="!seletedSubjects.length"
        @click="onSelect"
        >Вибрати вчителів</button>
      </div>
</template>

<script>
import { mapGetters } from "vuex";

  export default {
    name: 'LessonsSelectView',
    data() {
      return {
        seletedSubjects: [],
      }
    },
    computed: {
      ...mapGetters('subjects', ['getSubjectsList'])
    },
    methods: {
      onSelect() {
        this.$router.push({
          name: "teachers-select",
          params: {
            subjectId: this.seletedSubjects
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.lessons-select {
		// .lessons-select__title
		&__title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
    }
		// .lessons-select__body
		&__body {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
    }
		// .lessons-select__list
		&__list {
      width: 150px;
      display: grid;
      gap: 10px;
    }
		// .lessons-select__item
		&__item {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    // .lessons-select__button
    &__button{}
}

</style>