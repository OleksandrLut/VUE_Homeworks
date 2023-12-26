<template>
  <main-masterpage>
    <div class="editor __container page-padding-top">
      <h1 class="editor__title">{{ pageTitle }}</h1>
      <div class="editor__form">
        <v-text-field v-model="product.manufacturer" :label="$t('editPage.input.manufacturer')"></v-text-field>
        <v-text-field v-model="product.title" :label="$t('editPage.input.title')" ></v-text-field>
        <v-text-field v-model="product.price" :label="$t('editPage.input.price')" ></v-text-field>
        <v-text-field v-model="product.photo" :label="$t('editPage.input.image')" ></v-text-field>
        <v-text-field v-model="product.seller" :label="$t('editPage.input.seller')" ></v-text-field>
      </div>

      <div class="editor__buttons">

        <v-btn v-if="productId" color="orange" @click="onEditAction">{{ $t('buttonsTitles.edit') }}</v-btn>

        <v-btn v-else color="orange" @click="onAddProductAction">{{ $t('buttons.add') }}</v-btn>

        <v-btn color="purple" @click="onClearAction">{{ $t('buttons.clear') }}</v-btn>

        <v-btn color="green" @click="onBack">{{ $t('buttons.back') }}</v-btn>

      </div>
    </div>
  </main-masterpage>
</template>

<script>
import MainMasterpage from "@/masterpages/MainMasterpage.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'EditorPage',
  components: { MainMasterpage, },
  props: {
    productId: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      product: {}
    }
  },
  computed: {
    ...mapGetters('products', ['getItemById']),
    pageTitle() {
      return this.productId ? this.$t('editPage.titleEdit') : this.$t('editPage.titleAdd')
    },
  },
  created() {
    if (this.productId)
      this.product = this.getItemById(this.productId)
  },
  methods: {
    ...mapActions('products', ['updateItem', 'addItem']),
    onBack() {
      this.$router.push({
        name: 'home'
      })
    },
    onEditAction() {
      this.updateItem({
        itemId: this.productId,
        data: this.product,
      })
      this.$router.push({
        name: 'home'
      })
    },
    onAddProductAction() {
      this.addItem(this.product)
      this.product = {}
    },
    onClearAction(){
      this.product = {}
    }
  },
}
</script>

<style lang="scss" scoped>
.editor {

  // .editor__title
  &__title {
    margin-bottom: 20px;
    text-align: center;
  }

  // .editor__form
  &__form {
    max-width: 450px;
    margin: 0 auto;
  }

  // .editor__buttons
  &__buttons {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
}
</style>