<template>
    <div class="app">
        <my-button class="btn-create"
        @click="showDialog"
        >Create post</my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>
        <post-list :posts="posts"
         @remove="removePost"/>
    </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue'; 
import axios from 'axios';

export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            posts: [
            ],
            dialogVisible: false,
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true
        },
        async fetchPosts() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20');
                this.posts = response.data;
            } catch (e) {
                alert(e)
            }
        }
    },
    mounted() {
        this.fetchPosts()
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
    display: flex;
    flex-direction: column;
}
.btn-create {
    width:35%;
    margin: 15px;
    align-self: flex-end;
}
</style>