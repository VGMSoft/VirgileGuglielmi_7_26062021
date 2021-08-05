<template>
  <Navbar/>
  <div class="container d-flex align-items-center justify-content-center flex-md-column">
    <LogBox></LogBox>
    <Profile></Profile>
    <Post></Post>
    <p class="text-secondary">{{ numberOfPost }} posts</p>
  </div>
</template>

<script lang="ts">
//import * as bootstrap from 'bootstrap';
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App',

  setup() {
    return { numberOfPost: 146 };
  }
})
</script>

<style lang="scss">
@import './../sass/main';
@import '~bootstrap/scss/bootstrap';
//@use '~font-awesome/css/font-awesome.min.css';
</style>
