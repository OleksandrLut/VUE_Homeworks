<template>
  <div class="editor-bus__body">
    <h3 class="editor-bus__title">{{ editorTitle }}</h3>
    <div class="editor-bus__items">
      <div class="editor-bus__item">
        <label for="bus-registration-edit">Реєстраційний номер:</label>
        <input 
        id="bus-registration-edit" 
        v-model="bus.registration"
        type="text" 
        class="_inp _inp-large">
      </div>
      <div class="editor-bus__item">
        <label for="bus-seats-edit">Кількість посадочних місць:</label>
        <input 
        id="bus-seats-edit" 
        v-model="bus.seatsCount"
        type="number" 
        class="_inp _inp-large"
        min="1"
        max="100"
        >
      </div>
    </div>
    <div class="editor-bus__buttons">
      
      <button class="_btn" :disabled="isDisabled" @click="onBusAction">{{ buttonEditBusTitle }}</button>
      <button class="_btn" @click="onClearBusEditorItems">Очистити </button>
      <button class="_btn" @click="onCloseEditor">Закрити </button>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'EditorBusses',
    props: {
      title: {
        type: String,
        required: true
      },
      busId: {
        type: [String, Number],
        required: false,
      }
    },
    data() {
      return {
        bus: {},
      }
    },
    computed: {
      ...mapGetters('bussesList', ['getItemById']),
      isAdd(){
        return this.title === 'add' ? true : false
      },
      editorTitle() {
        return this.isAdd ? 'Додати автобус' : 'Редагувати автобус'
      },
      buttonEditBusTitle(){
        return this.isAdd ? 'Додати' : 'Редагувати'
      },
      isDisabled() {
        return this.isAdd && (!this.bus.registration || !this.bus.seatsCount);
      },
    },
    created() {
    if (this.busId)
      this.bus = { ...this.getItemById(this.busId) }
    },
    methods: {
      ...mapActions('bussesList', ['addItem', 'updateItem']),
      onBusAction() {
        if (this.isAdd) {
          this.addItem(this.bus)
          this.bus = {}
        }
        else {
          this.updateItem({
            itemId: this.busId,
            data: {
              registration: this.bus.registration,
              seatsCount: this.bus.seatsCount,
            }
          })
          this.$router.push({
            name: 'busses'
          })
        }
      },
      onCloseEditor() {
        this.$router.push({
          name: 'busses'
        })
      },
      onClearBusEditorItems(){
        this.bus = {}
      },
    },
    
  }
</script>

<style lang="scss" scoped>
.editor-bus {
		// .editor-bus__body
		&__body {}
		// .editor-bus__title
		&__title {
      font-size: 20px;
      margin-bottom: 30px;
    }
		// .editor-bus__items
		&__items {
      margin-bottom: 30px;
    }
		// .editor-bus__item
		&__item {
      display: flex;
      align-items: center;
      label{
        flex: 0 0 230px;
      }
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
		// .editor-bus__buttons
		&__buttons {
      display: flex;
      gap: 25px;
    }
}


</style>