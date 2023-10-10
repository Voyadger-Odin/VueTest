<template>
  <div>
    <h4>Список постов</h4>
    <div v-if="posts.length>0">
      <post-item
          class="post"
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
    </div>
    <div v-else>
      <span>Список постов пуст</span>
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>