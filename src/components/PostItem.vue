<template>
    <div class="post">
        <div class="content">
            <div><strong>ID:</strong> {{ post.id }}</div> 
            <div><strong>Title:</strong> {{ post.title }}</div>
            <div><strong>Text:</strong> {{ post.body }}</div>
        </div>
        <div class="btns">
            <my-button class="btn-del"
            @click="$emit('remove', post)">
                DELETE
            </my-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}

</script>

<style scoped>
.post {
    border: 2px solid purple;
    margin-top: 20px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>