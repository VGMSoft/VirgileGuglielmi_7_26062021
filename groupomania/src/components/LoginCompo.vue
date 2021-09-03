<template>
  <div class="card bg-light">
    <div class="card-body">
      <form>
        <!--      <form @submit.prevent="signup()">-->
        <div class="mb-2">
          <label for="InputPseudo" class="form-label mb-0">Pseudo</label>
          <input type="text" class="form-control" id="InputPseudo" v-model="user.pseudo" autocomplete="username">
        </div>
        <div class="row mb-2" v-if="mode === 'create'">
          <div class="col">
            <label for="InputFirstName" class="form-label mb-0">Prénom</label>
            <input type="text" class="form-control" aria-label="First name" id="InputFirstName"
                   v-model="user.firstname">
          </div>
          <div class="col">
            <label for="InputLastName" class="form-label mb-0">Nom</label>
            <input type="text" class="form-control" aria-label="Last name" id="InputLastName" v-model="user.lastname">
          </div>
        </div>
        <div class="mb-2" v-if="mode === 'create'">
          <label for="InputEmail" class="form-label mb-0">Email</label>
          <input type="email" autocomplete="email" class="form-control" id="InputEmail" aria-describedby="emailHelp"
                 v-model="user.email">
          <div id="emailHelp" class="form-text fw-lighter mt-0">Nous prenons soin de vos données personnelles.</div>
        </div>
        <div class="mb-2">
          <label for="InputPassword" class="form-label mb-0">Mot de passe</label>
          <input type="password" autocomplete="current-password" class="form-control" id="InputPassword"
                 v-model="user.password">
        </div>
        <div class="mb-2 form-check">
          <input type="checkbox" class="form-check-input" id="logCheck">
          <label class="form-check-label mb-0" for="logCheck">Rester connecté</label>
        </div>
        <div v-if="mode === 'login'" class="d-flex flex-lg-row flex-column justify-content-center">
          <p class="text-center fw-light mb-0 p-1">Pas encore de compte ?</p>
          <a class="switch text-center mb-0 p-1" @click="switchToSignUp">Créer un compte</a>
        </div>
        <div v-if="mode === 'create'" class="d-flex flex-lg-row flex-column justify-content-center">
          <p class="text-center fw-light mb-0 p-1">Déjà un compte ?</p>
          <a class="switch text-center mb-0 p-1" @click="switchToSignIn">Se connecter</a>
        </div>

        <div class="d-grid gap-2 mt-3">
          <button type="submit" class="btn btn-primary" v-if="mode === 'login'" :disabled="!validated"
                  @click="loginAccount()">
            Connexion
          </button>
          <button type="submit" class="btn btn-primary" v-else-if="mode === 'create'" :disabled="!validated"
                  @click="createAccount()">
            Inscription
          </button>
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
      mode: 'login',
      user: {
        pseudo: "",
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      }
    }
  },
  methods: {
    //form conditional render
    switchToSignIn: function () {
      this.mode = 'login'
    },
    switchToSignUp: function () {
      this.mode = 'create'
    },
    enable: function () {
      this.isDisabled = 'false'
    },
    //input validation
    fieldvalid: function (input) {
      const regex = /[A-Za-z]/g
      return !!input.value.match(regex);
    },
    createAccount: function () {
      this.$store.dispatch("createAccount",{
        pseudo: this.pseudo,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      })
    }

  },
  computed: {
    validated: function () {
      if (this.mode === 'create') {
        return !!(this.user.pseudo !== "" && this.user.firstname !== "" && this.user.lastname && this.user.email !== "" && this.user.password)
      } else {
        return !!(this.user.pseudo !== "" && this.user.password)
      }
    }
  }

})
</script>

<style scoped>

</style>