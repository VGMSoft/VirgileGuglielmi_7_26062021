<template>
  <form>
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
    <button type="submit" class="btn btn-outline-primary">Submit</button>
  </form>
</template>

<script lang="ts">

import {loggedUser} from "./../config/axios.config"
import {createCookie} from "../config/cookie.utils";
import {UserModel} from "./../models/userModel"

const login = () => {
  loggedUser.post<Array<UserModel>>('/auth/login')
    .then((response) => {
      if (response.data.token){
        createCookie('userToken', `${response.data.token}`,1)
      }
      return response.data
    })
    .catch((err) => {
    })
}


export default {
  name: "signIn"
}
</script>

<style scoped>

</style>
