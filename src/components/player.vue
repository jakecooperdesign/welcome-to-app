<template>
    <section class="player-area bg-gray-100 shadow-lg w-full">
        <header class="rounded-t-lg bg-gray-800 text-white px-8 py-4 flex justify-between items-center">
            <div class="space-x-2">
                <h2 class="text-xl font-bold inline-block">{{name}}'s Hand</h2>
                <span class="inline-block text-gray-400 ">| Discard: {{discard.length}}</span>
            </div>
            <div class="controls text-sm space-x-2">
                <button @click="drawCard" class="px-3 py-2 rounded border border-gray-300 shadow-sm hover:bg-gray-700">Draw Card</button>
                <button @click="removePlayer" class="px-3 py-2 rounded border border-red-500 shadow-sm hover:bg-gray-700">Remove Player</button>
            </div>
        </header>
        <div v-if="playArea.length > 0" class="container mx-auto p-8 bg-gray-300 space-y-2">
            <div class="cards flex flex-wrap w-full">
                <card v-for="(card,i) in playArea" :key="`play_${i}`" :suit="card.suit" :value="card.value" :size="8" :interactive="false" />
            </div>
        </div>
        <div class="container mx-auto space-y-6 p-8">
            <div class="cards flex flex-wrap">
                <template v-if="cards.length" >
                    <card 
                        v-for="(card,i) in cards" 
                        :key="i" :suit="card.suit" 
                        :value="card.value" 
                        :cardId="i" 
                        @discard="$store.commit('discard', {player: playerId, card: $event})"
                        @play-card="$store.commit('playCard', {player: playerId, card: $event})"
                    />
                </template>
                <div v-for="n in placeHolderCount" :key="`placeholder_${n}`" class="card rounded-lg shadow-lg border border-gray-300 p-3 bg-gray-300" style="width: 12rem; height: 16rem;"></div>
            </div>
        </div>
    </section>
</template>

<script>
import card from "./card";

export default {
    components: {
        card
    },
    props: ['name', 'cards', 'playerId'],
    methods: {
        drawCard() {
            this.$store.commit('drawCardFromDeck', this.playerId);
        },
        removePlayer() {
            this.$store.commit('removePlayer', this.playerId);
        }
    }, 
    computed: {
        player() {
            return this.$store.state.players[this.playerId]
        },
        discard() {
            return this.player.discard;
        },
        playArea() {
            return this.player.playArea
        },
        placeHolderCount() {
            let length = this.cards.length;
            let threshold = 3;
            return (length >= threshold) ? 0 : (length > 0) ? threshold - length : threshold;
        }
    }
}
</script>

<style>

</style>