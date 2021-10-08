<template>
  <HomeCompo>
    <p class="text-white text-center fw-light">Bienvenue sur Groupomania !<br/>Retrouvez plus de 600 collaborateurs</p>
    <div class="d-flex flex-row">
      <button class="btn btn-dark--lighter mx-auto rounded-pill m-2">
        <router-link to="/signin" class="text-decoration-none text-white">Sign in</router-link>
      </button>
      <button class="btn btn-dark--lighter mx-auto rounded-pill m-2">
        <router-link to="/signup" class="text-decoration-none text-white">Sign up</router-link>
      </button>
    </div>
  </HomeCompo>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HomeCompo from "@/components/HomeCompo.vue";

export default defineComponent({
  name: 'HomeView',
  components: {HomeCompo}
})
</script>

<style lang="scss" scoped>
@import '../../scss/main';
</style>
