<template>
    <input type="text" class="form-input"
    :value="modelValue" @input="updateInput">
</template>

<script>
    export default {
        name:'my-input',
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style scoped>
.form-input {
    width: 100%;
    padding: 7px;
    border-radius: 5px;
    margin-bottom: 5px;
    border: 2px solid purple;
}
</style>
