<template>
  <Navbar>
    <li class="nav-item m-2">
      <router-link to="/profile" class="nav-link">
        <font-awesome-icon :icon="['fas', 'user']"/>
        Profile
      </router-link>
    </li>
  </Navbar>

  <AllPostCompo/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import AllPostCompo from "@/components/posts/AllPostCompo.vue";
import Navbar from "@/components/NavbarCompo.vue";

export default defineComponent({
  name: 'PostsView',
  components: {AllPostCompo, Navbar},
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
@import '../../../scss/main';
</style>
