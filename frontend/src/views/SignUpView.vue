<template>
  <h1>SignUpView</h1>
  <Card title="Créer un compte">
    <SignUpCompo/>
  </Card>
</template>

<script>
import {defineComponent} from 'vue'
import SignUpCompo from "@/components/SignUpCompo.vue"
import Card from "@/components/CardCompo.vue"

export default defineComponent({
  name: "SignUpView",
  components: {SignUpCompo, Card},
})
</script>

<style scoped>
</style>