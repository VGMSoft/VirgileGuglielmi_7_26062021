<template>
  <h1>NewPostCompo</h1>
  <div class="d-flex justify-content-around">
<!--    <router-link to="/posts" class="text-center mb-0 p-1">-->
<!--      <font-awesome-icon :icon="['fas', 'eye']" class="text-primary me-1"/>-->
<!--      See all-->
<!--    </router-link>-->
  </div>
  <div class="d-flex flex-column justify-content-center align-items-center h-100 w-100 my-5 mx-0">
    <div class="card bg-light">
      <div class="card-body">
        <form @submit.prevent="createPost">
          <label for="postContent" class="p-2">What's on your mind ?</label>
          <textarea class="form-control" id="postContent" rows="1" col="50" v-model="postData.content"></textarea>
          <button type="submit" class="btn btn-primary m-2">
            Post !
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
import {useRouter} from "vue-router"

export default defineComponent({
  name: "NewPostCompo",
  setup() {
    const nl2br = (str, replaceMode?, isXhtml?) => {
      let breakTag = (isXhtml) ? '<br />' : '<br>';
      let replaceStr = (replaceMode) ? '$1' + breakTag : '$1' + breakTag + '$2';
      return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, replaceStr);
    }

    function br2nl (str, replaceMode) {
      var replaceStr = (replaceMode) ? "\n" : '';
      // Includes <br>, <BR>, <br />, </br>
      return str.replace(/<\s*\/?br\s*[/]?>/gi, replaceStr);
    }
    const router = useRouter()
    const postData = {
      content: nl2br(""),
      date: new Date()
      //TODO not fonctional
      //new Date().toLocaleString()
    }

    const createPost = async () => {
      try {
        const response = await http.post<PostModel>('/api/posts', postData)
        await router.push({name: 'posts'})
        return response.data
      } catch (err) {
        return err
      }
    }

    return {postData, br2nl, createPost}
  }

})
</script>

<style scoped>

</style>