<template>
    <div class="app">
        <my-button class="btn-create"
        @click="showDialog"
        >Create post</my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>
        <post-list :posts="posts"
         @remove="removePost"
         v-if="!isPostLoading"/>
         <div v-else>Posts loading...</div>
         <div class="endPage" ref="endPage"></div>
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
            posts: [],
            dialogVisible: false,
            isPostLoading: false,
            postsPage: 1,
            postsLimit: 10,
            totalPages: 0
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
                this.isPostLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.postsPage,
                        _limit: this.postsLimit,
                    }
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.postsLimit)
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                alert(e)
            } finally {
                this.isPostLoading = false;
            }
        },
        async fetchMorePosts() {
            try {
                this.postsPage += 1
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.postsPage,
                        _limit: this.postsLimit,
                    }
                });
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                alert(e)
            } 
        }
    },
    mounted() {
        this.fetchPosts()

        let options = {rootMargin: '0px', threshold: 1.0}
        let callback = (entries, observer) => {
            if(entries[0].isIntersecting && this.postsPage < this.totalPages) {
                console.log('end')
                this.fetchMorePosts()
            }
        };
        let observer = new IntersectionObserver(callback, options)
        observer.observe(this.$refs.endPage)
    },
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
.endPage {
    height: 40px;
}
</style>