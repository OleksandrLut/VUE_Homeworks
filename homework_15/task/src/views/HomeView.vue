<template>
  <main-massterpage>
    <div class="home">
      <div>
        <font-awesome-icon :icon="['fas', 'school']" class="ico" size="10x" color="#42b983"/>
      </div>
      <p>Вітаємо вас на сайті нашої школи!</p>
      <p>
        <strong>Навчання</strong> - це відкриття дверей до нових можливостей, і ми горді тим, що можемо подорожувати цією дорогою разом з вами. На нашому сайті ви знайдете інформацію про наші програми, вчителів та ресурси, які допоможуть вам досягти успіху. Разом ми будуємо майбутнє!
      </p>
      <p>Ласкаво просимо до нашої освітньої спільноти!</p>
    </div>
  </main-massterpage>
</template>

<script>
import MainMassterpage from "@/masterpages/MainMassterpage.vue";

export default {
  name: "HomeView",
  components: { MainMassterpage },
};
</script>

<style lang="scss" scoped>
.home{
  .ico{
    margin-bottom: 30px;
  }
  p{
    padding: 0 250px;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>