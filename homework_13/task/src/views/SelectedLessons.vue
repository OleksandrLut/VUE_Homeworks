<template>
  <div class="list page">
    <h2 class="list__title title-page">Виберіть вчителів:</h2>
    <ul class="list__body">
      <li v-for="lessonId in selected_lessons_id_list" :key="lessonId" class="list__item">
        <div>{{ getlessonById(lessonId).title }}</div>
        <select v-model="selectedTeachersIdList[lessonId]">
          <option disabled value="">виберіть вчителя</option>
          <option v-for="teacher in getTeachersListByLessonId(lessonId)" :key="teacher.id" :value="teacher.id">
          </option>
        </select>
      </li>
    </ul>
    <div class="list__button">
      <button 
      class="btn" 
      :disabled="isDisabled"
      @click="onActionList">
        Розпочати навчання
      </button>
    </div>
    <div>{{ selectedTeachersIdList }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'SelectedLessons',
  props: {
    selected_lessons_id_list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedTeachersIdList: {}
    }
  },
  computed: {
    ...mapGetters('teachersModule', ['teachersList', 'getTeachersListByLessonId']),
    ...mapGetters('lessonsModule', ['getlessonById']),
    isDisabled() {
      if (Object.keys(this.selectedTeachersIdList).length < this.selected_lessons_id_list.length) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    onActionList() {
      const lessonTeacherPairsArray = Object.entries(this.selectedTeachersIdList)
        .map(([lessonId, teacherId]) => lessonId + '-' + teacherId);

      console.log('pairs', lessonTeacherPairsArray);
      this.$router.push({
        name: 'lessonTeacherPairs',
        params: {
          lessonTeacherPairs: lessonTeacherPairsArray
        }
      });
    }
  },
}
</script>




<style lang="scss" scoped>

.list {
  width: 370px;
  margin: 0 auto;
		// .list__title
		&__title {
    }
		// .list__body
		&__body {
      display: grid;
      gap: 15px;
      margin-bottom: 30px;
    }
		// .list__item
		&__item {
      display: flex;
      align-items: center;
      font-size: 16px;
      gap: 10px;
      justify-content: space-between;
      select{
        flex: 0 0 240px;
        padding: 5px 10px;
        border-radius: 8px;
      }
      div{
        flex: 1 1 auto;
      }
    }
    &__button{
      text-align: center;
    }
}


</style>