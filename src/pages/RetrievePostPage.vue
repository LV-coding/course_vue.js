<template>
    <div class="post">
        <div class="post__title">
            <h3>
                {{ this.title }}
            </h3>
        </div>
        <div class="post__body">
            <p>{{ this.body }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
        data() {
            return {
                id: this.$route.params.id,
                title: '',
                body: ''
            }
        },
        methods: {
            async fetchSinglePost() {
                try {
                    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
                    this.title = response.data.title
                    this.body = response.data.body
                } catch (e) {
                    alert(e)
                }
            }
        },
        mounted() {
            this.fetchSinglePost()
        }
    }
</script>

<style lang="scss" scoped>
.post {
    &__title {
        text-align: center;
        margin-bottom: 15px;
    }
}
</style>
