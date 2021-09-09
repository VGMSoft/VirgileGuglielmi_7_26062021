<template class="d-flex flex-column">
  <div class="d-flex flex-column justify-content-center align-items-center welcome h-100 my-5">
  <div class="d-flex flex-column">
    <div class="input-group mb-3">
      <input type="text" class="form-control border-primary rounded-pill_left shadow-sm"
             placeholder="What's on your mind ?">
      <span class="input-group-text p-0 border-primary rounded-pill_right shadow-sm"><button
          class="post-send rounded-pill_right border-primary"><font-awesome-icon :icon="['fas', 'share']"
                                                                                 class="text-primary me-1"/></button></span>
    </div>
    <ul class="list-unstyled">
      <li v-for="post in posts" :key="post">
        <div class="card post shadow-sm mb-5">
          <div class="card-header d-flex flex-row align-items-center bg-light bg-gradient p-1">
            <img :src="post.avatarUrl" class="rounded-circle profile-pic border border-primary border-1" alt="avatar"/>
            <h5 class="card-title text-secondary mx-2 mb-0">{{ post.userName }}</h5>
            <p class="card-text text-end text-muted"><small>{{ post.time }}</small></p>
          </div>
          <div class="card-body text-secondary border-bottom-0">
            <p class="card-text ">{{ post.content }}</p>
          </div>
          <!--<div class="card-footer d-flex justify-content-between border-top-0 py-0">-->
          <!--          <button class="btn btn-outline-primary rounded-pill btn-sm"><font-awesome-icon :icon="['fas', 'thumbs-up']" class="me-1"/>Like</button>-->
          <!--          <button class="btn btn-outline-primary rounded-pill btn-sm"><font-awesome-icon :icon="['fas', 'comment']" class="me-1"/>Comment</button>-->
          <!--          <button class="btn btn-outline-primary rounded-pill btn-sm"><font-awesome-icon :icon="['fas', 'share']" class="me-1"/>Share</button>-->
          <!--        </div>-->
        </div>
      </li>

    </ul>
  </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {loggedUser} from "@/config/axios.config"
import {PostModel} from "@/models/postModel"

export default defineComponent({
  name: "Post",

  props: {
    avatarUrl: {
      type: String,
      required: false
    },
    userName: {
      type: String,
      required: true
    },
    time: {
      type: Date,
      required: true
    },
    content: {
      type: String,
      required: true
    }

  },
  setup: () => {
    const createPost = () => {
      loggedUser.post<Array<PostModel>>(`/api/posts`)
          .then((response) => {
            return response.data
          })
          .catch((err) => {
            return err
          })
    }

    const getAllPosts = () => {
      loggedUser.get<Array<PostModel>>('/api/posts')
          .then((response) => {
            return response.data
          })

    }

    const getOnePost = (id: number) => {
      loggedUser.get<Array<PostModel>>(`/api/posts/${id}`)
          .then((response) => {
            return response.data
          })
    }

    const editPost = (id: number) => {
      loggedUser.put<Array<PostModel>>(`/api/posts/${id}`)
          .then((response) => {
            return response.data
          })
    }

    const deletePost = (id: number) => {
      loggedUser.delete<Array<PostModel>>(`/api/posts/${id}`)
          .then((response) => {
            return response.data
          })
    }

    return {
      getAllPosts, getOnePost, createPost, editPost, deletePost,
      posts: (
      [
        {
          id: 1,
          userName: "VGMSoft",
          avatarUrl: "https://i.pravatar.cc/150?img=55",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          date: "2021-08-05",
          time: "15:36:47"
        },
        {
          id: 2,
          userName: "Catita",
          avatarUrl: "https://i.pravatar.cc/150?img=44",
          content: "hola todos!",
          date: "2021-08-05", time: "15:36:47"
        },
        {
          id: 3,
          userName: "Lucas",
          avatarUrl: "https://i.pravatar.cc/150?img=4",
          content: "eeeeeeuhhhh!",
          date: "2021-08-05",
          time: "15:36:47"
        },
        {
          id: 4,
          userName: "Calypso",
          avatarUrl: "https://i.pravatar.cc/150?img=19",
          content: "miaou!",
          date: "2021-08-05",
          time: "15:36:47"
        }
      ]
      )

    }
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