<template>
  <div class="girl-list">
      <h3 class="girl-list__title">{{ title }}</h3>
      <ul class="girl-list__body">
        <li 
        v-for="girl in girlsList"
        :key="girl.id"
        class="girl-list__item"
        :class="{
          'is-selected': isSelected(girl.id) || isInSelectedList(girl.id),
          'is-blocked': isBlocked(girl.id)
        }"
        @click="selectDancer({
          gender: 'girls',
          id: girl.id
        })"
        >
          {{ girl.name }}
        </li>
      </ul>
    </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

  export default {
    name: 'GirlsDancers',
    props: {
    title: {
      type: String,
      default: 'Girls',
    },
    },
    computed: {
      ...mapGetters(['girlsList', 'getSelectedCoupleList', 'selectedGirl', 'boysList', 'getBlockedList']),
      
    },
    methods: {
      ...mapActions(['selectDancer']),
      isInSelectedList(id){
        return this.getSelectedCoupleList.some(item => item.girls === id)
      },
      isSelected(id) {
        return this.selectedGirl === id
      },
      isBlocked(girlId) {
        const allBoysSelected = this.boysList.length === this.getSelectedCoupleList.length;
        const isBlockedGirl = this.getBlockedList.includes(girlId);
        return allBoysSelected && isBlockedGirl;
    }
  },

  }
</script>

<style lang="scss" scoped>
.girl-list {
  width: 200px;
		// .girl-list__title
		&__title {
      text-align: center;
      font-weight: 600;
      margin-bottom: 10px;
    }
		// .girl-list__body
		&__body {
      padding: 10px;
      border: 1px solid rgba(0,0,0, 0.2);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
		// .girl-list__item
		&__item {
      padding: 5px;
      background-color: rgb(41, 135, 41);
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover{
        background-color: rgb(56, 161, 56);
        transform: scale(1.03);
        box-shadow: 0 0 5px rgba(255,255,255,0.7);
        color: rgba(255,255,255,0.8);
      }
    }

    .is-selected {
      background-color: rgb(78, 121, 78);
      color: rgb(105, 97, 97);
       &:hover{
        box-shadow: 0 0 5px transparent;
        transform: scale(1);
        cursor: default;
       }
    }

    .is-blocked{
      background-color: rgb(38, 124, 38);
      box-shadow: 0 0 5px transparent;
      transform: scale(1);
      cursor: default;
      color: rgb(84, 84, 84);
    }
}

</style>