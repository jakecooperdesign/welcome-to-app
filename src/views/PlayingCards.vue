<template>
    <div class="flex justify-center items-center">
        <div class="container p-16 mx-auto space-y-8">
            <header class="bg-blue-500 text-white p-8 rounded-lg shadow-lg flex justify-between items-center">
                <h1 class="font-light text-3xl">{{name}}</h1>
                <div class="controls space-x-2 text-sm">
                    <button @click="drawCard" class="px-3 py-2 rounded-lg border-white border hover:border-blue-400 hover:text-blue-100">Draw Card</button>
                    <button @click="returnCard" class="px-3 py-2 rounded-lg border-white border hover:border-blue-400 hover:text-blue-100">Return Card</button>
                    <button @click="shuffleDeck" class="px-3 py-2 rounded-lg border-white border hover:border-blue-400 hover:text-blue-100">Shuffle Deck</button>
                    <button @click="reset" class="px-3 py-2 rounded-lg border-white border hover:border-blue-400 hover:text-blue-100">Reset</button>
                </div>
            </header>
            <Deck ref="deck" :cards="cards"></Deck>
        </div>
    </div>
</template>

<script>
// import Card from '@/components/Card.vue';
import Deck from '@/components/Deck.vue';
import { playingCards } from '@/generators/PlayingCardGenerator';

export default {
    components: {
        // Card
        Deck
    },
    data() {
        return {
            name: 'Playing Cards',
            cards: playingCards.cards
        }
    },
    methods: {
        drawCard() {
            this.$refs.deck.discardCard();
        },
        returnCard() {
            this.$refs.deck.returnCard();
        },
        shuffleDeck() {
            this.$refs.deck.shuffleLibrary();
        },
        reset() {
            this.$refs.deck.reset();
        }
    },
}
</script>

<style>

</style>