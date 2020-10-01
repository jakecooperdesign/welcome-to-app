<template>
  <div id="app">
    <navbar @toggle-clicked="deckShowing = !deckShowing" />
    <div class="flex justify-center items-center">
      <div class="container mx-auto w-full space-y-8 py-16">
        <deck v-if="deckShowing" name="Game Deck" :cards="deck" />
        <template v-if="players.length > 0">
          <player v-for="(player,i) in players" :key="i" :playerId="i" :name="player.name" :cards="player.cards" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import player from "./components/player.vue";
import deck from "./components/deck.vue";
import navbar from "./components/navbar.vue";

export default {
  name: 'App',
  components: {
    player,
    deck,
    navbar,
  },
  mounted() {
    this.$store.commit('shuffleDeck')
  },
  computed: {
    players() {
      return this.$store.state.players;
    },
    deck() {
      return this.$store.state.deck
    }
  },
  data() {
    return {
      deckShowing: false
    }
  }
}
</script>

<style>
</style>
