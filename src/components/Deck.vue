<template>
    <div class="deck flex space-x-4">
        <div class="library">
            <Card v-if="remaining > 0" show="back" @click.native="discardCard">
                <div class="text-white text-center">
                    <p>{{remaining}}</p>
                    <p class="text-xs uppercase tracking-widest font-bold opacity-25">Remaining</p>
                </div>
                <!-- <span :class="`text-${topLibrary.color}-500`">{{ topLibrary.suit }}{{ topLibrary.value }}</span> -->
            </Card>
            <Card v-else class="border border-gray-500 rounded-lg opacity-25">
                <p class="text-center text-xs italic">
                    No cards left!
                </p>
            </Card>
        </div>
        <div class="discard">
            <Card v-if="discarded > 0" @click.native="returnCard">
                <span :class="`text-${topDiscard.color}-500`">{{ topDiscard.suit }}{{ topDiscard.value }}</span>
            </Card>
            <Card v-else class="border border-gray-500 rounded-lg opacity-25">
                <p class="text-center text-xs italic">
                    Discarded cards go here!
                </p>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { shuffleDeck } from "@/deckFunctions";

export default {
    components: { Card },
    props: [ 'cards' ],
    data() {
        return {
            library: [],
            discard: [],
        }
    },
    mounted() {
        this.library = JSON.parse(JSON.stringify(this.cards));
        this.shuffleLibrary();
    },
    computed: {
        remaining() {
            return this.library.length;
        },
        discarded() {
            return this.discard.length;
        },
        topDiscard() {
            return this.discard[0];
        },
        topLibrary() {
            return this.library[this.remaining - 1];
        }
    },
    methods: {
        discardCard() {
            let card = this.library.pop();
            this.discard.unshift(card);
        },
        returnCard() {
            let card = this.discard.shift();
            this.library.push(card);
        },
        shuffleLibrary() {
            let cards = this.library;
            this.library = shuffleDeck(cards);
        },
        reset() {
            this.library = JSON.parse(JSON.stringify(this.cards));
            this.discard = [];
        }
    }
}
</script>

<style>

</style>