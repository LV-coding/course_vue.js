<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style scoped>
.btn {
    background: none;
    color: purple;
    font-weight: bold;
    border: 2px solid purple;
    padding: 7px;
    border-radius: 5px;
}
</style>