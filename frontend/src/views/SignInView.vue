<template>
  <HomeCompo>
    <Card title="Se connecter">
      <SignInCompo/>
    </Card>
  </HomeCompo>
</template>

<script>
import {defineComponent} from 'vue'
import SignInCompo from "@/components/SignInCompo.vue";
import Card from "@/components/CardCompo";
import HomeCompo from "@/components/HomeCompo";

export default defineComponent({
  name: "SignInView",
  components: {HomeCompo, SignInCompo, Card}
})
</script>

<style lang="scss" scoped>
@import '../../scss/main';
</style>