<template>
  <div class="dropdown-menu p-2" style="min-width: 320px; right: 0; left: auto">
    <div>
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>Product Title</strong>
          <br />
          1 x $23
        </div>
        <div>
          <a href="#" class="badge badge-secondary text-decoration-none">remove</a>
        </div>
      </div>
      <hr>
      <div class="d-flex justify-content-between">
        <span>Total: $23</span>
        <a href="#" class="text-decoration-none">Clear Cart</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniCart",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
</style>