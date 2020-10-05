<template>
    <div class="flex justify-center items-center">
        <div class="container p-16 mx-auto space-y-8">
          <HeaderBar :name="name">
            <button @click="eachDeck('discardCard')" 
              class="px-3 py-2 rounded-lg border-white border hover:border-blue-400 hover:text-blue-100">
              Draw Cards
            </button>
            <button @click="eachDeck('reset')" 
              class="px-3 py-2 rounded-lg border-white border hover:border-blue-400 hover:text-blue-100"
            >
              Reset
            </button>
          </HeaderBar>
          <WelcomeToDecks ref="welcomeToDecks" :decks="decks"></WelcomeToDecks>
        </div>
    </div>
</template>

<script>
import { generatedWelcomeToDecks } from "@/games/welcome-to/WelcomeToCardGenerator";
import WelcomeToDecks from "@/games/welcome-to/WelcomeToDecks";
import HeaderBar from "@/components/HeaderBar"

export default {
    components: {
        WelcomeToDecks,
        HeaderBar
    },
    data() {
        return {
          name: "Welcome To...",
          decks: generatedWelcomeToDecks
        }
    },
    methods: {
      eachDeck(method) {
        // console.log('clicked', method)
        this.$refs.welcomeToDecks.$children.forEach( deck => (typeof deck[method] == 'function') ? deck[method]() : false );
      },
    }
}
</script>

<style>

</style>