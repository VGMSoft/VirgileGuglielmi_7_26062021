<template>
  <form @submit.prevent="connectAccount">
    <div class="mb-2">
      <label for="Email" class="form-label fw-light mb-0">Email :</label>
      <input type="email" autocomplete="email" class="form-control"
             :class="{ 'is-valid': !userVal.email.errorMessage && userVal.email.value, 'is-invalid': userVal.email.errorMessage }" id="Email"
             v-model.trim="userVal.email.value">
      <div class="error text-red form-text">{{ userVal.email.errorMessage }}</div>
    </div>

    <div class="mb-2">
      <label for="Password" class="form-label fw-light mb-0">Mot de passe :</label>
      <input type="password" name="password" autocomplete="current-password" class="form-control"
             :class="{ 'is-valid': !userVal.password.errorMessage && userVal.password.value, 'is-invalid': userVal.password.errorMessage }" id="Password"
             v-model.trim="userVal.password.value">
      <div class="error text-primary form-text">{{ userVal.password.errorMessage }}</div>
    </div>
    <div class="d-flex flex-lg-row flex-column justify-content-center">
      <p class="text-center fw-light mb-0 p-1">Pas encore de compte ?</p>
      <router-link to="/signup" class="nav-link text-primary text-center fw-bolder mb-0 p-1">S'inscrire</router-link>
    </div>
    <div class="d-grid gap-2 mt-3">
      <button type="submit" class="btn btn-outline-primary rounded-pill" :disabled="!formMeta.valid">
        Connexion
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'
import {http} from "@/config/axios.config"
import Cookies from 'js-cookie'
import {useRouter} from "vue-router";
import {defineRule, useField, useForm} from 'vee-validate';
import AllRules from '@vee-validate/rules';

export default defineComponent({
  name: "SignInCompo",
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
      email: useField('email', {required: true, email: true}),
      password: useField('password', {
        required: true,
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      }),
    })

    const router = useRouter()

    const connectAccount = async () => {
      try {
        const response = await http.post('/auth/login', formValues)
        if (response.data) {
          Cookies.set('userToken', `${response.data.token}`, {expires: 1})
          Cookies.set('userId', `${response.data.userId}`, {expires: 1})
          Cookies.set('userRole', `${response.data.role}`, {expires: 1})
          await router.push({name: 'posts'})
        }
        return response.data
      } catch (err) {
        return err
      }
    }


    return {connectAccount, userVal, isValid, isInvalid, formMeta}
  }
})
</script>

<style lang="scss" scoped>
@import '../../../scss/main';
</style>
