<template>
  <main-master-page>
    <div class="contacts top-page-pad">
      <h1 class="contacts__title">Контакти</h1>
      <p class="contacts__sub-title">
        Звертайтеся до нас за допомогою наступних контактів:
      </p>
      <ul class="contacts__list">
        <li class="contacts__item">
          <strong>Адреса:</strong> вул. Швейцарська, 12, м. Київ, 01001
        </li>
        <li class="contacts__item">
          <strong>Телефон:</strong> +380 XX XXX XX XX
        </li>
        <li class="contacts__item">
          <strong>Email:</strong> info@expressline.com
        </li>
      </ul>
      <p class="contacts__work-hours">
        Наші офісні години: Пн-Пт: 9:00 - 18:00, Сб-Нд: вихідні.
      </p>
    </div>
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
  export default {
    name: 'ContactsPage',
    components: { MainMasterPage, },
  }
</script>

<style lang="scss" scoped>
.contacts {
		// .contacts__title
		&__title {
      font-size: 30px;
      margin-bottom: 30px;
    }
		// .contacts__sub-title
		&__sub-title {
      font-size: 20px;
      margin-bottom: 20px;
    }
		// .contacts__list
		&__list {
      display: flex;
      flex-direction: column;
      row-gap: 15px;
      margin-bottom: 30px;
    }
		// .contacts__item
		&__item {}
		// .contacts__work-hours
		&__work-hours {}
}

</style>