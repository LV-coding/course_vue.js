<template>
    <navbar></navbar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    components: {
        Navbar
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
    padding: 20px;
    width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
</style>
