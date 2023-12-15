<template>
  <div class="provisors-list">
    <div 
    v-for="provisor in provisors"
    :key="provisor.id"
    class="provisors-list__item">
      <item-card 
        :imageSrc="provisor.imgSrc"
        :cardTitle="provisor.title"
      >
        <span
        v-for="(icon, index) in provisor.icons"
        :key="index+1"
        v-html="icon"
        ></span>
      </item-card>
    </div>
  </div>
</template>

<script>
import ItemCard from './ItemCard.vue';
import { mapActions, mapGetters } from 'vuex';


  export default {
    name: 'ProvisorsComponent',
    components: { ItemCard },
    computed: {
      ...mapGetters(['provisors'])
    },
    created () {
      this.loadProvisors();
    },
    methods: {
      ...mapActions(['loadProvisors']),
    },
  }
</script>

<style lang="scss" scoped>

.provisors-list {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
		// .provisors-list__item
		&__item {
      span{
        padding: 10px;
      }
    }
}

</style>