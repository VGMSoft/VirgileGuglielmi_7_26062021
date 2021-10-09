<template>
  <div class=" mb-3">
    <div class="card bg-light shadow-sm">
      <div class="card-body">
        <form @submit.prevent="createPost()">
          <label for="postContent" class="p-2 text-uppercase">Nouveau post</label>
          <textarea class="form-control" id="postContent" rows="1" col="50" placeholder="" v-model="postData.content"></textarea>
          <button type="submit" class="btn btn-outline-primary rounded-pill my-2">
            Post !
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from "vue"
import {http} from "@/config/axios.config"
import {PostModel} from "@/models/postModel"
import {useRouter} from "vue-router";

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