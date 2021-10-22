<template>
  <main class="container px-1">
    <div class="row">
      <div class="col">
        <NewCommentCompo @onCreateComment="getComments()"/>
        <ul class="list-unstyled">
          <li v-for="comment in comments" :key="comment">

             <div class="card mb-3 shadow-sm">
              <div class="card-body bg-light p-2 ">
                <div class=" d-flex flex-row justify-content-between mb-2">
                  <div class="d-flex flex-row align-items-center">
                    <img src="@/assets/profile/avatar.png"
                         class="rounded-circle profile-pic border border-primary border-1"
                         alt="avatar"/>
                    <h2 class="card-title text-red mx-2 mb-0">{{ comment.user.pseudo }}</h2>
                  </div>
                </div>
                <div class="ps-2">
                  <p class="card-text text-dark">{{ comment.content }}</p>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between py-0 text-dark">{{ comment.date }}</div>
            </div>

          </li>
        </ul>
        <!--        <div v-else>-->
        <!--          <Spinner/>-->
        <!--        </div>-->
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent, inject, onMounted, ref} from 'vue'
import {http} from "@/config/axios.config"
import Cookies from "js-cookie";
import {useRouter} from "vue-router";
import {CommentModel} from '@/models/commentModel';
import NewCommentCompo from "@/components/comments/NewCommentCompo.vue";

export default defineComponent({
  name: "AllPostCompo",
  components: {NewCommentCompo},
  setup() {

    // edit mode initial state
    let edit = ref(false)
    // edit mode toggle
    const toggleEdit = () => {
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
    const postId = inject('postId');
    let comments = ref<Array<CommentModel> | undefined>();

    onMounted(async () => {
      await getComments()
    })


    const getComments = async () => {
      try {
        const axiosResponse = await http.get<Array<CommentModel>>(`/api/posts/${postId}/comments`)
        comments.value = axiosResponse.data

        console.log(comments.value)

        return axiosResponse.data
      } catch (err) {
        return err
      }
    }

    const deleteComment = async (postId: number) => {
      try {
        const response = await http.delete<CommentModel>(`/api/posts/${postId}/comments`)
        await getComments()
        return response.data
      } catch (err) {
        return err
      }
    }

    return {
      userId, isAdmin, comments,
      edit, toggleEdit,
      getComments, deleteComment
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