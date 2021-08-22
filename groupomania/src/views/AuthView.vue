<template>
  <h1>Auth</h1>
  <button class="btn btn-outline-danger m-1">Sign up</button>

  <button class="btn btn-outline-danger m-1">Sign in</button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
// import SignIn from '../components/SignInCompo.vue'
// import SignUp from '../components/SignUpCompo.vue'

export default defineComponent({
  name: 'Auth',
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
@import '../../scss/main';
</style>
