<template>
  <div>
    <strong>{{ subjectTitle }}</strong>
    -
    <span>{{ teacherName }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LessonPairItem',
  props: {
    itemPair: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters('teachers', ['getTeacherById']),
    ...mapGetters('subjects', ['getSubjectById']),
    subjectId() {
      return parseInt(this.itemPair.split('-')[0]);
    },
    teacherId() {
      return parseInt(this.itemPair.split('-')[1]);
    },
    subjectTitle() {
      return this.getSubjectById(this.subjectId)?.title;
    },
    teacherName() {
      return this.getTeacherById(this.teacherId)?.name;
    },
  },
};
</script>

<style lang="scss" scoped></style>
