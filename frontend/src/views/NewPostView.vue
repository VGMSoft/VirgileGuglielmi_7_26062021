<template>
  <NewPostCompo/>
</template>

<script>
import {defineComponent} from "vue"
import NewPostCompo from "@/components/NewPostCompo";

export default defineComponent({
  name: "NewPostView",
  components: {NewPostCompo},
  setup() {

    return {}
  }

})
</script>

<style scoped>

</style>