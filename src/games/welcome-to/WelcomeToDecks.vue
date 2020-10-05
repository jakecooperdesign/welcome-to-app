<template>
    <div class="flex justify-between -mx-2 flex-wrap">
        <div v-for="(deck, i) in decks" :key="i" class="px-2 flex-1">
            <Deck ref="decks" :cards="deck.cards" :showRemaining="true" orientation="vertical"></Deck>
        </div>
    </div>
</template>

<script>
import Deck from "@/components/Deck.vue";

export default {
    props: ['decks'],
    components: {
        Deck
    }
}
</script>

<style>

</style>