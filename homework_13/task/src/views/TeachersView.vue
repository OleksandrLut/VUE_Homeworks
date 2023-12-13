<template>
  <div class="teachers page">
    <div class="teachers__container">
      <teachers-list/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TeachersList from "@/components/TeachersList.vue";

  export default {
    name: 'TeachersView',
    components: {
    TeachersList,
  },
  computed: {
    ...mapGetters('teachersModule', ['teachersList'])
  },
  created() {
    this.loadData()
  },
  methods: {
    ...mapActions('teachersModule', ['loadData'])
  },
  }
</script>

<style lang="scss" scoped>

</style>