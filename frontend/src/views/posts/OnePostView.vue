<template>
  <Navbar>
    <li class="nav-item m-2">
      <router-link to="/profile" class="nav-link">
        <font-awesome-icon :icon="['fas', 'user']"/>
        Profile
      </router-link>
    </li>
    <li class="nav-item m-2">
      <router-link to="/posts" class="nav-link">
        <font-awesome-icon :icon="['fas', 'envelope']"/>
        Tous les posts
      </router-link>
    </li>
  </Navbar>

  <main class="container">
    <div class="row">
      <div class="col">
        <h1 class="text-dark fw-bold text-uppercase after mt-2">post en détail</h1>
        <!--OnePostComponent-->
        <OnePost v-if="post"
                 :pseudo="post.user.pseudo"
                 :content="post.content"
                 :date="post.date">
          <!--dropdown-->
          <template v-slot:dropdown>
            <div v-if="post.user.id === +userId || isAdmin()"
                 class="dropdown">
              <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton"
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                      aria-label="édition de la publication">
                <font-awesome-icon :icon="['fas', 'ellipsis-h']" class="me-1"/>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div class="dropdown-item mb-0 p-1" @click.stop="toggleEdit()">
                  <font-awesome-icon :icon="['fas', 'pen']" class="text-secondary me-1"/>
                  <span v-if="editState">Undo Edit</span>
                  <span v-else>Edit Post</span>
                </div>
                <div class="dropdown-item mb-0 p-1" @click="deletePost(post.id)">
                  <font-awesome-icon :icon="['fas', 'trash']" class="text-secondary me-1"/>
                  Supprimer
                </div>
              </div>
            </div>
          </template>
          <!--edit-->
          <template v-slot:edit>
            <input v-if="editState" type="text"
                   class="form-control border border-info"
                   v-model.trim="post.content"/>

            <button v-if="editState" type="submit"
                    class="btn btn-outline-info rounded-pill m-2"
                    @click="editPost(post.id)">
              <font-awesome-icon :icon="['fas', 'pen']" class="text-blue"/>
              Edit
            </button>
            <button v-if="editState" type="submit"
                    class="btn btn-outline-info rounded-pill m-2"
                    @click="toggleEdit()">
              <font-awesome-icon :icon="['fas', 'times']" class="text-primary"/>
              Exit
            </button>
          </template>
          <template v-slot:comments>
            <AllCommentsCompo/>
          </template>
        </OnePost>

      </div>
    </div>
  </main>
</template>

<script lang="ts">

import {defineComponent, onMounted, provide, ref} from 'vue'
import Navbar from "@/components/NavbarCompo.vue";
import OnePost from "@/components/posts/OnePostCompo.vue";
import {http} from "@/config/axios.config";
import {PostModel} from "@/models/postModel";
import {useRoute, useRouter} from "vue-router";
import Cookies from "js-cookie";
import AllCommentsCompo from "@/components/comments/AllCommentsCompo.vue";


export default defineComponent({
  name: "OnePostView",
  components: {Navbar, OnePost, AllCommentsCompo},
  setup(props, {emit}) {
    // check user identity
    const userId = Cookies.get('userId');
    const isAdmin = () => {
      return Cookies.get('userRole') === 'ADMIN';
    }

    // edit mode initial state
    let editState = ref(false);
    // edit mode toggle
    const toggleEdit = () => {
      if (editState.value === false) {
        editState.value = true
      } else if (editState.value === true) {
        editState.value = false
      }
      return editState.value
    };

    //router utilities
    const route = useRoute()
    const router = useRouter()
    const id = route.params.id
    provide('postId', id);

    //Models
    let post = ref<PostModel | undefined>();


    onMounted(async () => {
      await getPost(+id)
    })

    const getPost = async (postId: number) => {
      try {
        const axiosResponse = await http.get<PostModel>(`/api/posts/${postId}`)
        emit("onGetPost", postId)
        post.value = axiosResponse.data
      } catch (err) {
        return err
      }
    }

    const editPost = async (postId: number) => {
      try {
        const axiosResponse = await http.put(`/api/posts/${postId}`, post.value)
        editState.value = false
        await router.push(`/posts`)
        return axiosResponse.data
      } catch (err) {
        return err
      }
    }

    const deletePost = async (postId: number) => {
      try {
        const response = await http.delete<PostModel>(`/api/posts/${postId}`)
        await router.push(`/posts`)
        return response.data
      } catch (err) {
        return err
      }
    }

    return {
      post, userId, editState, isAdmin,
      getPost, editPost, deletePost, toggleEdit
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../../scss/main';
</style>