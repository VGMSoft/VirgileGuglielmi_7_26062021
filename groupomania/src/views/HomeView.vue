<template>
  <div class="d-flex flex-column justify-content-center align-items-center welcome">
    <h1 class="text-danger fs-1">Bienvenue sur Groupomania !</h1>
    <div>
    <router-link to="/auth/signup" class="btn btn-outline-primary m-1">Signup</router-link>
    <router-link to="/auth/login" class="btn btn-outline-primary m-1">Login</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
@import '../../scss/main';
</style>
