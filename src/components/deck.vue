<template>
    <section class="player-area bg-gray-200 shadow-lg w-full">
        <header class="text-center rounded-t-lg bg-gray-600 text-white px-8 py-4">
            <h2 class="text-xl font-bold">{{name}}</h2>
        </header>
        <div class="container mx-auto space-y-6 p-8">
            <div class="cards flex flex-wrap w-full">
                <card v-for="(card,i) in cards" :key="i" :suit="card.suit" :value="card.value" :size="8" :interactive="false" />
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
    props: ['name', 'cards'],
}
</script>

<style>

</style>