<template>
  <Navbar/>
  <h1>Posts</h1>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Navbar from "@/components/NavbarCompo.vue";

export default defineComponent({
  name: 'Post',
  components: {Navbar},
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
@import '../../scss/main';
</style>
