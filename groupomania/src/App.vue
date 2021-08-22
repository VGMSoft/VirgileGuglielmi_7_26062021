<template>
  <nav class="d-flex">
    <router-link to="/" class="btn btn-outline-primary m-1">Home</router-link>
    <router-link to="/auth" class="btn btn-outline-primary m-1">Auth</router-link>
    <router-link to="/posts" class="btn btn-outline-primary m-1">Posts</router-link>
    <button @click="showProfile('Catalina')" class="btn btn-outline-primary m-1">Profile</button>
  </nav>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    function showProfile (name: string) {
      this.$router.push({name: 'profile', params: {name: name}})
    }
    return {showProfile}
  }
})
</script>

<style lang="scss">
@import '../scss/main';
</style>
