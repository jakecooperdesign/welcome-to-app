<template>
    <div class="flex justify-center items-center">
      <div class="container px-16 mx-auto w-full flex justify-between items-start space-x-8 py-16">
        <div v-for="(deck, i) in decks" :key="i" ref="deck" class="bg-gray-200 rounded-lg shadow-md flex-1 flex flex-col items-center">
          <header class="py-3 px-4 bg-gray-700 text-white rounded-t-lg w-full">
            <h2 class="font-bold text-xs uppercase">Deck {{i + 1}}</h2>
          </header>
          <simple-deck ref="decks" :deckId='i'></simple-deck>
        </div>
      </div>
    </div>
</template>

<script>
import simpleDeck from "@/components/simpleDeck.vue";

export default {
    components: {
        simpleDeck
    },
    data() {
        return {
            deckShowing: false,
            decks: this.$store.state.decks,
        }
    }
}
</script>

<style>

</style>