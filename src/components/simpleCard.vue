<template>
    <div>
        <div v-if="show == 'back'" 
            class="card flex justify-center items-center rounded-lg p-4" 
            style="width: 12rem; height: 16rem;"
            :class="classStyles"
        >
            {{details.back | capitalize }}
        </div>

        <div v-else-if="show == 'empty'" 
            class="card flex justify-center items-center rounded-lg p-4" 
            style="width: 12rem; height: 16rem;" 
            :class="classStyles"
        >
            No Cards Left...
        </div>

        <div v-else-if="show == 'front'"
            class="card flex justify-center items-center rounded-lg p-4" 
            style="width: 12rem; height: 16rem;"
            :class="classStyles"
        >
            {{details.front}}
        </div>
    </div>
</template>

<script>
let effectColors = {
	'pool': 'bg-blue-500 text-white',
	'fence': 'bg-white',
	'biz': 'bg-red-500 text-white',
	'agent': 'bg-yellow-500',
	'money': 'bg-purple-800 text-white',
    'park': 'bg-green-500 text-white' 
};
export default {
    props: ['details', 'show'],
    computed: {
        classStyles() {
            let classes = '';
            if (this.show == 'back') {
                classes = 'card-back shadow-md font-bold text-4xl';
                classes = classes.concat(' ' + effectColors[this.details.back]);
            }
            if (this.show == 'empty') {
                classes = 'card-empty opacity-25 border bg-gray-500 text-white';
            }
            if (this.show == 'front') {
                classes = `card-front text-6xl font-bold bg-white shadow-md`;
            }
            return classes;
        }
    }
}
</script>

<style>

</style>