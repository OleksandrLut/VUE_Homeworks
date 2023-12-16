<template>
  <div class="teacers-by-subject-item">
    <h3 class="teacers-by-subject-item__title">
      {{ subjectTitle }}
    </h3>
    <ul class="teacers-by-subject-item__list">
      <li
      v-for="teacher in currrntTeachersList"
      :key="teacher.id"
      >
      {{ teacher.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    name: 'TeacersBySubjectItem',
    props: {
      subjectId: {
        type: Number,
        required: true, 
      },
    },
    computed: {
      ...mapGetters('subjects', ['getSubjectById']),
      ...mapGetters('teachers', ['getTeachersBySubjectId']),
      subjectTitle(){
        return this.getSubjectById(this.subjectId).title
      },
      currrntTeachersList(){
        return this.getTeachersBySubjectId(this.subjectId)
      },
    },
  }
</script>

<style lang="scss" scoped>
.teacers-by-subject-item {
		// .teacers-by-subject-item__title
		&__title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 15px;
    }
		// .teacers-by-subject-item__list
		&__list {
      margin-bottom: 25px;
      li{
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
}

</style>