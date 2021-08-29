<template>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    function showProfile(name: string) {
      this.$router.push({name: 'profile', params: {name: name}})
    }

    return {showProfile}
  }
})
</script>

<style lang="scss">
@import '../scss/main';
</style>
