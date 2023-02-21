<template>
<div class="app">
<post-form @create="createPost"/>
<post-list :posts="posts"/>
</div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue'; 

export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            posts: [
            ],
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
        }
    }

}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    padding: 40px;
    width: 600px;
    margin: 0 auto;
}
</style>