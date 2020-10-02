<template>
    <div class="space-x-2">
        <button @click="undo" 
            :disabled="!canUndo" 
            class="border border-gray-800 px-4 py-2 rounded hover:bg-gray-200 hover:text-black" 
            :class="{'opacity-50': !canUndo}"
            v-text="'Undo'"
        >
        </button>
        <button @click="redo" 
            :disabled="!canRedo" 
            class="border border-gray-800 px-4 py-2 rounded hover:bg-gray-200 hover:text-black" 
            :class="{'opacity-50': !canRedo}"
            v-text="'Redo'"
        >
        </button>
        <button @click="$store.commit('resetDecks')" 
            class="border border-gray-800 px-4 py-2 rounded hover:bg-gray-200 hover:text-black"
            v-text="'Reset'"
        >
        </button>
        <button @click="$store.commit('drawAllCards')" 
            class="border border-gray-800 px-4 py-2 rounded hover:bg-gray-200 hover:text-black"
            v-text="'Draw Cards'"
        >
        </button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    
</style>