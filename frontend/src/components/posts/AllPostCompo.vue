<template>
  <main class="container">
    <div class="row">
      <div class="col">
        <h1 class="text-dark--lighter fw-bold text-uppercase after mt-2">fil d'actualité</h1>
        <NewPostCompo @onCreatePost="getPosts()"/>
        <ul class="list-unstyled" v-if="posts">
          <li v-for="post in posts" :key="post">
            <div class="card post shadow-sm mb-3" @click="showPost(post.id)">
              <div class="card-header d-flex flex-row justify-content-between bg-light bg-gradient p-1">
                <div class="d-flex flex-row align-items-center">
                  <img src="@/assets/profile/avatar.png"
                       class="rounded-circle profile-pic border border-primary border-1"
                       alt="avatar"/>
                  <h2 class="card-title text-red mx-2 mb-0">{{ post.user.pseudo }}</h2>
                </div>
              </div>
              <div class="card-body text-secondary border-bottom-0">
                <p class="card-text ">{{ post.content }}</p>
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
import NewPostCompo from "@/components/posts/NewPostCompo.vue";
import Spinner from "@/components/utility/SpinnerCompo.vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "AllPostCompo",
  components: {NewPostCompo, Spinner},
  setup() {
    const router = useRouter()

    // edit mode initial state
    let edit = ref(false)
    // edit mode toggle
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

    let posts = ref<Array<PostModel> | null>();

    onMounted(async () => {
      const axiosResponse = await http.get<Array<PostModel>>('/api/posts')
      posts.value = axiosResponse.data
    })

    const showPost = async (id) => {
      await router.push(`/posts/${id}`)
    }

    const getPosts = async () => {
      try {
        const axiosResponse = await http.get<Array<PostModel>>('/api/posts')
        posts.value = axiosResponse.data
        return axiosResponse.data
      } catch (err) {
        return err
      }
    }

    const deletePost = async (id: number) => {
      try {
        const response = await http.delete<PostModel>(`/api/posts/${id}`)
        await getPosts()
        return response.data
      } catch (err) {
        return err
      }
    }

    return {
      userId, isAdmin, posts,
      edit, toggleEdit,
      showPost, getPosts, deletePost
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../../scss/main';

.post:hover {
  opacity: 0.6;
  border: 1px solid lighten(#D15059, 20%);

}
</style>