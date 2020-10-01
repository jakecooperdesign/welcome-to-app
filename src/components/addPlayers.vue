<template>
    <form @submit.prevent="submit" class="">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
        </label>
        <div class="flex space-x-2">
            <input v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Jane Doe">
            <button @click.prevent="submit" class="flex-none h-full text-white bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="button">
                Add Player
            </button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        submit() {
            this.$store.commit('addPlayer', this.name);
            this.name = '';
        }
    }
}
</script>

<style>

</style>