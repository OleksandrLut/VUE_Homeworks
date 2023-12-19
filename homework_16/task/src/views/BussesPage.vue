<template>
  <main-master-page>
    <div class="busses top-page-pad">
      <div class="busses__wrapper">
        <h1 class="busses__title">Наші автобуси</h1>
        <div class="busses__sub-titles">
          <span>Номер</span><span>Кільуість місць</span>
        </div>
        <div class="busses__loader" v-if="isLoading"> 
            <v-progress-circular indeterminate></v-progress-circular>
        </div>
        <div v-else-if="hasError" class="busses__error">
            <p>Помилка завантаження...</p>
        </div>
        <ul v-else class="busses__list">
          <li 
          v-for="bus in getItemsList"
          :key="bus.id"
          class="busses__item item-busses-list"
          >
            <busses-list-item :bus-item="bus"/>
          </li>
        </ul>
        <div class="busses__buttons">
          <button class="_btn" @click="onAddBusToList">Додати автобус</button>
        </div>
      </div>
      <div class="busses__editor-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import { mapGetters, mapActions } from "vuex";
import BussesListItem from "@/components/BussesListItem.vue";

  export default {
    name: 'BussesPage',
    components: { MainMasterPage, BussesListItem },
    computed: {
      ...mapGetters('bussesList', ['getItemsList', 'isLoading', 'hasError'])
    },
    created () {
      this.loadList();
    },
    methods: {
      ...mapActions('bussesList', ['loadList']),
      onAddBusToList(){
        this.$router.push({
          name: 'bus-editor',
          params: {
            title: 'add',
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.busses {
  display: flex;
  justify-content: space-between;
		// .busses__wrapper
		&__wrapper {
    }
    // .busses__loader
		&__loader {
      text-align: center;
      padding: 50px 0;
    }
		// .busses__error
		&__error {
      text-align: center;
      font-size: 30px;
      padding: 50px 0;
    }
		// .busses__title
		&__title {
      font-size: 24px;
      margin-bottom: 20px;
    }
		// .busses__sub-titles
		&__sub-titles {
      display: flex;
      gap: 50px;
      margin-bottom: 15px;
      span{
        &:first-child{
          padding-left: 60px;
        }
      }
    }
		// .busses__list
		&__list {
      margin-bottom: 25px;
    }
		// .busses__item
		&__item {
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
		// .busses__buttons
		&__buttons {}
		// .busses__editor-wrapper
		&__editor-wrapper {}
}
.top-page-pad {
}
.item-busses-list {
}


</style>