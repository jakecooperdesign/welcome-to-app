<template>
    <div class="play-area p-16 rounded-lg justify-center bg-gray-200 space-y-8">
        <div class="deck flex justify-center items-center" :class="orientationClasses">
            <div class="library">
                <Card 
                    v-if="remaining > 0" 
                    show="back" 
                    @click.native="discardCard" 
                    :class="topLibrary.back.classes"
                    :style="topLibrary.back.image_url ? `background: url(${topLibrary.back.image_url}) center center / cover;` : false">
                    <!-- {{ topLibrary.back.value | capitalize }} -->
                </Card>
                <Card v-else class="border border-gray-500 rounded-lg opacity-25">
                    <p class="text-center text-xs italic">
                        No cards left!
                    </p>
                </Card>
            </div>
            <div class="discard">
                <Card v-if="discarded > 0" @click.native="returnCard" :class="topDiscard.front.classes">
                    {{ topDiscard.front.suit }}{{ topDiscard.front.value | capitalize }}
                </Card>
                <Card v-else class="border border-gray-500 rounded-lg opacity-25">
                    <p class="text-center text-xs italic">
                        Discarded cards go here!
                    </p>
                </Card>
            </div>
        </div>
        <div v-if="remaining > 0 && showRemaining !== false" class="bg-gray-200 rounded-lg text-2xl text-center">
            <p>{{remaining}}</p>
            <p class="text-xs uppercase tracking-widest font-bold opacity-25">Remaining</p>
        </div>
    </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { shuffleDeck } from "@/deckFunctions";

export default {
    components: { Card },
    props: [ 'cards', 'showRemaining', 'orientation' ],
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
        },
        orientationClasses() {
            return (this.orientation == 'vertical') ? 'flex-col space-y-8' : 'space-x-4';
        }
    },
    methods: {
        discardCard() {
            if (this.library.length > 0) this.discard.unshift( this.library.pop() );
        },
        returnCard() {
            this.library.push( this.discard.shift() );
        },
        shuffleLibrary() {
            this.library = shuffleDeck( this.library );
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