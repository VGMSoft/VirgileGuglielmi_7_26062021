<template>
  <Navbar>
<!--      <li class="nav-item m-2">-->
<!--        <router-link to="/" class="text-decoration-none">-->
<!--          <font-awesome-icon :icon="['fas', 'home']"/>-->
<!--          Home-->
<!--        </router-link>-->
<!--      </li>-->
  </Navbar>
  <Card title="Se connecter">
    <SignInCompo/>
  </Card>
</template>

<script>
import {defineComponent} from 'vue'
import SignInCompo from "@/components/SignInCompo.vue";
import Card from "@/components/CardCompo";
import Navbar from "@/components/NavbarCompo";

export default defineComponent({
  name: "SignInView",
  components: {Navbar, SignInCompo, Card},
})
</script>

<style scoped>
</style>