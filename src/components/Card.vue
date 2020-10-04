<template>
    <div class="card flex justify-center items-center rounded-lg shadow-lg text-2xl" :style="`width: ${width}rem; height: ${height}rem;`">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        show: String,
        color: String,
        width: {
            type: [Number,String],
            default: 12
        },
        height: {
            type: [Number,String],
            default: 16
        },
    }
}
</script>

<style>
.card {
    /* width: 12rem;
    height: 16rem; */
    transition: all .3s;
}
.card:hover {
    transform: scale(1.03)
}
</style>