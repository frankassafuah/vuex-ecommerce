<template>
  <div>
    <nav
      class="
        navbar navbar-expand-sm navbar-dark
        bg-dark
        d-flex
        justify-content-between
        px-3
      "
    >
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Products</a>
          </li>
        </ul>
        <div>
          <div class="dropdown">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
            >
              {{cartNumber}} Carts
            </button>
            <div @click="$event.stopPropagation()">
                <mini-cart/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from '@/components/MiniCart.vue'

export default {
  name: "Header",
  components: {
    MiniCart
  },
  computed: {
    cartNumber() {
      return this.$store.getters.cartNumber
    }
  },

  data() {
    return {};
  },
};
</script>


<style scoped>
</style>