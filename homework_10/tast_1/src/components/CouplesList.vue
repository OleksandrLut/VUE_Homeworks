<template>
  <div class="couples-list">
    <h3 class="couples-list__title"></h3>
    <ul class="couples-list__body">
      <li 
      v-for="couple in getNamesById"
      :key="couple.id"
      class="couples-list__item"
      @click="removeCouple(couple.id)">
        {{ couple.boys }} - {{ couple.girls }}
      </li>
    </ul>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';


  export default {
    name: 'CouplesList',
    props: {
      title: {
        type: String,
        default: 'Selected dance couples'
      },
    },
    computed: {
      ...mapGetters(['getNamesById']),
    },
    methods: {
      ...mapActions(['removeCouple'])
    },
  }
</script>

<style lang="scss" scoped>
.couples-list {
  width: 300px;
		// .couples-list__title
		&__title {
      text-align: center;
      font-weight: 600;
      margin-bottom: 10px;
    }
		// .couples-list__body
		&__body {
      padding: 10px;
      border: 1px solid rgba(0,0,0, 0.2);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      min-height: 46px;
    }
		// .couples-list__item
		&__item {
      text-align: center;
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
}

</style>