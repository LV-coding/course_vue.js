<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'my-dialog',
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hideDialog() {
                this.$emit('update:show', false)
            }
        }
    }
</script>

<style lang="scss" scoped>
.dialog {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: fixed;
    background: rgba($color: #ab9797, $alpha: 0.5);
    display: flex;

    &__content {
        margin: auto;
        background: white;
        border-radius: 15px;
        min-height: 80px;
        min-width: 400px;
        padding: 20px;
    }
}
</style>
