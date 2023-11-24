<template>
  <div class="boys-list">
    <h3 class="boys-list__title">{{ title }}</h3>
    <ul class="boys-list__body">
      <li 
      v-for="boy in boysList"
      :key="boy.id"
      class="boys-list__item"
      :class="{
        'is-selected': isSelected(boy.id) || isInSelectedList(boy.id)
      }"
      @click="selectDancer({
        gender: 'boys',
        id: boy.id
      })"
      >
        {{ boy.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

  export default {
    name: 'BoysDancers',
    props: {
      title: {
        type: String,
        default: 'Boys',
      },
    },
    computed: {
      ...mapGetters(['boysList', 'getSelectedCoupleList', 'selectedBoy'])
    },
    methods: {
      ...mapActions(['selectDancer']),
      isInSelectedList(id){
        return this.getSelectedCoupleList.some(item=>item.boys === id)
      },
      isSelected(id){
        // if(this.selectedDancer)
        return this.selectedBoy === id
      },
    },
  }
</script>

<style lang="scss" scoped>
.boys-list {
  width: 200px;
		// .boys-list__title
		&__title {
      text-align: center;
      font-weight: 600;
      margin-bottom: 10px;
    }
		// .boys-list__body
		&__body {
      padding: 10px;
      border: 1px solid rgba(0,0,0, 0.2);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
		// .boys-list__item
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
}

</style>