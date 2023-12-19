<template>
  <main-master-page>
    <div class="home">
      <div class="home__banner">
        <img src="https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/9900_Mountain%20road_0578_2018_Press?qlt=82&wid=1440&ts=1623242455332&dpr=off&fit=constrain" alt="bus_volvo_on_road">
        <h1 class="home__title">Відкривай Світ з нами</h1>
      </div>
      <div class="home__body">
        <p><strong>Експрес-Лайн</strong>
         - ваш надійний партнер у світі комфортних та безпечних автобусних подорожей!</p>
         <p>
          Ласкаво просимо на нашу головну сторінку, де ваші мандрівки стають приємними пригодами. <strong>Експрес-Лайн</strong> пропонує вам вибір із зручних та сучасних автобусів, щоб забезпечити найвищий рівень комфорту та задоволення під час кожної поїздки.
         </p>
         <p>
          Наша місія - забезпечити ефективний та надійний транспорт, де кожен момент вашої подорожі буде сповнений затишком та безпекою. Незалежно від того, чи ви подорожуєте для бізнесу, відпочинку чи освіти, ми горді надавати вам найкращі можливості для зручних пересувань.
         </p>
         <p>
          Долати відстані разом з [<strong>Експрес-Лайн</strong> - це не лише подорож, це спільний шлях до надійного партнерства та вражаючих вражень. Із задоволенням допоможемо вам зробити кожен ваш шлях приємним та незабутнім.
         </p>
         <p>
          Ласкаво просимо до світу зручності, безпеки та якісного обслуговування - ласкаво до <strong>Експрес-Лайн</strong>!
         </p>
      </div>
    </div>
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";

export default {
  name: "HomeView",
  components: {
    MainMasterPage,
  },
};
</script>

<style lang="scss">
.home {
  padding-top: 135px;
		// .home__banner
		&__banner {
      width: 100%;
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    // .home__title
		&__title {
      color: #fff;
      font-size: 60px;
      font-weight: 700;
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translateX(-50%);
    }
    // .home__body
    &__body {
      padding: 50px 15%;
      p{
        font-size: 20px;
        line-height: 1.4;
        text-align: justify;
        strong{
          color: #0056d6;
        }
        &:not(:last-child) {
          margin-bottom: 15px;
        }
      }
    }
}

</style>