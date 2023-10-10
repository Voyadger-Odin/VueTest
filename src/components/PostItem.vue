<template>
  <div class="post">
    <div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post_btns">
      <my-button @click="$emit('remove', post)">Удалить</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
  .post{
    background: #EBECF0;
    padding: 6px 10px;
    border-radius: 4px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>