<template>
  <h1>SignInView</h1>
  <SignInCompo/>
</template>

<script>
import {defineComponent} from 'vue'
import SignInCompo from "@/components/SignInCompo.vue";

export default defineComponent({
  name: "SignInView",
  components: {SignInCompo}
})
</script>

<style scoped>
</style>