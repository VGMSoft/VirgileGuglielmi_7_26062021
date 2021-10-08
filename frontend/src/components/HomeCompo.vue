<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-xl-6 d-flex justify-content-center">
        <picture>
          <source media="(min-width: 1200px)" srcset="./../assets/logos/icon-above-font.png" class="navPic">
          <source media="(max-width: 1199px)" srcset="./../assets/logos/icon-left-font-slim.png" class="navPic">
          <img src="" alt="Groupomania logo">
        </picture>
<!--        <div class="text-primary">Groupomania</div>-->
      </div>

      <div class="col-sm-12 col-xl-6 d-flex flex-column justify-content-evenly bg-primary">
        <slot></slot>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'HomeCompo'
})
</script>

<style lang="scss" scoped>
@import '../../scss/main';

.navPic {
  max-width: 50%;
}
</style>