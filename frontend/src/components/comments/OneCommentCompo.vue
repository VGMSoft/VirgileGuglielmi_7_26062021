<template>
  <div class="card mb-3 shadow-sm">
    <div class="card-body bg-light p-2 ">
      <div class=" d-flex flex-row justify-content-between mb-2">
        <div class="d-flex flex-row align-items-center">
          <img src="@/assets/profile/avatar.png"
               class="rounded-circle profile-pic border border-primary border-1"
               alt="avatar"/>
          <h2 class="card-title text-red mx-2 mb-0">{{ pseudo }}</h2>
        </div>
      </div>
      <div class="ps-2">
        <p class="card-text text-dark">{{ content }}</p>
      </div>
    </div>
    <div class="card-footer d-flex justify-content-between py-0">{{ date }}</div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
  name: "OneCommentCompo",
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

.card-text::after{
  content: "";
  display: block;
  background-color: #6c757d;
  width: 100%;
  height: 1px;
  margin-top: 1em;
  margin-bottom: 0.5em;
}
</style>