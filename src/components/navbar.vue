<template>
  <div>
    <header class="bg-black py-6 text-white">
      <div class="container px-16 mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Card Game App</h1>
        <nav class="space-x-2">
          <router-link to="/" class="border border-gray-700 px-4 py-3 rounded-lg hover:border-red-500 hover:text-red-500">
            Home
          </router-link>
          <router-link to="/welcomeTo" class="border border-gray-700 px-4 py-3 rounded-lg hover:border-red-500 hover:text-red-500">
            Welcome To
          </router-link>
          <router-link to="/playing-cards" class="border border-gray-700 px-4 py-3 rounded-lg hover:border-red-500 hover:text-red-500">
            Playing Cards
          </router-link>
          <router-link to="/upload-deck" class="border border-gray-700 px-4 py-3 rounded-lg hover:border-red-500 hover:text-red-500">
            Upload Deck
          </router-link>
        </nav>
        <!-- <GameControls></GameControls> -->
      </div>
    </header>
  </div>
</template>

<script>
// import GameControls from "./GameControls";
export default {
  components: {
    // GameControls
  }
}
</script>

<style>

</style>