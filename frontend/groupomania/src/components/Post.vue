<template>
  <div class="card border-secondary mb-3">
    <div class="card-header"><h5 class="card-title text-primary">{{ userName }}</h5></div>
    <div class="card-body text-secondary">
      <p class="card-text text-end">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      <p><small>il y à {{delay}} heures</small></p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: "Post",
  setup() {
    const userName = ref("VGMSoft")
    const delay = ref(2)
    setTimeout(() => (delay.value += 1), 1000)
    return {userName, delay}
  }
})
</script>

<style scoped>

</style>