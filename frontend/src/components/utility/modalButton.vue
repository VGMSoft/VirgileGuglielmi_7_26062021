<template>
  <div class="root">
    <button @click="isOpen = true">Open</button>
    <teleport to="body">
      <div class="modal d-flex justify-content-center align-items-center" v-if="isOpen">
      <ModalContent title="Hello" content="Salut!" @close="isOpen === false"/>
      </div>
    </teleport>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import ModalContent from "@/components/utility/ModalContentCompo";


export default defineComponent({
  name: "modalButton",
  components: {ModalContent},
  setup() {
    const isOpen = ref(false)
    return {isOpen}
  }
})
</script>

<style scoped lang="scss">
.root {
  position: relative;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;

}

.modal > div {
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
  max-height: 15em;
}

</style>