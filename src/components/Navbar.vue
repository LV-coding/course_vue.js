<template>
    <div class="navbar">
        <div>
            <h3 @click="$router.push('/')" class="navbar__title">VUE.JS</h3>
        </div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')" class="navbar__btn">Posts</my-button>
            <my-button @click="$router.push('/about')" class="navbar__btn">About</my-button>
        </div>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
    export default {
        
    }
</script>

<style lang="scss" scoped>
.navbar {
    height: 60px;
    width: 100%;
    background-color: rgb(228, 200, 200);
    display: flex;
    padding: 25px;
    align-items: center;
    justify-content: space-between;
    &__btn {
        margin-right: 10px;
        width: 80px;
    }
    &__title {
        color: purple;
    }
}
</style>
