<template>
  <NewPostCompo/>
</template>

<script>
import {defineComponent} from "vue"
import NewPostCompo from "@/components/posts/NewPostCompo";

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