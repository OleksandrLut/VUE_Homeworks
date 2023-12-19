<template>
  <div class="item-busses-list">
    <font-awesome-icon :icon="['fas', 'bus']" />
    <div class="item-busses-list__registration">{{ busItem.registration }}</div>
    <div class="item-busses-list__seats-count">{{ busItem.seatsCount }}</div>

    <button 
      :disabled="isOnEditorPage"
      class="item-busses-list__button btn-edit"
      @click="onEditBus"
    >
        <font-awesome-icon :icon="['fas', 'pen']" />
    </button>

    <button 
      :disabled="isOnEditorPage"
      class="item-busses-list__button btn-del"
      @click="onDeleteBus"
    >
        <font-awesome-icon :icon="['far', 'trash-can']" />
    </button>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

  export default {
    name: 'BussesListItem',
    props: {
      busItem: {
        type: Object,
        required: true,
      },
    },
    computed: {
      isOnEditorPage() {
        return this.$route.params.title === 'add' ? true : false
      }
    },
    methods: {
      ...mapActions('bussesList', ['deleteItem']),
      ...mapActions('appointments', ['deleteAppointmentByItemId']),
      onEditBus() {
        this.$router.push({
          name: 'bus-editor',
          params: {
            title: 'bus-edit',
            busId: this.busItem.id
          }
        })
      },
      onDeleteBus(){
        this.deleteItem(this.busItem.id)
        this.deleteAppointmentByItemId(this.busItem.id)
      },
    },
  }
</script>

<style lang="scss" scoped>
.item-busses-list {
  display: flex;
  column-gap: 30px;
		// .item-busses-list__registration
		&__registration {
      flex: 0 0 100px;
    }
		// .item-busses-list__seats-count
		&__seats-count {
      flex: 0 0 80px;
      text-align: center;
    }
		// .item-busses-list__button
		&__button {
      padding: 0 10px;
    }
}
.btn-edit,
.btn-del {
  transition: all 0.3s ease 0s;
  &:hover{
    transform: scale(1.2);
  }
  &:active{
    transform: scale(1);
  }
  &:disabled{
    cursor: default;
    color: #c5d8d8;
  }
}


</style>