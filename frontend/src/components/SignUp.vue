<template>
  <form>
    <h5 class="card-title text-center">Sign up to Groupomania</h5>
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
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script lang="ts">

import {loggedUser} from "./../config/axios.config"
import {UserModel} from "./../models/userModel"

const signup = () => {
  loggedUser.post<Array<UserModel>>('/auth/signup')
    .then((response) => {

      return response.data
    })
    .catch((err) => {
    })
}

export default {
  name: "SignUp"
}
</script>

<style scoped>

</style>