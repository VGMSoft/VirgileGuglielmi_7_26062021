<template>
  <div class="d-flex flex-column justify-content-center align-items-center welcome">
    <h1 class="text-secondary fs-1">404 - Not Found</h1>
    <div>
      <router-link to="/" class="btn btn-outline-primary m-1">Home</router-link>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'NotFound',
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>