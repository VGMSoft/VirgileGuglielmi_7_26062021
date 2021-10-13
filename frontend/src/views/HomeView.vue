<template>
  <HomeCompo>
    <div class="text-white text-center ">
      <h1 class="fs-1 fw-bolder">Bienvenue sur Groupomania !</h1>
      <p class="fs-1 fw-bolder mt-5">Connectez-vous ou créez un compte</p>
      <font-awesome-icon :icon="['fas', 'arrow-circle-down']" class="text-secondary fs-1 slide-bottom" role="img"/>
    </div>
    <div class="d-flex flex-row">
      <button class="btn btn-dark--lighter btn-lg mx-auto rounded-pill m-2">
        <router-link to="/signin" class="text-decoration-none text-white">Sign in</router-link>
      </button>
      <button class="btn btn-dark--lighter btn-lg mx-auto rounded-pill m-2">
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
.slide-bottom {
  animation: slide-bottom 1s linear infinite both;
}

@-webkit-keyframes slide-bottom {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  0% {
    opacity: 1;
  }
  100% {
    transform: translateY(100px);
    opacity: 0;
  }
}
</style>
