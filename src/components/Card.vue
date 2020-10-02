<template>
    <div>
        <div v-if="show == 'back'" class="card flex justify-center items-center rounded-lg p-4 shadow-lg bg-gray-800 text-2xl">
            <slot></slot>
        </div>  
        <div v-else class="card flex justify-center items-center rounded-lg p-4 shadow-lg border border-gray-200 text-2xl">
            <slot></slot>
        </div>  
    </div>
</template>

<script>
export default {
    props: ['show']
}
</script>

<style>
.card {
    width: 12rem;
    height: 16rem;
}
</style>