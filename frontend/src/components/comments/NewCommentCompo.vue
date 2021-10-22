<template>
  <div class=" mb-3">
    <div class="card bg-light">
      <div class="card-body">
        <form @submit.prevent="createComment()" >
          <label for="commentContent" class="p-2 text-uppercase text-dark">nouveau comment</label>
          <div class="d-flex flex-row">
          <textarea class="form-control" id="commentContent" rows="1" col="50" placeholder="New Comment"
                    v-model="commentData.content"></textarea>
          <button type="submit" class="btn btn-outline-primary rounded-pill ms-2">
            Comment
          </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject, reactive, Ref, ref} from "vue"
import {http} from "@/config/axios.config"
import {CommentModel} from "@/models/commentModel";
import Cookies from "js-cookie";

export default defineComponent({
  name: "NewCommentCompo",

  setup(props, {emit}) {
    const userId = Cookies.get('userId')
    const postId = inject<Ref<number>>('postId');

    //Models
    let comments = ref<Array<CommentModel> | undefined>();

    const commentData = reactive({
      userId: +userId,
      postId: +postId,
      content: "",
      date: new Date()
    })

    const getComments = async () => {
      try {
        const axiosResponse = await http.get<Array<CommentModel>>(`/api/posts/${postId}/comments`)
        comments.value = axiosResponse.data
      } catch (err) {
        return err
      }
    }

    const createComment = async () => {
      try {
        const response = await http.post<CommentModel>(`/api/posts/${postId}/comments`, commentData)
        emit("onCreateComment", response.data)
        commentData.content = ""
        return response.data
      } catch (err) {
        return err
      }
    }

    return {commentData, getComments, createComment}
  }

})
</script>

<style scoped>

</style>