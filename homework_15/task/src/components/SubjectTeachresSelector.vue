<template>
  <div class="list-item">
    <label for="select-item">{{ subjectTitle }}</label>
    <select id="select-item" v-model="selectedTeacher" @change="onChange">
      <option>Оберіть вчителя</option>
      <option 
      v-for="teacher in getTeachersBySubjectId(subjectId)"
      :key="teacher.id"
      :value="teacher.id">{{ teacher.name }}</option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    name: 'SubjectTeachresSelector',
    props: {
      subjectId: {
        type: [ Number, String ],
        require: true, 
      },
    },
    emits: ['teacher-selected'],
    data() {
      return {
        selectedTeacher: null,
      }
    },
    computed: {
      ...mapGetters('teachers', ['getTeachersBySubjectId']),
      ...mapGetters('subjects', ['getSubjectById']),
      subjectTitle(){
        return this.getSubjectById(parseInt(this.subjectId)).title
      }
    },
    methods: {
      onChange() {
        this.$emit('teacher-selected', this.selectedTeacher)
      }
    },
  }
</script>

<style lang="scss" scoped>
.list-item{
  width: 400px;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  select{
    min-width: 260px;
    border: 1px solid #d3dfe5;
    border-radius: 8px;
    padding: 2px 10px;
  }
}
</style>