<template class="d-flex flex-column">
  <div class="d-flex flex-column justify-content-center align-items-center welcome h-100 my-5">
    <div class="d-flex flex-column">
      <ul class="list-unstyled">
        <li v-for="post in posts" :key="post">
          <div class="card post shadow-sm mb-5">
            <div class="card-header d-flex flex-row justify-content-between bg-light bg-gradient p-1">
              <div class="d-flex flex-row align-items-center">
                <img src="@/assets/profile/avatar.png" class="rounded-circle profile-pic border border-primary border-1"
                     alt="avatar"/>
                <h5 class="card-title text-red mx-2 mb-0">{{ post.user.pseudo }}</h5>
                <!--              <p class="card-text text-end text-muted"><small>{{ post.time }}</small></p>-->
              </div>
              <div class="dropdown">
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <font-awesome-icon :icon="['fas', 'ellipsis-h']" class="me-1"/>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <router-link to="/posts/:id/edit" class="dropdown-item mb-0 p-1">
                    <font-awesome-icon :icon="['fas', 'pen']" class="text-secondary me-1"/>
                    Editer ...
                  </router-link>
                  <div class="dropdown-item mb-0 p-1">
                    <font-awesome-icon :icon="['fas', 'trash']" class="text-secondary me-1" @click="deletePost()"/>
                    Supprimer ...
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body text-secondary border-bottom-0">
              <p class="card-text ">{{ post.content }}</p>
              <p class="card-text ">{{ post.id }}</p>
            </div>
<!--            <div class="card-footer d-flex justify-content-between border-top-0 py-0">-->
<!--              <button class="btn btn-outline-primary rounded-pill btn-sm">-->
<!--                <font-awesome-icon :icon="['fas', 'thumbs-up']" class="me-1"/>-->
<!--                Like-->
<!--              </button>-->
<!--              <button class="btn btn-outline-primary rounded-pill btn-sm">-->
<!--                <font-awesome-icon :icon="['fas', 'comment']" class="me-1"/>-->
<!--                Comment-->
<!--              </button>-->
<!--            </div>-->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import {http} from "@/config/axios.config"
import {PostModel} from "@/models/postModel"

export default defineComponent({
  name: "Post",

  setup() {
    let posts = ref<Array<PostModel> | null>(null);
    onMounted(async () => {
      const axiosResponse = await http.get<Array<PostModel>>('/api/posts')
      posts.value = axiosResponse.data
      console.log(axiosResponse.data)

    })
    const createPost = async () => {
      try {
        const response = await http.post<PostModel>(`/api/posts`)
        return response.data
      } catch (err) {
        return err
      }
    }

    // const getAllPosts = async () => {
    //   try {
    //     const posts = await http.get<Array<PostModel>>('/api/posts')
    //     console.log(posts.data)
    //     return posts.data
    //   } catch (err) {
    //     return err
    //   }
    // }

    const getOnePost = (id: number) => {
      http.get<PostModel>(`/api/posts/${id}`)
        .then((response) => {
          return response.data
        })
    }

    const editPost = (id: number) => {
      http.put<PostModel>(`/api/posts/${id}`)
        .then((response) => {
          return response.data
        })
    }

    const deletePost = (id: number) => {
      http.delete<PostModel>(`/api/posts/${id}`)
        .then((response) => {
          return response.data
        })
    }

    return {posts, getOnePost, createPost, editPost, deletePost}
  }
})
</script>

<style lang="scss" scoped>
.post {
  width: 40rem;

  &-send {
    height: 100%;
  }
}
</style>