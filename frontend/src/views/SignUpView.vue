<template>
  <Navbar>
    <li class="nav-item m-2">
      <router-link to="/" class="text-decoration-none">
        <font-awesome-icon :icon="['fas', 'home']"/>
        Home
      </router-link>
    </li>
  </Navbar>
  <Card title="Créer un compte">
    <SignUpCompo/>
  </Card>
</template>

<script>
import {defineComponent} from 'vue'
import SignUpCompo from "@/components/SignUpCompo.vue"
import Card from "@/components/CardCompo.vue"
import Navbar from "@/components/NavbarCompo.vue"

export default defineComponent({
  name: "SignUpView",
  components: {SignUpCompo, Card,Navbar},
})
</script>

<style scoped>
</style>