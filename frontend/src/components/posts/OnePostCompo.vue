<template>
  <div class="card shadow-sm mb-3">
    <div class="card-header d-flex flex-row justify-content-between">
      <div class="d-flex flex-row">
        <img src="@/assets/profile/avatar.png"
             class="rounded-circle profile-pic border border-primary border-1"
             alt="avatar"/>
        <h2 class="card-title text-red mx-2 mb-0">{{ pseudo }}</h2>
      </div>
      <slot name="dropdown"></slot>
    </div>
    <div class="card-body text-secondary border-bottom-0">
      <p class="card-text ">{{ content }}</p>
      <slot name="edit"></slot>
    </div>
    <div class="card-footer d-flex justify-content-between border-top-0 py-0">
      Posté le {{ date }}
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
  name: "OnePostCompo",
  props: {
    pseudo: {
      type: String,
      required: true
    }, content: {
      type: String,
      required: true
    }, date: {
      type: String,
      required: true
    },
  }

})
</script>

<style lang="scss" scoped>
@import '../../../scss/main';
</style>