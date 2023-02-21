<template>
    <div>
        <h3>Posts</h3>
        <post-item  v-for="post in posts" class="posts"
        :post="post"/>
    </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'

export default {
    components: {
        PostItem
    },
    props: {
        posts: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.posts {
    width: 600;
}
h3 {
    color: purple;
}
</style>
