<template>
  <div class="d-flex flex-column justify-content-center align-items-center h-100 w-100 my-5 mx-0">
    <div class="card bg-light">
      <div class="card-body">
        <form @submit.prevent="createPost">
        <label for="postContent" class="p-2">What's on your mind ?</label>
        <textarea class="form-control" id="postContent" rows="5" col="33" v-model="postData.content"></textarea>
        <button type="submit" class="btn btn-primary m-2">
          Inscription
        </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {http} from "@/config/axios.config"
import {PostModel} from "@/models/postModel"

export default defineComponent({
  name: "NewPostCompo",
  setup() {
    const postData = {
      content: "",
      date: new Date()
    }
    const createPost = async () => {
      try {
        const response = await http.post<PostModel>('/api/posts', postData)
        return response.data
      } catch (err) {
        return err
      }
    }
    return {postData, createPost}
  }

})
</script>

<style scoped>

</style>