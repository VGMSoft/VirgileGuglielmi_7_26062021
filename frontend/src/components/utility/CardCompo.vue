<template>
  <div class="d-flex flex-column justify-content-center align-items-center h-100 w-100 my-5">
    <div class="card bg-light">
      <div class="card-body">
        <h2 class="text-dark--lighter fw-bold text-uppercase after">{{ title }}</h2>
        <p class="card-text">
          <slot></slot>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
@import '../../../scss/main';
</style>