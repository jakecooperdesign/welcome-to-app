<template>
    <div class="deck p-8 flex flex-col space-y-4">
        <div v-if="cards.library.length " class="library" @click="drawCard">
            <simple-card :details="bottomCard('library')" show="back"></simple-card>
        </div>
        <div v-else class="empty">
            <simple-card show="empty"></simple-card>
        </div>
        <div v-if="cards.discard.length" class="discard" @click="returnCard">
            <simple-card :details="topCard('discard')" show="front"></simple-card>
        </div>
    </div>
</template>

<script>
import simpleCard from "./simpleCard";
export default {
    props: ['deckId'],
    components: {
        simpleCard
    },
    computed: {
        cards() {
            return this.$store.state.decks[this.deckId]
        }
    },
    methods: {
        drawCard() {
            if( this.cards.library.length > 0) {
                this.$store.commit('drawCardForDeck', this.deckId)
            }
        },
        returnCard() {
            if( this.cards.discard.length > 0) {
                this.$store.commit('returnCardToDeck', this.deckId)
            }
        },
        topCard(key) {
            let deck = this.cards[key];
            return deck[deck.length-1];
        },
        bottomCard(key) {
            let deck = this.cards[key];
            return deck[0];
        }
    }
}
</script>

<style>
    
</style>