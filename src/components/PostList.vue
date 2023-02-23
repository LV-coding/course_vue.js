<template>
    <div v-if="posts.length > 0" >
        <h3>Posts</h3>
        <post-item v-for="post in posts" class="posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"/>
    </div>
    <div v-else>
        <h3>Posts list is empty, please add</h3>
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
