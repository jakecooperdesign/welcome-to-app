<template>
    <div class="card flex justify-center items-center rounded-lg shadow-lg text-2xl">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['show', 'color']
}
</script>

<style>
.card {
    width: 12rem;
    height: 16rem;
}
</style>