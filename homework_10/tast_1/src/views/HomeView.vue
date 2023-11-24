<template>
  <div class="home page">
    <div class="home__container">
      <h1 class="home__title-page">
          App page
        </h1>
        <div class="home__body">
          <div class="home__block">
            <boys-dancers/>
            <girls-dancers/>
          </div>
          <button
          :disabled="isDisabled"
          class="home__btn"
          @click="addCouple"
          >
            Add
          </button>
          <div class="home__res-block">
            <couples-list/>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BoysDancers from '@/components/BoysDancers.vue';
import CouplesList from '@/components/CouplesList.vue';
import GirlsDancers from '@/components/GirlsDancers.vue';
import { mapActions, mapGetters } from 'vuex';


export default {
  name: "HomeView",
    components: {
    BoysDancers,
    GirlsDancers,
    CouplesList
},
  computed: {
    ...mapGetters(['selectedBoy', 'selectedGirl']),
    isDisabled() {
      return (!this.selectedGirl || !this.selectedBoy)
    }
  },
  created () {
    this.loadData();
  },
  methods: {
    ...mapActions(['loadData', 'addCouple']),
  },
};
</script>

<style lang="scss" scoped>
.home {
		// .home__container

		// .home__title-page

		// .home__body
		&__body {
      display: grid;
      gap: 30px;
      
    }
		// .home__block
		&__block {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    // .home__btn
    &__btn{
      background-color: rgb(211, 7, 75);
      padding: 5px 25px;
      border-radius: 6px;
      font-weight: 600;
      color: rgb(160, 160, 160);
      justify-self: center;
      transition: all 0.3s ease 0s;
      &:hover{
        background-color: rgb(251, 6, 88);
        color: #fff;
        box-shadow: 0 0 5px #ffffff;
      }
      &:disabled{
        background-color: grey;
        color: rgb(97, 97, 97);
        cursor: default;
        box-shadow: 0 0 5px transparent;
      }
    }
    // .home__res-block
    &__res-block{
      display: flex;
      justify-content: center;
    }
}




</style>