<template>
  <div class="dropdown-menu p-2" style="min-width: 320px; right: 0; left: auto">
    <div>
      <div v-for="item in cart" :key="item.product.id">
        <div class="px-2 d-flex justify-content-between">
          <div>
            <strong>{{ item.product.title }}</strong>
            <br />
            {{ item.quantity }} x ${{ item.product.price }}
          </div>
          <div>
            <a href="#" class="badge badge-secondary text-decoration-none"
              @click="removeItem(item.id)">remove</a
            >
          </div>
        </div>
        <hr />
      </div>
      <div class="d-flex justify-content-between">
        <span>Total: ${{totalPrice}}</span>
        <a href="#" class="text-decoration-none" @click="clearCart">Clear Cart</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "MiniCart",

  data() {
    return {};
  },
  computed: {
    ...mapGetters ([
      "totalPrice"
  ]),
    cart() {
      return this.$store.state.cart;
    }
  },
  //get cart from backend
  created() {
      this.$store.dispatch("getCart");
    },

  methods: {
    removeItem(id){
      this.$store.dispatch('removeItem', id)
    },
    clearCart(){
      this.$store.dispatch('clearCart')
    }
  },
};
</script>

<style scoped>
</style>