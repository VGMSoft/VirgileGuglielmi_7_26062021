<template>
  <Navbar>
    <li class="nav-item m-2">
      <router-link to="/posts" class="text-decoration-none">
        <font-awesome-icon :icon="['fas', 'envelope']"/>
        Posts
      </router-link>
    </li>
  </Navbar>
  <Profile/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Profile from "@/components/ProfileCompo.vue";
import Navbar from "@/components/NavbarCompo.vue";

export default defineComponent({
  name: 'ProfileView',
  components: {Profile, Navbar}
})
</script>

<style lang="scss">
</style>
