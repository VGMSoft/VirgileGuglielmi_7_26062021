<template>
  <nav class="navbar navbar-dark bg-secondary navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/logos/icon-left-font-monochrome-white.svg"
          alt="Groupomania Logo"
        />
      </a>
      <button class="navbar-toggler btn rounded-circle overflow-hidden btn-outline-primary border-3 p-0" type="button"
              data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <img :src="avatarUrl" class="rounded-circle profile-pic" alt="Profile picture">
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"></li>
        </ul>
        <div class="d-flex">
          <button class="btn btn-outline-primary mx-1 py-0" type="submit">Signup</button>
          <button class="btn btn-outline-primary mx-1 py-0" type="submit">Signin</button>
          <button class="btn rounded-circle overflow-hidden btn-outline-primary border-3 p-0" type="submit">
            <img :src="avatarUrl" class="rounded-circle profile-pic" alt="Profile picture"></button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Navbar",
  setup() {
    return {avatarUrl: "https://i.pravatar.cc/150?img=55"}
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  &-brand img {
    width: 10rem;
  }
}
</style>