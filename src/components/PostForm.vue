<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input
        v-model="post.title"
        placeholder="Название поста"
        style="margin-top: 5px;"
    />
    <my-input
        v-model="post.body"
        placeholder="Описание"
        style="margin-top: 5px;"
    />
    <my-button
        @click="createPost"
        style="align-self: flex-end; margin-top: 5px;"
    >
      Создать
    </my-button>
  </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: {MyInput},
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    }
  }
}
</script>

<style scoped>
  form{
    display: flex;
    flex-direction: column;
  }
</style>