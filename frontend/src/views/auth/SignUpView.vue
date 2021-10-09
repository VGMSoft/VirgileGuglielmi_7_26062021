<template>
  <HomeCompo>
    <Card title="Créer un compte">
      <SignUpCompo/>
    </Card>
  </HomeCompo>
</template>

<script>
import {defineComponent} from 'vue'
import SignUpCompo from "@/components/auth/SignUpCompo.vue"
import Card from "@/components/utility/CardCompo.vue"
import HomeCompo from "@/components/HomeCompo";

export default defineComponent({
  name: "SignUpView",
  components: {SignUpCompo, Card, HomeCompo}
})
</script>

<style lang="scss" scoped>
@import '../../../scss/main';
</style>