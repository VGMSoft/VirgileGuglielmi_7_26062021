<template>
  <div class="card m-auto my-5 bg-light" style="width: 28rem;">
    <div class="card-body">
      <form>
<!--      <form @submit.prevent="signup()">-->
        <div class="mb-2">
          <label for="InputPseudo" class="form-label mb-0">Pseudo</label>
          <input type="text" class="form-control" id="InputPseudo">
        </div>
        <div class="row mb-2" v-if="state == 'create'">
          <div class="col">
            <label for="InputFirstName" class="form-label mb-0">Prénom</label>
            <input type="text" class="form-control" aria-label="First name" id="InputFirstName">
          </div>
          <div class="col">
            <label for="InputLastName" class="form-label mb-0">Nom</label>
            <input type="text" class="form-control" aria-label="Last name" id="InputLastName">
          </div>
        </div>
        <div class="mb-2" v-if="state == 'create'">
          <label for="InputEmail" class="form-label mb-0">Email</label>
          <input type="email" autocomplete="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text fw-lighter mt-0">Nous prenons soin de vos données personnelles.</div>
        </div>
        <div class="mb-2">
          <label for="InputPassword" class="form-label mb-0">Mot de passe</label>
          <input type="password" autocomplete="current-password" class="form-control" id="InputPassword">
        </div>
        <div class="mb-2 form-check">
          <input type="checkbox" class="form-check-input" id="logCheck">
          <label class="form-check-label mb-0" for="logCheck">Rester connecté</label>
        </div>
      <p class="text-center card-subtitle fw-light" v-if="state == 'login'">Pas encore de compte ? <a class="switch" @click="switchToSignUp">Créer un compte</a></p>
      <p class="text-center card-subtitle fw-light" v-else-if="state == 'create'">Déjà un compte ? <a class="switch" @click="switchToSignIn">Se connecter</a></p>
        <div class="d-grid gap-2 mt-3">
          <button type="submit" class="btn btn-primary" v-if="state == 'login'" @click="signin()">Connexion</button>
          <button type="submit" class="btn btn-primary" v-else-if="state == 'create'" @click="signup()">Inscription</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Login",
  data: function () {
    return {
      state: 'login'
    }

  },
  methods: {
    switchToSignIn: function () {
      this.state = 'login'
    },
    switchToSignUp: function () {
      this.state = 'create'
    }
  }

})
</script>

<style scoped>

</style>