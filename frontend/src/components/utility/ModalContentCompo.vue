<template>
  <div class="card">
    <h2 class="text-primary">{{ title }}</h2>
    <p>{{ content }}</p>
    <button @click="$emit('close')">Close</button>
  </div>
</template>

<script>
import {defineComponent, defineEmits, defineProps} from 'vue';

export default defineComponent({
  name: 'ModalContent',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>

</style>