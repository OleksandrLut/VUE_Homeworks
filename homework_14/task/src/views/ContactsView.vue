<template>
  <secondary-wrapper-masterpage>
    <div class="contacts page">
      <div class="contacts__container">
        <h1 class="contacts__title">Наші контакти:</h1>
        <div class="contacts__phones">
          <h3>Контактні телефони:</h3>
          <a href="tel:+380990010909">+38 099 001 09 09</a>
          <a href="tel:+380950010909">+38 095 001 09 09</a>
          <a href="tel:+380930010909">+38 093 001 09 09</a>
        </div>
        <div class="contacts__address">
          Адреса магазину: м. Центальне, вул. Центральна, буд. 1
        </div>
        <ul class="contacts__managers-list managers-list">
          <li 
          v-for="person in employees"
          :key="person.id"
          class="managers-list__item">
            {{ person.position }} - {{ person.name }}
          </li>
        </ul>
      </div>
    </div>
  </secondary-wrapper-masterpage>
</template>

<script>
import { employees } from "@/data/employeesList.js";
import SecondaryWrapperMasterpage from "@/masterpages/SecondaryWrapperMasterpage.vue";

  export default {
    name: 'ContactsView',
    components: {
      SecondaryWrapperMasterpage,
    },
    data() {
      return {
        employees
      }
    },
  }
</script>

<style lang="scss" scoped>
.contacts {
		// .contacts__container
		&__container {}
		// .contacts__title
		&__title {
      font-size: 22px;
      margin-bottom: 20px;
      font-weight: 600;
    }
    &__phones{
      display: grid;
      gap: 10px;
      margin-bottom: 15px;
      h3{
        font-size: 16px;
        margin-bottom: 10px;
        text-decoration: underline;
      }
      a{
        color: rgb(35, 79, 150);
        &:hover{
          text-decoration: underline;
        }
        &::before{
          content: '\1F4DE';
          margin-right: 5px;
        }
      }
    }
		// .contacts__address
		&__address {
      font-size: 16px;
      margin-bottom: 15px;
      text-decoration: underline;
    }
		// .contacts__managers-list
		&__managers-list {}
}
.page {
}
.managers-list {
  display: grid;
  gap: 10px;
		// .managers-list__item
		&__item {}
}

</style>