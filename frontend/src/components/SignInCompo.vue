<template>
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
      <button type="submit" class="btn btn-primary" :disabled="isValid()">
        Connexion
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {http} from "@/config/axios.config"
import Cookies from 'js-cookie'
import {useRouter} from "vue-router";


export default defineComponent({
  name: "SignInCompo",
  setup: function () {
    const router = useRouter()
    const userData = {
      email: "",
      password: ""
    }
    const connectAccount = async () => {
      try {
        const response = await http.post('/auth/login', userData)
        if (response.data) {
          Cookies.set('userToken', `${response.data.token}`, {expires: 1})
          Cookies.set('userId', `${response.data.userId}`, {expires: 1})
          await router.push({name: 'posts'})
        }
        return response.data
      } catch (err) {
        return err
      }
    }

    const isValid = () => {
      // return !!(userData.email !== "" && userData.password !== "")
      if (userData.email !== "" && userData.password !== "") {
        return true
      } else {
        return false
      }
    }
    console.log(isValid())

    return {connectAccount, userData, isValid}
  }
})
</script>

<style scoped>

</style>
