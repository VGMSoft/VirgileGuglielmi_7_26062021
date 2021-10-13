<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand m-0 nav-link ">
        <img src="./../assets/logos/logo-sm.png"
             alt="Groupomania Logo">
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <slot></slot>
          <li class="nav-item m-2" @click="disconnect" v-if="isLogged()">
            <router-link to="/signin" class="text-decoration-none nav-link ">
              <font-awesome-icon :icon="['fas', 'user']" class=""/>
              Changer de compte ?
            </router-link>
          </li>
          <li class="nav-item m-2" @click="disconnect" v-if="isLogged()">
            <router-link to="/" class="text-decoration-none nav-link ">
              <font-awesome-icon :icon="['fas', 'power-off']" class="text-primary"/>
              Déconnexion
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Cookies from "js-cookie";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "Navbar",
  setup() {

    const isLogged = () => {
      const userToken = Cookies.get('userToken')
      if (userToken) {
        return true
      } else {
        return false
      }
    }

    const router = useRouter()

    const disconnect = (): void => {
      Cookies.set('userToken', '')
      Cookies.remove('userToken')
      Cookies.set('userId', '')
      Cookies.remove('userId')
      Cookies.set('userRole', '')
      Cookies.remove('userRole')
      router.push({name: 'home'})
    }
    return {disconnect, isLogged}
  }
})
</script>

<style lang="scss" scoped>
@import '../../scss/main';

.navbar-brand img {
  width: 10rem;
}
</style>