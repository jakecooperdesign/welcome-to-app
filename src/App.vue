<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar
  },
}
</script>

<style>
</style>
