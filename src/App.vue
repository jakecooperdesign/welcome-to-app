<template>
  <div id="app">
    <header class="bg-black py-6 text-white">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Card Game App</h1>
        <div class="space-x-2">
          <button @click="undo" class="border border-gray-800 px-4 py-2 rounded hover:bg-gray-200 hover:text-black">
            Undo
          </button>
          <button @click="resetDecks" class="border border-gray-800 px-4 py-2 rounded hover:bg-gray-200 hover:text-black">
            Reset
          </button>
          <button @click="flipAllDecks" class="border border-gray-800 px-4 py-2 rounded hover:bg-gray-200 hover:text-black">
            Draw Cards
          </button>
        </div>
      </div>
    </header>
    <div class="flex justify-center items-center">
      <div class="container mx-auto w-full flex justify-between items-start space-x-8 py-16">
        <div v-for="(deck, i) in decks" :key="i" ref="deck" class="bg-gray-200 rounded-lg shadow-md flex-1 flex flex-col items-center">
          <header class="py-3 px-4 bg-gray-700 text-white rounded-t-lg w-full">
            <h2 class="font-bold text-xs uppercase">Deck {{i + 1}}</h2>
          </header>
          <simple-deck :cards="deck" ref="decks"></simple-deck>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import simpleDeck from "./components/simpleDeck.vue";
import { startingDecks } from './deckFunctions.js'


export default {
  name: 'App',

  components: {
    simpleDeck
  },

  data() {
    return {
      deckShowing: false,
      decks: startingDecks()
    }
  },

  methods: {
    resetDecks() {
      this.decks = this.decks = startingDecks()
    },
    flipAllDecks() {
      this.$refs.decks.forEach( deck => deck.drawCard() )
    },
    undo() {
      console.log('undoing...')
    }
  }
}
</script>

<style>
</style>
