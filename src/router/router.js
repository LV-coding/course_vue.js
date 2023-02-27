import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import PostsPage from '@/pages/PostsPage'
import AboutPage from '@/pages/AboutPage'
import RetrievePostPage from '@/pages/RetrievePostPage'


const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/posts/:id',
        component: RetrievePostPage
    }
]

const router = createRouter({
    history: createWebHistory(), //process.env.BASE_URL
    routes
})

export default router;
