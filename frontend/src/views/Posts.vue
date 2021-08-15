<template>
  <RouterView />
  <Post/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Post from "./Posts"

export default defineComponent({
  name: 'Post',
  components: {
    Post
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
@import '../../scss/main';
</style>
