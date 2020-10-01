<template>

    <div v-if="interactive"
        class="card card-zoom group relative justify-between rounded-lg shadow-lg border border-gray-300 p-3 flex flex-col items-center bg-white"
        :class="[color]"
        style="width: 12rem; height: 16rem;"
        @click="$emit('play-card', cardId)"
    >
        <button @click="$emit('discard', cardId)" class="card-btn absolute right-0 top-0 m-2 opacity-0 group-hover:opacity-25 hover:opacity-100 text-red-500">
            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
        </button>
        <header v-if="headers" class="w-full">{{name}}</header>
        <p class="font-bold" :style="{ fontSize: size / 6 + 'rem'}">{{name}}</p>
        <footer v-if="headers" class="w-full text-right"><span class="inline-block" style="transform: rotate(180deg)">{{name}}</span></footer>
    </div>

    <div v-else
        class="card justify-center rounded-lg shadow-lg border border-gray-300 p-3 flex flex-col items-center bg-white"
        :class="[color]"
        style="width: 6rem; height: 8rem;"
    >
        <p class="font-bold" :style="{ fontSize: size / 6 + 'rem'}">{{name}}</p>
    </div>
    
</template>

<script>
export default {
    props: {
        suit: String,
        value: [String, Number],
        blank: Boolean,
        cardId: { type: Number },
        size: { type: Number, default: 16 },
        headers: { type: Boolean, default: true },
        zoom: { type: Boolean, default: true },
        interactive: { type: Boolean, default: true }
    },
    data() {
        return {
        }
    },
    computed: {
        color() {
            return this.suit == '♥' || this.suit == '♦' ? 'text-red-500' : 'text-black'
        },
        justifyHeaders() {
            return this.headers == true ? 'justify-between' : 'justify-center';
        },
        name() {
            return this.value + this.suit;
        }
    }
}
</script>

<style>
.card {
    transform: scale(.95);
    transition: all .3s;
}
.card.card-zoom:hover {
    transform: scale(1);
}

.card-btn {
    transition: all .3s;
}
.card-btn:hover {
    opacity: 100 !important;
}
</style>