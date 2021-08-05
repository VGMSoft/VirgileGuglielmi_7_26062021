<template>
  <div class="card">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link " :class="buttonClasses" aria-current="true" href="#">Sign in</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="buttonClasses" href="#">Sign up</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <!--<SignIn/>-->
      <SignUp/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import SignUp from "./../components/SignUp"
//import SignIn from "./../components/SignIn"

export default defineComponent({
  name: "LogBox",
  components: {
    //SignIn,
    SignUp
  },
  setup() {
    return {
      buttonClasses: ref({
        'active': true,
      }),
    }
  }
})
</script>

<style scoped>

</style>