<template>
    <div class="flex justify-center items-center" style="font-family: 'Montserrat', sans-serif;">
        <div class="container p-16 mx-auto space-y-8">
          <header class="bg-green-500 text-white p-8 border border-gray-400 rounded-lg shadow-lg flex justify-between items-center">
              <h1 class="font-light text-4xl tracking-tighter">{{name}}</h1>
              <div class="controls space-x-2 text-sm">
                  <slot></slot>
              </div>
          </header>
          <div v-if="currentTurn > 0" class="grid grid-cols-4 gap-4">
            <div class="p-8 bg-gray-300 border border-gray-400 rounded-lg shadow-lg flex flex-col justify-center items-center text-center">
              <p class="uppercase tracking-widest text-md font-normal">Previous Turn's Cards</p>
            </div>
            <div v-for="(card,i) in turns[currentTurn - 1]" :key="i" class="border border-gray-400 rounded-lg shadow-lg overflow-hidden">
              <div class="relative card-small-welcome-to p-8 flex justify-center items-center bg-white text-white font-extrabold text-4xl"
              >
                <img class="z-0 absolute top-0 left-0 w-full h-full object-cover opacity-75" :src="'/images/welcome-to/welcome-to-' + card.effect + '2x.jpg'" alt="">
                <span class="z-10 text-black text-6xl">{{card.value}}</span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-4">
            <div class="p-8 bg-gray-800 text-white border border-gray-400 rounded-lg shadow-lg flex flex-col justify-between items-center text-center">
              <button 
                class="px-8 py-2 w-full bg-gray-600 text-white rounded-lg shadow-lg"
                @click.prevent="previousTurn()"
              >Previous</button>
              <div class="p-12">
                <p class="text-6xl font-bold">{{currentTurn + 1}}<span class="font-light px-2 text-gray-600">/</span>{{maxTurns}}</p>
                <p class="uppercase tracking-widest text-sm">Current Turn</p>
              </div>
              <button 
                class="px-8 py-2 w-full bg-gray-600 text-white rounded-lg shadow-lg"
                @click.prevent="nextTurn()"
              >Next</button>
            </div>
            <div v-for="(card,i) in turns[currentTurn]" :key="i" class="border border-gray-400 rounded-lg shadow-lg overflow-hidden">
              <div 
                class="card-welcome-to p-8 flex justify-center items-center text-white bg-cover bg-center"
                :style="{ 'background-image': 'url(/images/welcome-to/welcome-to-' + card.effect + '2x.jpg)'  }"
              ></div>
              <div class="card-welcome-to p-8 flex justify-center items-center bg-white font-bold text-6xl">{{card.value}}</div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import turns from "@/games/welcome-to/WelcomeToCardGenerator";

export default {
    data() {
        return {
          name: "Welcome To...",
          turns,
          currentTurn: 0,
        }
    },
    computed: {
      maxTurns() {
        return this.turns.length
      }
    },
    methods: {
      previousTurn() {
        console.log('clicked: previous turn')
        this.currentTurn = this.currentTurn > 0 ? this.currentTurn - 1 : 0;
      },
      nextTurn() {
        console.log('clicked: next turn')
        this.currentTurn = this.currentTurn < this.maxTurns - 1 ? this.currentTurn + 1 : this.maxTurns - 1;
      }
    }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,800;1,500&display=swap');
  .card-welcome-to {
    height: 20rem;
  }
  .card-small-welcome-to {
    height: 20rem;
  }
</style>