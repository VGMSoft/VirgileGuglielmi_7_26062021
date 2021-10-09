<template>
  <div class="d-flex flex-column align-items-center p-5">
    <img class="spinner w-1 "
         src="../../assets/logos/icon-alpha.png"
         alt="loading spinner">
    <p class="text-primary">Loading ...</p>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Spinner"
})
</script>

<style scoped lang="scss">

.spinner {
  width: 25%;
  animation: rotate-vert-center 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
}
</style>