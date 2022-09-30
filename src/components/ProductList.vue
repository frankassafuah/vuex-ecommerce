<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <product-card/>
    <product-card/>
    <product-card/>
    <product-card/>
    <product-card/>
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

  mounted() {},

  methods: {},
};
</script>

<style scoped>
</style>