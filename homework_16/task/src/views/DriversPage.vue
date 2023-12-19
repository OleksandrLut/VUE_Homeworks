<template>
  <main-master-page>
    <div class="drivers top-page-pad">
      <div class="drivers__wrapper">
        <div class="drivers__main">
          <div class="drivers__filters filters-drivers">
            <drivers-filter/>
          </div>
          <div class="drivers__list list-drivers">
            <h2 class="list-drivers__title">Наші водії:</h2>
            <div class="drivers__loader" v-if="isLoading"> 
              <v-progress-circular indeterminate></v-progress-circular>
            </div>
            <div v-else-if="hasError" class="drivers__error">
              <p>Помилка завантаження...</p>
            </div>
            <template v-else>
              <div class="list-drivers__subtitles">
                <span>ПІБ</span>
                <span>Стаж</span>
              </div>
              <div class="list-drivers__body">
                <drivers-list-item 
                v-for="driver in getItemsList"
                :key="driver.id"
                :driverItem="driver"
                />
              </div>
              <div class="list-drivers__button">
                <button class="_btn" @click="onAddDriver" :disabled="isOnDriverEditorRoute">Додати водія</button>
              </div>
            </template>
          </div>
        </div>
        <div class="drivers__editor editor-driver">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import { mapGetters, mapActions } from "vuex";
import DriversListItem from "@/components/DriversListItem.vue";
import DriversFilter from "@/components/DriversFilter.vue";


  export default {
    name: 'DriversPage',
    components: { MainMasterPage, DriversListItem, DriversFilter },
    computed: {
      ...mapGetters('driversList', ['getItemsList', 'isLoading' , 'hasError']),
      isOnDriverEditorRoute(){
        return this.$route.params.driverId ? true : false
      },
    },
    created () {
      this.loadList();
    },
    methods: {
      ...mapActions('driversList', ['loadList']),
      onAddDriver() {
        this.$router.push({
          name: "editor",
          params: {
            title: 'add',
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.drivers {
    // .drivers__loader 
    &__loader{
      text-align: center;
    }
    // .drivers__error
    &__error{
      text-align: center;
      font-size: 30px;
    }
    // .drivers__wrapper
    &__wrapper{
      display: flex;
      justify-content: space-between;
    }
    // .drivers__main
    &__main{}
    // .drivers__editor
    &__editor{}
		// .drivers__filters
		&__filters {
      margin-bottom: 40px;
    }
		// .drivers__list
		&__list {}
}
.list-drivers {
		// .list-drivers__title
		&__title {
      font-size: 24px;
      margin-bottom: 20px;
    }
		// .list-drivers__subtitles
		&__subtitles {
      display: flex;
      gap: 100px;
      margin-bottom: 15px;
      span{
        &:first-child{
          padding-left: 60px;
        }
      }
    }
		// .list-drivers__body
		&__body {
      margin-bottom: 20px;
    }
		// .list-drivers__button
		&__button {}
}

</style>