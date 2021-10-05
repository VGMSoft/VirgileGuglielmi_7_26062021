<template>
  <main class="container">
    <div class="row">
      <div class="col">
        <h1 class="dark-text fw-bold">fil d'actualité</h1>
        <NewPostCompo/>
        <ul class="list-unstyled" v-if="posts">
          <li v-for="post in posts" :key="post">
            <div class="card post shadow-sm mb-3">
              <div class="card-header d-flex flex-row justify-content-between bg-light bg-gradient p-1">
                <div class="d-flex flex-row align-items-center">
                  <img src="@/assets/profile/avatar.png"
                       class="rounded-circle profile-pic border border-primary border-1"
                       alt="avatar"/>
                  <h5 class="card-title text-red mx-2 mb-0">{{ post.user.pseudo }}</h5>
                  <!--              <p class="card-text text-end text-muted"><small>{{ post.time }}</small></p>-->
                </div>
                <div v-if="post.user.id == userId || isAdmin()" class="dropdown">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton"
                          data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <font-awesome-icon :icon="['fas', 'ellipsis-h']" class="me-1"/>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div class="dropdown-item mb-0 p-1" @click="toggleEdit()">
                      <font-awesome-icon :icon="['fas', 'pen']" class="text-secondary me-1"/>
                      <span v-if="edit">Undo Edit</span>
                      <span v-else>Edit Profile</span>
                    </div>
                    <div class="dropdown-item mb-0 p-1" @click="deletePost(post.id)">
                      <font-awesome-icon :icon="['fas', 'trash']" class="text-secondary me-1"/>
                      Supprimer
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body text-secondary border-bottom-0">
                <p class="card-text ">{{ post.content }}</p>
                <input v-if="edit && post.user.id == userId || isAdmin()" type="text"
                       class="form-control border border-warning"
                       placeholder="New content text"
                       v-model.trim="postContent"/>

                <button v-if="edit && post.user.id == userId || isAdmin()" type="submit"
                        class="btn btn-outline-warning rounded-pill m-2"
                        @click="editPost(post.id)">
                  <font-awesome-icon :icon="['fas', 'pen']" class="text-blue"/>
                  Edit
                </button>
                <button v-if="edit && post.user.id == userId || isAdmin()" type="submit"
                        class="btn btn-outline-warning rounded-pill m-2" @click="toggleEdit()">
                  <font-awesome-icon :icon="['fas', 'times']" class="text-red"/>
                  Exit
                </button>
              </div>
              <div class="card-footer d-flex justify-content-between border-top-0 py-0">{{ post.date }}

              </div>
            </div>
          </li>
        </ul>
        <div v-else>
          <Spinner/>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import {http} from "@/config/axios.config"
import {PostModel} from "@/models/postModel"
import Cookies from "js-cookie";
import NewPostCompo from "@/components/NewPostCompo.vue";
import Spinner from "@/components/SpinnerCompo.vue";

export default defineComponent({
  name: "Post",
  components: {NewPostCompo, Spinner},
  setup() {

    // edit mode initial state
    let edit = ref(false)

    const toggleEdit = () => {
      console.log(edit.value)
      if (edit.value === false) {
        edit.value = true
      } else if (edit.value === true) {
        edit.value = false
      }
      return edit.value
    }

    // check user identity
    const userId = Cookies.get('userId');
    const isAdmin = () => {
      return Cookies.get('userRole') === 'ADMIN';
    }

    let posts = ref<Array<PostModel> | null>(null);

    let postContent = ref("")


    onMounted(async () => {
      const axiosResponse = await http.get<Array<PostModel>>('/api/posts')
      posts.value = axiosResponse.data
    })

    // const getOnePost = (id: number) => {
    //   http.get<PostModel>(`/api/posts/${id}`)
    //     .then((response) => {
    //       return response.data
    //     })
    // }


    const getPosts = async () => {
      try {
        const axiosResponse = await http.get<Array<PostModel>>('/api/posts')
        posts.value = axiosResponse.data
      } catch (err) {
        return err
      }
    }

    const editPost = async (id: number) => {
      try {
        const response = await http.put<PostModel>(`/api/posts/${id}`, postContent)
        edit.value = false
        getPosts()
        return response.data
      } catch (err) {
        return err
      }
    }

    const deletePost = async (id: number) => {
      try {
        const response = await http.delete<PostModel>(`/api/posts/${id}`)
        getPosts()
        return response.data
      } catch (err) {
        return err
      }
    }


    return {userId, isAdmin, posts, edit, postContent, toggleEdit, editPost, deletePost}
  }
})
</script>

<style lang="scss" scoped>
.dark-text {
  color: #091E43;
  font-variant: small-caps;
  &::after {
    content: "";
    display: block;
    background-color: #D15059;
    width: 100%;
    height: 3px;
    margin-top: 0.2em;
    margin-bottom: 0.5em;
  }
}

</style>