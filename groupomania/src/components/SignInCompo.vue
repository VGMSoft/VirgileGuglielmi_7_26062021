<template>
  <div class="card m-auto my-5" style="width: 28rem;">
    <div class="card-header">
      <h1 class="card-title text-center text-primary">Sign in</h1>
    </div>
    <div class="card-body">
      <form @submit.prevent="login()">
        <p class="card-text text-center">Pas encore de compte ? <router-link to="/signup" class="text-primary">Inscrivez-vous</router-link></p>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Keep me logged in</label>
        </div>
        <button type="submit" class="btn btn-outline-primary" @click="login()">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {loggedUser} from "../config/axios.config"
import {createCookie} from "../config/cookie.utils"
import {UserModel} from "../models/userModel"


export default defineComponent({
  name: "SignIn",
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
    return {login}
  }
})
</script>

<style scoped>

</style>
