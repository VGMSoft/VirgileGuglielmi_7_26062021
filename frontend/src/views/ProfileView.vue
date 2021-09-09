<template>
  <h1>Profile</h1>
  <p>{{ name }}</p>
  <Profile/>
<!--  <Profile :name="name"/>-->
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Profile from "@/components/ProfileCompo.vue";

export default defineComponent({
  name: 'Profile',
  components: {Profile},
  props: ['name'],
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
@import '../../scss/main';
</style>
