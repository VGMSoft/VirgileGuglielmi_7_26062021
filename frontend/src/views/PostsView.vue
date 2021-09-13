<template>
  <h1>PostsView</h1>
  <PostCompo/>
  <NewPostCompo/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import PostCompo from "@/components/PostCompo.vue";
import NewPostCompo from "@/components/NewPostCompo.vue";

export default defineComponent({
  name: 'PostsView',
  components: {NewPostCompo, PostCompo},
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
@import '../../scss/main';
</style>
