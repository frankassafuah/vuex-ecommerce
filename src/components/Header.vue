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
            <a class="nav-link active" href="#"> Home</a>
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
              0 Carts
            </button>
            <div>
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

  data() {
    return {};
  },
};
</script>


<style scoped>
</style>