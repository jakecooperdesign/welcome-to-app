<template>
    <header class="bg-blue-500 text-white p-8 rounded-lg shadow-lg flex justify-between items-center">
        <h1 class="font-light text-3xl">{{name}}</h1>
        <div class="controls space-x-2 text-sm">
            <slot></slot>
        </div>
    </header>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style>

</style>