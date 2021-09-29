<template>
  <div class="d-flex flex-column justify-content-center align-items-center h-100 w-100 my-5">
    <div class="card bg-light">
      <div class="card-body">
        <h2 class="card-title text-red text-center">{{ title }}</h2>
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
