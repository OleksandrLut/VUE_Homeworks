<template>
  <div class="study-plan">
    <div class="study-plan__title">Навчальний план:</div>
    <ul class="study-plan__list plan-list">
      <li 
      v-for="item in lessonsIdsPairs"
      :key="item"
      class="plan-list__item">
        <lesson-pair-item :item-pair="item"/>
      </li>
    </ul>
  </div>
</template>

<script>
import LessonPairItem from '@/components/LessonPairItem.vue';

  export default {
    name: 'StudyPlanView',
    props: {
        lessonsIdsPairs: {
            type: Array,
            default: () => [],
        },
    },
    components: { LessonPairItem },
}
</script>

<style lang="scss" scoped>
.study-plan {
		// .study-plan__title
		&__title {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 30px;
    }
		// .study-plan__list
		&__list {}
}
.plan-list {
		// .plan-list__item
		&__item {
      span{
        font-size: 18px;
      }
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
}

</style>