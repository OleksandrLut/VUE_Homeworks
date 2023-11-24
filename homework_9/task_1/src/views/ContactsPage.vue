<template>
  <div class="contacts page">
    <div class="contacts__container">
      <h1 class="contacts__title">
        Контактна інформація
      </h1>
      <div class="contacts__item">
        <h2 class="contacts__sub-title">
          Адреса:
        </h2>
        <p>12345, м. Київ,</p>
        <p>вул. Прикладна, 1</p>
      </div>
      <div class="contacts__item">
          <h2 class="contacts__sub-title">
            Телефони:
          </h2>
          <p>+380 (XX) XXX-XX-XX</p>
          <p>+380 (XX) XXX-XX-XX</p>
          <p>+380 (XX) XXX-XX-XX</p>
        </div>
        <div class="contacts__item">
          <h2 class="contacts__sub-title">
            Електронна пошта:
          </h2>
          <p>info@example.com</p>
        </div>
        <div class="contacts__item">
            <h2 class="contacts__sub-title">
              Години роботи:
            </h2>
            <p>Пн-Пт: 9:00 - 18:00</p>
            <p>Сб: 10:00 - 15:00 (за попереднім записом)</p>
          </div>
          <div class="contacts__item">
            <h2 class="contacts__sub-title">
              Служба підтримки:
            </h2>
            <p>
              Якщо у вас виникли питання чи проблеми, наша служба підтримки завжди готова вам допомогти. Звертайтеся за телефоном або залишайте повідомлення на електронну пошту.
            </p>
          </div>
          <div class="contacts__item">
            <h2 class="contacts__sub-title">
              Форма зворотнього зв'язку:
            </h2>
            <p>
              На нашому сайті ви також можете скористатися формою зворотнього зв'язку для швидкого і зручного спілкування з нашою командою. Ми відповімо на ваші запитання якнайшвидше.
            </p>
          </div>
          <p>Дякуємо, що обрали нас! Нам важливо бути на зв'язку з нашими клієнтами.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContactsPage'
  }
</script>

<style lang="scss" scoped>
.contacts {
		// .contacts__container
		&__container {
      max-width: 1470px;
      padding: 50px 15px 0;
      margin: 0 auto;
      text-align: justify;
    }
		// .contacts__title
		&__title {
      padding-left: 50px;
    }
		// .contacts__item
		&__item {
      &:not(:last-child) {
        margin-bottom: 30px;
        line-height: 1.5;
      }
    }
		// .contacts__sub-title
		&__sub-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
    }
}

</style>