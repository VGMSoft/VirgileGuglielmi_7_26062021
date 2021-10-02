<template>
  <form @submit.prevent="createAccount()">
    <div class="mb-2">
      <label for="Pseudo" class="form-label mb-0">Pseudo :</label>
      <input type="text" class="form-control" :class="{ 'is-valid': isValid, 'is-invalid': isInvalid }"
             id="Pseudo" v-model.trim="userVal.pseudo.value" autocomplete="username">
      <div class="error text-red form-text">{{ userVal.pseudo.errorMessage }}</div>

    </div>
    <div class="row mb-2">
      <div class="col">
        <label for="FirstName" class="form-label mb-0">Prénom :</label>
        <input type="text" class="form-control" :class="{ 'is-valid': isValid, 'is-invalid': isInvalid }"
               aria-label="First name" id="FirstName"
               v-model.trim="userVal.firstname.value">
        <div class="error text-red form-text">{{ userVal.firstname.errorMessage }}</div>
      </div>
      <div class="col">
        <label for="LastName" class="form-label mb-0">Nom :</label>
        <input type="text" class="form-control" :class="{ 'is-valid': isValid, 'is-invalid': isInvalid }"
               aria-label="Last name" id="LastName"
               v-model.trim="userVal.lastname.value">
        <div class="error text-red text-bold form-text">{{ userVal.lastname.errorMessage }}</div>
      </div>
    </div>
    <div class="mb-2">
      <label for="Email" class="form-label mb-0">Email :</label>
      <input type="email" autocomplete="email" class="form-control"
             :class="{ 'is-valid': isValid, 'is-invalid': isInvalid }" id="Email" aria-describedby="emailHelp"
             v-model.trim="userVal.email.value">
      <div class="error text-red form-text">{{ userVal.email.errorMessage }}</div>
    </div>

    <div class="mb-2">
      <label for="Password" class="form-label mb-0">Mot de passe :</label>
      <input type="password" name="password" autocomplete="current-password" class="form-control"
             :class="{ 'is-valid': isValid, 'is-invalid': isInvalid }" id="Password"
             v-model.trim="userVal.password.value">
      <div class="error text-red form-text">{{ userVal.password.errorMessage }}</div>
    </div>
    <!--    <div class="mb-2">-->
    <!--      <label for="Confirm" class="form-label mb-0">Confirmer le mot de passe :</label>-->
    <!--      <input type="password" name="confirmation" autocomplete="current-password" class="form-control"-->
    <!--             :class="{ 'is-valid': isValid, 'is-invalid': isInvalid }" id="Confirm"-->
    <!--             v-model.trim="userVal.password.value">-->
    <!--    </div>-->

    <div class="d-flex flex-lg-row flex-column justify-content-center">
      <p class="text-center  fw-light mb-0 p-1">Déjà un compte ?</p>
      <router-link to="/signin" class="nav-link text-red text-center fw-bolder mb-0 p-1">Se connecter</router-link>
    </div>

    <div class="d-grid gap-2 mt-3">
      <button type="submit" class="btn btn-outline-danger" :disabled="!formMeta.valid">
        Inscription
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'
import {http} from "@/config/axios.config"
import {UserModel} from "@/models/userModel"
import {useRouter} from "vue-router"
import {defineRule, useField, useForm} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import Cookies from "js-cookie";


export default defineComponent({
  name: "SignUpCompo",
  setup() {
    //Bootstrap Client side validation
    const isValid = ref(false)
    const isInvalid = ref(false)

    //Vee-validate rules
    Object.keys(AllRules).forEach(rule => {
      defineRule(rule, AllRules[rule]);
    });

    const {meta: formMeta, values: formValues} = useForm()

    const userVal = reactive({
      pseudo: useField('pseudo', {required: true, alpha: true}),
      firstname: useField('firstname', {required: true, alpha: true}),
      lastname: useField('lastname', {required: true, alpha: true}),
      email: useField('email', {required: true, email: true}),
      password: useField('password', {
        required: true,
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      }),
      // confirm: useField('PasswordConfirm', {required: true, is:, confirmed:}),
    })

    const router = useRouter()

    const createAccount = async () => {
      try {
        const signup = await http.post<UserModel>('/auth/signup', {
          ...formValues,
          role: "USER",
          signup_date: new Date()
        })
        if (signup.data) {
          const login = await http.post('/auth/login', {...formValues})
          Cookies.set('userToken', `${login.data.token}`, {expires: 1})
          Cookies.set('userId', `${login.data.userId}`, {expires: 1})
          await router.push({name: 'posts'})
        }
        return signup.data
      } catch (err) {
        return err
      }

    }

    return {createAccount, isValid, isInvalid, userVal, formMeta}
  }
})

</script>

<style scoped>
</style>
