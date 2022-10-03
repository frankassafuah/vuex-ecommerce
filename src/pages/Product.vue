<template>
  <div>
    <div class="row mt-5" v-if="product">
      <div class="col-4">
        <img :src="product.image" class="w-100" />
      </div>
      <div class="col-8">
        <h1>{{ product.title }}</h1>
        <h3>${{ product.price }}</h3>
        <input type="text" class="text-center col-1 mr-2 p-1" />
        <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
        <p class="mt-4">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  props: ["id"],

  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  // addToCart function here takes the same addToCart function in product card
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },

  created() {
    this.$store.dispatch("getProduct", this.id);
  },
};
</script>



