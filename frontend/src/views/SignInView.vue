<template>
  <h1>SignInView</h1>
  <Card title="Se connecter">
    <SignInCompo/>
  </Card>
</template>

<script>
import {defineComponent} from 'vue'
import SignInCompo from "@/components/SignInCompo.vue";
import Card from "@/components/CardCompo";

export default defineComponent({
  name: "SignInView",
  components: {SignInCompo, Card},
})
</script>

<style scoped>
</style>