<template>
  <div class="app">
    <h1>Страница с постами</h1>

    <br>
    <code>print('Hello world', 1234567890)</code>
    <br><br>

    <my-button
        @click="showDialog"
    >
      Добавить пост
    </my-button>
    <br><br><br>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <post-list
        v-if="!isPostsLoading"
        :posts="posts"
        @remove="removePost"
    />
    <div v-else>Загрузка</div>

  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";
export default {
  components: {
    MyButton,
    MyDialog,
    PostForm, PostList
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data
      }catch (e) {
        alert('Ошибка')
      }finally {
        this.isPostsLoading = false
      }
    }
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<style>

/* Fonts */
@font-face {
  font-family: "SF UI Text";
  font-weight: 300;
  src: url("../public/assets/fonts/SanFrancisco/SFUIText-Light.ttf");
  /* IE9 Compat Modes */ }

@font-face {
  font-family: "SF UI Text";
  font-weight: 400;
  src: url("../public/assets/fonts/SanFrancisco/SFUIText-Regular.ttf");
  /* IE9 Compat Modes */ }

@font-face {
  font-family: "SF UI Text";
  font-weight: 500;
  src: url("../public/assets/fonts/SanFrancisco/SFUIText-Medium.ttf");
  /* IE9 Compat Modes */ }

@font-face {
  font-family: "SF UI Text";
  font-weight: 700;
  src: url("../public/assets/fonts/SanFrancisco/SFUIText-Bold.ttf");
  /* IE9 Compat Modes */ }

@font-face {
  font-family: "JetBrainsMono";
  font-weight: 400;
  src: url("../public/assets/fonts/JetBrainsMono-2.304/fonts/ttf/JetBrainsMono-Regular.ttf");
  /* IE9 Compat Modes */ }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "SF UI Text";
}

.app{
  padding: 20px;
}

code{
  font-family: "JetBrainsMono";
  background: #d5dff1;
  padding: 6px 10px;
  border-radius: 4px;
}




</style>