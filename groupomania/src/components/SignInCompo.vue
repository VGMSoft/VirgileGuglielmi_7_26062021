<template>
  <form @submit.prevent="login()">
    <h5 class="card-title text-center">Sign in to Groupomania</h5>
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
