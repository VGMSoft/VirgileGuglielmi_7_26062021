<template>
  <h1>PostsView</h1>
  <PostCompo></PostCompo>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import PostCompo from "@/components/PostCompo.vue";

export default defineComponent({
  name: 'PostsView',
  components: {PostCompo},
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
@import '../../scss/main';
</style>
