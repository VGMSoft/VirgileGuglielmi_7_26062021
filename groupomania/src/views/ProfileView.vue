<template>
  <h1>Profile</h1>
  <p>{{ name }}</p>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Profile',
  props: ['name'],
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
@import '../../scss/main';
</style>
