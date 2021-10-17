<template>
  <div class=" mb-3">
    <div class="card bg-light shadow-sm">
      <div class="card-body">
        <form @submit.prevent="createPost()">
          <label for="postContent" class="p-2 text-uppercase">nouveau post</label>
          <div class="d-flex flex-row">
          <textarea class="form-control" id="postContent" placeholder=""
                    v-model="postData.content"></textarea>
          <button type="submit" class="btn btn-outline-primary rounded-pill ms-2">
            Post
          </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from "vue"
import {http} from "@/config/axios.config"
import {PostModel} from "@/models/postModel"

export default defineComponent({
  name: "NewPostCompo",

  setup(props, {emit}) {

    const postData = reactive({
      content: "",
      date: new Date()
    })

    let posts = ref<Array<PostModel> | null>(null);

    const getPosts = async () => {
      try {
        const axiosResponse = await http.get<Array<PostModel>>('/api/posts')
        posts.value = axiosResponse.data
      } catch (err) {
        return err
      }
    }

    const createPost = async () => {
      try {
        const response = await http.post<PostModel>('/api/posts', postData)
        emit("onCreatePost", response.data)
        postData.content = ""
        return response.data
      } catch (err) {
        return err
      }
    }

    return {postData, getPosts, createPost}
  }

})
</script>

<style scoped>

</style>