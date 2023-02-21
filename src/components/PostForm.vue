<template>

<form class="form" @submit.prevent>
    <my-input name="title" placeholder="Title" v-model="post.title"/>
    <my-input placeholder="Body" v-model="post.body"/>
    <my-button class="btn-add"  @click="createPost">ADD</my-button>
</form>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost() {
                this.post.id = Date.now()
                this.$emit('create', this.post)
                this.post = {
                    title: '',
                    body: ''
                }
            }
    }
    }
</script>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btn-add {
    align-self: flex-end;
    width: 50%;
}
</style>