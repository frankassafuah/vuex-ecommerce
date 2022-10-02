<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <product-card v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  name: "ProductList",

  components: {
    ProductCard
  },

  data() {
    return {};
  },

  computed: {
    products(){
        return this.$store.state.products;
    }
  },

  created() {
    this.$store.dispatch("getProducts");
  },

  methods: {},
};
</script>

<style scoped>
</style>