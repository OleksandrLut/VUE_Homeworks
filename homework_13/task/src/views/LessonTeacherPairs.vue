<template>
  <div class="pairs page">
    <h2 class="pairs__title title-page">Навчальний план</h2>
    <div class="pairs__body">
      <div 
      v-for="(item, index) in lessonTeacherPairs"
      :key="index"
      class="pairs__item">
        <span>{{ getlessonById(item[0]).title }}</span>
        -
        <span>{{ getTeacherById(item[2]).name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    name: 'LessonTeacherPairs',
    props: {
      lessonTeacherPairs: {
        type: Array,
        required: true, 
      },
    },
    computed: {
      ...mapGetters('lessonsModule', ['getlessonById']),
      ...mapGetters('teachersModule', ['getTeacherById'])
    },
  }
</script>

<style lang="scss" scoped>
.pairs {
		// .pairs__title
		&__title {}
		// .pairs__body
		&__body {
      margin: 0 auto;
      width: 400px;
      display: grid;
      gap: 20px;
    }
		// .pairs__item
		&__item {
      font-size: 18px;
      display: flex;
      justify-content: space-between;
    }
}
.page {
}
.title-page {
}

</style>