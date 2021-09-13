<template>
  <div class="d-flex flex-column justify-content-center align-items-center h-100 w-100 my-5">
    <div class="card bg-light">
      <div class="card-body">
        <form @submit.prevent="connectAccount">
          <div class="mb-2">
            <label for="InputEmail" class="form-label mb-0">Email</label>
            <input type="email" class="form-control" id="InputEmail" v-model="userData.email" autocomplete="email">
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
            <button type="submit" class="btn btn-primary" :disabled="!validated">
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
import {http} from "../config/axios.config"
import {createCookie} from "../config/cookie.utils"
import {useRouter} from "vue-router";


export default defineComponent({
  name: "SignInCompo",
  setup() {
    const userData = {
      email: "",
      password: ""
    }
    const connectAccount = async () => {
      try {
        const response = await http.post('/auth/login', userData)
        if (response.data) {
          createCookie('userToken', JSON.stringify(`${response.data.token}`), 1)
          createCookie('userId', JSON.stringify(`${response.data.userId}`), 1)
          useRouter()
        }
        // return response.data
      } catch (err) {
        return err
      }
    }

    const validated = () => {
      return !!(userData.email !== "" && userData.password)
    }

    return {connectAccount, userData, validated}
  }
})
</script>

<style scoped>

</style>
