<template>
  <div class="home">
      <div class="home__container">
        <h1 class="home__title">
          Ласкаво просимо в наш магазин - ваш особистий куточок для вишуканих покупок та незабутніх вражень!
        </h1>
        <p>
          У "Трендовому Домі" ми пропонуємо найактуальніші та найстильніші товари для вашого дому, гардеробу та активного відпочинку. Від ексклюзивних предметів інтер'єру до модних трендів у світі одягу - ми турбуємося про ваш комфорт та стиль.
        </p>
        <p>
          З нами ви можете вибирати з впевненістю, оскільки ми прагнемо надавати лише найкращі товари, які відзначаються високою якістю та сучасним дизайном. Дозвольте собі відкрити нові горизонти стилю та зробити ваше життя яскравішим разом з "Трендовим Домом"!
        </p>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'HomeComponent',
  }
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
		// .home__container
		&__container {
      max-width: 1470px;
      padding: 0 15px;
      margin: 0 auto;
    }
		// .home__title
		&__title {}
    p{
      text-align: justify;
    }
}

</style>