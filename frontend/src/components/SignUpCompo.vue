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
          <div class="row mb-2">
            <div class="col">
              <label for="InputFirstName" class="form-label mb-0">Prénom</label>
              <input type="text" class="form-control" aria-label="First name" id="InputFirstName"
                     v-model="userData.firstname">
            </div>
            <div class="col">
              <label for="InputLastName" class="form-label mb-0">Nom</label>
              <input type="text" class="form-control" aria-label="Last name" id="InputLastName" v-model="userData.lastname">
            </div>
          </div>
          <div class="mb-2">
            <label for="InputEmail" class="form-label mb-0">Email</label>
            <input type="email" autocomplete="email" class="form-control" id="InputEmail" aria-describedby="emailHelp"
                   v-model="userData.email">
          </div>
          <div class="mb-2">
            <label for="InputPassword" class="form-label mb-0">Mot de passe</label>
            <input type="password" autocomplete="current-password" class="form-control" id="InputPassword"
                   v-model="userData.password">
          </div>
          <div class="d-flex flex-lg-row flex-column justify-content-center">
            <p class="text-center fw-light mb-0 p-1">Déjà un compte ?</p>
          <router-link to="/signin" class="routerlink text-center mb-0 p-1">Se connecter</router-link>
          </div>

          <div class="d-grid gap-2 mt-3">
            <button type="submit" class="btn btn-primary" :disabled="!validated"
                    @click="createAccount()">
              Inscription
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
import {UserModel} from "../models/userModel"

export default defineComponent({
  name: "SignUpCompo",
  setup() {
    const signup = async () => {
      try {
        const response = await loggedUser.post<Array<UserModel>>('/auth/signup')
        return response.data
      } catch (err) {
        return err
      }
    }
    const userData = {
      pseudo: "",
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    }
    const validated = () => {
      return !!(userData.pseudo !== "" && userData.firstname !== "" && userData.lastname && userData.email !== "" && userData.password)
    }

    return {signup, userData: userData, validated}
  }
})

</script>

<style scoped>
</style>