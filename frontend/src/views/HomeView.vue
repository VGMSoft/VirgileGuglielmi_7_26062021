<template>
  <h1>HomeView</h1>
  <div class="d-flex flex-column justify-content-center align-items-center welcome h-100 my-5">
  <router-link to="/signup" class="routerlink text-center mb-0 p-1 display-1">ENTRER</router-link>
  </div>
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

<style lang="scss">
@import '../../scss/main';
html{
  background-image: url(./../assets/logos/icon-above-font.png);
  background-repeat: no-repeat;
  background-position: center;
}
</style>
