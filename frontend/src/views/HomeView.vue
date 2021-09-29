<template>
  <main class="text-center d-flex flex-column">
    <h1>
      <img src="../assets/logos/icon-above-font-nobg.png" alt="groupomania" class="text-center m-auto"
           style="width: 50vw;"/>
    </h1>
    <div class="d-flex justify-content-center flex-column flex-sm-row">
      <button class="btn btn-red mx-auto my-2">
        <router-link to="/signin" class="text-decoration-none text-white fw-light">Se connecter ...</router-link>
      </button>
      <button class="btn btn-red mx-auto my-2">
        <router-link to="/signup" class="text-decoration-none text-white fw-light">S'inscrire ...</router-link>
      </button>
    </div>
    <div class="slide-right">
      <p class="fw-light">
        <font-awesome-icon :icon="['fas', 'plus-circle']" class="text-green"/>
        de 600 collaborateurs
      </p>
      <p class="fw-light">
        <font-awesome-icon :icon="['fas', 'plus-circle']" class="text-green"/>
        d'ambiance entre collègues
      </p>
      <p class="fw-light">
        <font-awesome-icon :icon="['fas', 'plus-circle']" class="text-green"/>
        d'échange entre les départements
      </p>
      <p class="fw-light">
        <font-awesome-icon :icon="['fas', 'minus-circle']" class="text-green"/>
        de mail internes
      </p>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {},
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import '../../scss/main';

.slide-right {
  animation: slide-right 1.5s cubic-bezier(.25, .46, .45, .94) both
}

.shadow-drop-2-center {
  -webkit-animation: shadow-drop-2-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: shadow-drop-2-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
</style>
