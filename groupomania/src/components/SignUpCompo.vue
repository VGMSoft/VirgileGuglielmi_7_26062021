<template>
  <div class="card m-auto my-5" style="width: 28rem;">
    <div class="card-header">
      <h1 class="card-title text-center text-primary">Sign up</h1>
    </div>
    <div class="card-body">
      <form @submit.prevent="signup()">
        <div class="mb-3">
          <label for="InputEmail" class="form-label">Email address</label>
          <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="InputPassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="InputPassword">
        </div>
        <div class="mb-3">
          <label for="InputPseudo" class="form-label">Pseudo</label>
          <input type="text" class="form-control" id="InputPseudo">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Keep me logged in</label>
        </div>
        <button type="submit" class="btn btn-primary" @click="signup()">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {loggedUser} from "../config/axios.config"
import {UserModel} from "../models/userModel"


export default defineComponent({
  name: "SignUp",
  setup() {
    const signup = () => {
      loggedUser.post<Array<UserModel>>('/auth/signup')
        .then((response) => {

          return response.data
        })
        .catch((err) => {
          return err
        })
    }
    return {signup}
  }
})
</script>

<style scoped>
</style>