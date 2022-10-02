<template>
  <div id="app">
    <Header/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
    Header
</script>

<style>

</style>
