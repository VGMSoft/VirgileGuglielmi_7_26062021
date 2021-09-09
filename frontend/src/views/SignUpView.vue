<template>
<h1>SignUpView</h1>
  <div>
    <SignUpCompo/>
  </div>

</template>

<script>
import {defineComponent} from 'vue'
import SignUpCompo from "@/components/SignUpCompo.vue";
export default defineComponent({
  name: "SignUpView",
  components: {SignUpCompo}
})
</script>

<style scoped>

</style>