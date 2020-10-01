<template>
  <div>
    <header class="bg-black py-6 text-white">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Card Game App</h1>
        <div class="space-x-2">
          <button @click="$emit('toggle-clicked')" class="border border-gray-800 px-4 py-2 rounded hover:bg-gray-200 hover:text-black">
            Toggle Deck
          </button>
          <button @click="$store.commit('reset')" class="border border-gray-800 px-4 py-2 rounded hover:bg-gray-200 hover:text-black">
            Reset
          </button>
          <button @click="$store.commit('shuffleDeck')" class="border border-gray-800 px-4 py-2 rounded hover:bg-gray-200 hover:text-black">
            Shuffle
          </button>
        </div>
      </div>
    </header>
    <div class="bg-gray-100 py-8">
      <div class="container mx-auto pb-4">
        <add-players></add-players>
      </div>
    </div>
  </div>
</template>

<script>
import addPlayers from "./addPlayers.vue";
export default {
  components: {
    addPlayers
  }
}
</script>

<style>

</style>