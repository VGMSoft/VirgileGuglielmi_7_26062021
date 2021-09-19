<template>
  <h1>CardView</h1>
  <Card title="Créer un compte">
    <SignUpCompo/>
  </Card>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Card from "@/components/CardCompo.vue";

import SignUpCompo from "@/components/SignUpCompo.vue";

export default defineComponent({
  name: 'CardView',
  components: {SignUpCompo, Card},
  props: {
    title: {
      type: String,
      required: true
    }
  }
});
</script>
