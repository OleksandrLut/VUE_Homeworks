<template>
  <div class="select-list">
    <subject-teachres-selector
    v-for="(itemId, index) in subjectId"
    :key="index+1"
    :subject-id="itemId"
    @teacher-selected="onTeachwrSlected( itemId, $event)"
    />
  </div>
  <div class="select-list__button">
    <button class="btn" @click="onStudyStart">Розпочати навчання</button>
  </div>
</template>

<script>
import SubjectTeachresSelector from "@/components/SubjectTeachresSelector.vue";
  export default {
    name: 'TeachersSelectView',
    components: {
      SubjectTeachresSelector,
    },
    props: {
      subjectId: {
        type: Array,
        default: ()=>[],
      },
    },
    data() {
      return {
        lessons: {},
      }
    },
    methods: {
      onTeachwrSlected(subjId, teacherId) {
        this.lessons[subjId] = teacherId
      },
      onStudyStart(){
        const lessonsIdsPairs = Object.entries(this.lessons)
        .map(([lessonId, teacherId]) => lessonId + '-' + teacherId);
        // console.log(lessonsIdsPairs);
        this.$router.push({
          name: 'study-plan',
          params: {
            lessonsIdsPairs,
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.select-list{
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
</style>