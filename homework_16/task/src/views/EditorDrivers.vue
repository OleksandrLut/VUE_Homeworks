<template>
  <div class="editor-driver__body">
    <h3 class="editor-driver__title">{{ editorTitle }}</h3>
    <div class="editor-driver__items">
      <div class="editor-driver__item">
        <label for="driver-name-edit">ПІБ:</label>
        <input 
        id="driver-name-edit" 
        v-model="driver.name"
        type="text" 
        class="_inp _inp-large">
      </div>
      <div class="editor-driver__item">
        <label for="driver-exp-edit">Стаж:</label>
        <input 
        id="driver-exp-edit" 
        v-model="driver.experience"
        type="number" 
        class="_inp _inp-large"
        min="1"
        max="50"
        >
      </div>
    </div>
    <div class="editor-driver__buttons">
      
      <button class="_btn" :disabled="isDisabled" @click="onDriverAction">{{ buttonEditDriverTitle }}</button>
      <button class="_btn" @click="onClearDriverEditorItems">Очистити </button>
      <button class="_btn" @click="onCloseEditor">Закрити </button>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'EditorDrivers',
    props: {
      title: {
        type: String,
        required: true
      },
      driverId: {
        type: [String, Number],
        required: false,
      }
    },
    data() {
      return {
        driver: {},
      }
    },
    computed: {
      ...mapGetters('driversList', ['getItemById']),
      isAdd(){
        return this.title === 'add' ? true : false
      },
      editorTitle() {
        return this.isAdd ? 'Додати водія' : 'Редагувати водія'
      },
      buttonEditDriverTitle(){
        return this.isAdd ? 'Додати' : 'Редагувати'
      },
      isDisabled() {
        return this.isAdd && (!this.driver.name || !this.driver.experience);
      },
    },
    created() {
    if (this.driverId)
      this.driver = { ...this.getItemById(this.driverId) }
    },
    methods: {
      ...mapActions('driversList', ['addItem', 'updateItem']),
      onDriverAction() {
        console.log(this.driverId)
        if (this.isAdd) {
          this.addItem(this.driver)
          this.driver = {}
        }
        else {
          this.updateItem({
            itemId: this.driverId,
            data: {
              name: this.driver.name,
              experience: this.driver.experience,
            }
          })
          this.$router.push({
            name: 'drivers'
          })
        }
      },
      onCloseEditor() {
        this.$router.push({
          name: 'drivers'
        })
      },
      onClearDriverEditorItems(){
        this.driver = {}
      },
    },
    
  }
</script>

<style lang="scss" scoped>
.editor-driver {
		// .editor-driver__body
		&__body {}
		// .editor-driver__title
		&__title {
      font-size: 18px;
      margin-bottom: 20px;
    }
		// .editor-driver__items
		&__items {
      margin-bottom: 20px;
    }
		// .editor-driver__item
		&__item {
      display: flex;
      align-items: center;
      gap: 10px;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      label{
        flex: 0 0 60px;
      }
    }
		// .editor-driver__buttons
		&__buttons {
      display: flex;
      align-items: center;
      gap: 25px;
    }
}

</style>