<template>
    <div class="flex justify-center items-center">
        <div class="container p-16 mx-auto space-y-16">
            <header class="bg-blue-500 text-white p-8 rounded-lg shadow-lg flex justify-between items-center">
                <h1 class="font-light text-3xl">{{name}}</h1>
                <div class="controls space-x-2 text-sm">
                    <button @click="drawCards" class="px-3 py-2 rounded-lg border-white border hover:border-blue-400 hover:text-blue-100">Draw Cards</button>
                    <!-- <button @click="reset" class="px-3 py-2 rounded-lg border-white border hover:border-blue-400 hover:text-blue-100">Reset</button> -->
                </div>
            </header>
            <div class="flex justify-center -m-2 flex-wrap">
              <div class="p-2">
                <Deck ref="decks" :cards="decks[0].cards" :showRemaining="true" orientation="vertical"></Deck>
              </div>
              <div class="p-2">
                <Deck ref="decks" :cards="decks[1].cards" :showRemaining="true" orientation="vertical"></Deck>
              </div>
              <div class="p-2">
                <Deck ref="decks" :cards="decks[2].cards" :showRemaining="true" orientation="vertical"></Deck>
              </div>
            </div>
        </div>
    </div>
    <!-- <div class="flex justify-center items-center">
      <div class="container px-16 mx-auto w-full flex justify-between items-start space-x-8 py-16">
        <div v-for="(deck, i) in decks" :key="i" ref="deck" class="bg-gray-200 rounded-lg shadow-md flex-1 flex flex-col items-center">
          <header class="py-3 px-4 bg-gray-700 text-white rounded-t-lg w-full">
            <h2 class="font-bold text-xs uppercase">Deck {{i + 1}}</h2>
          </header>
          <simple-deck ref="decks" :deckId='i'></simple-deck>
        </div>
      </div>
    </div> -->
</template>

<script>
import Deck from "@/components/Deck.vue";
import { WelcomeToDecks } from "@/generators/WelcomeToCardGenerator";

export default {
    components: {
        Deck
    },
    data() {
        return {
          name: "Welcome To...",
          decks: WelcomeToDecks
        }
    },
    methods: {
      drawCards() {
        this.$children.forEach( deck => deck.discardCard())
      }
    }
}
</script>

<style>

</style>