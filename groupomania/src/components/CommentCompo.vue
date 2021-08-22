<template>
  <div class="card comment-box border-bottom-0 border-start-0 border-end-0 border-top-1">
    <div class="card-body comment text-secondary">
      <div class=" bg-light rounded-3 p-1 ps-3 ">
        <p class="fw-light m-0">Username</p>
        <p class="card-text fw-lighter">{{ comment.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: "Comment",
  setup: () => {
    return {
      comment: ref(
        {
          id: 1,
          userId: 1,
          postId: 1,
          content: "Je suis un hoax!",
          date: "2021-08-05",
          time: "15:36:47"
        }
      )
    }
  }
})
</script>

<style lang="scss" scoped>
.comment {
  width: 20rem;

  &-box {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
}
</style>