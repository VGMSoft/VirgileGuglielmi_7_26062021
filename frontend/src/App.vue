<template>
<Navbar></Navbar>

  <div class="container d-flex justify-content-center pt-5">
     <LogBox></LogBox>
       <!--  <Profile></Profile>
    <Post></Post>-->
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
@import '../scss/main';

</style>
