<template>
  <div class="list-drivers__item item-driver">
    <font-awesome-icon :icon="['fas', 'address-card']" />
    <div class="item-driver__name">
      {{ driverItem.name }}
    </div>
    <div class="item-driver__experience">
      {{ driverItem.experience }}
    </div>
    <button 
    class="item-driver__button btn-edit"
    :disabled="isOnEditorPage"
    @click="onEditDriver(driverItem.id)"
    >
      <font-awesome-icon :icon="['fas', 'pen']" />
    </button>
    <button 
    class="item-driver__button btn-del"
    :disabled="isOnEditorPage"
    @click="onDeleteDriver(driverItem.id)"
    >
      <font-awesome-icon :icon="['far', 'trash-can']" />
    </button>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


  export default {
    name: 'DriversListItem',
    props: {
      driverItem: {
        type: Object,
        required: true,
      },
    },
    computed: {
      ...mapGetters('appointments',),
      isOnEditorPage() {
        return this.$route.params.title === 'add' ? true : false 
      }
    },
    methods: {
      ...mapActions('driversList', ['deleteItem']),
      ...mapActions('appointments', ['deleteAppointmentByItemId']),
      onEditDriver(driverId) {
        this.$router.push({
          name: 'editor',
          params: {
            title: 'edit',
            driverId: driverId
          }
        })
      },
      onDeleteDriver(driverId) {
        this.deleteItem(driverId)
        this.deleteAppointmentByItemId(driverId)
      }
    },
  }
</script>

<style lang="scss" scoped>

.item-driver {
  display: flex;
  column-gap: 20px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
		// .item-driver__name
		&__name {
      flex: 0 0 140px;
    }
		// .item-driver__experience
		&__experience {}
		// .item-driver__button
		&__button {
      padding: 0 10px;
    }
}
.btn-edit,
.btn-del{
  &:disabled{
    cursor: default;
    color: #c5d8d8;
  }
}
</style>