<template>
    <div class="deck p-8 flex flex-col space-y-4">
        <div v-if="cards.library.length " class="library" @click="drawCard">
            <simple-card :details="bottomCard('library')" show="back"></simple-card>
        </div>
        <div v-else class="empty">
            <simple-card show="empty"></simple-card>
        </div>
        <div v-if="cards.discard.length" class="discard">
            <simple-card :details="topCard('discard')" show="front"></simple-card>
        </div>
    </div>
</template>

<script>
import simpleCard from "./simpleCard";
export default {
    props: ['cards'],
    components: {
        simpleCard
    },
    methods: {
        drawCard() {
            let card = this.cards.library.splice(0,1)[0]
            this.cards.discard.push(card);
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