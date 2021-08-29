<template>
  <div class="d-flex flex-column justify-content-center align-items-center welcome h-100 my-5">
    <h1 class="text-center text-primary mb-3 m-sm-3">Bienvenue sur Groupomania !</h1>
    <div class="d-flex flex-column flex-lg-row">
      <Login/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Login from "@/components/LoginCompo.vue";

export default defineComponent({
  name: 'Home',
  components: {Login},
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
@import '../../scss/main';
</style>
