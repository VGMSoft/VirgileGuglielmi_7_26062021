<template>
  <div class="d-flex flex-column justify-content-center align-items-center welcome h-100 my-5">

  <div class="card bg-light">
    <div class="card-body">
      <form>
        <!--      <form @submit.prevent="signup()">-->
        <div class="mb-2">
          <label for="InputPseudo" class="form-label mb-0">Pseudo</label>
          <input type="text" class="form-control" id="InputPseudo" v-model="userData.pseudo" autocomplete="username">
        </div>
        <div class="mb-2">
          <label for="InputPassword" class="form-label mb-0">Mot de passe</label>
          <input type="password" autocomplete="current-password" class="form-control" id="InputPassword"
                 v-model="userData.password">
        </div>
        <div class="d-flex flex-lg-row flex-column justify-content-center">
          <p class="text-center fw-light mb-0 p-1">Pas encore de compte ?</p>
          <router-link to="/signup" class="routerlink text-center mb-0 p-1">S'inscrire</router-link>
        </div>
        <div class="d-grid gap-2 mt-3">
          <button type="submit" class="btn btn-primary" :disabled="!validated"
                  @click="loginAccount()">
            Connexion
          </button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {loggedUser} from "../config/axios.config"
import {createCookie} from "../config/cookie.utils"
import {UserModel} from "../models/userModel"


export default defineComponent({
  name: "SignInCompo",
  setup() {
    const login = () => {
      loggedUser.post<Array<UserModel>>('/auth/login')
        .then((response) => {
          if (response.data) {
            createCookie('userToken', `${response.data}`, 1)
          }
          return response.data
        })
        .catch((err) => {
          return err
        })
    }
    const userData = {
      pseudo: "",
      password: ""
    }
    return {login,userData}
  }
})
</script>

<style scoped>

</style>
