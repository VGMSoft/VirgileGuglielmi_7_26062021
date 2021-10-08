<template>
  <main class="container">
    <div class="row">
      <div class="col">
        <h1 class="text-dark fw-bold text-uppercase after mt-2">fil d'actualité</h1>
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
                    <div class="dropdown-item mb-0 p-1" @click.stop="toggleEdit()">
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

                <input v-if="edit" type="text"
                       class="form-control border border-info"
                       placeholder="New content text"
                       v-model.trim="postContent"/>

                <button v-if="edit" type="submit"
                        class="btn btn-outline-info rounded-pill m-2"
                        @click="editPost(post.id)">
                  <font-awesome-icon :icon="['fas', 'pen']" class="text-blue"/>
                  Edit
                </button>
                <button v-if="edit" type="submit"
                        class="btn btn-outline-info rounded-pill m-2" @click="toggleEdit()">
                  <font-awesome-icon :icon="['fas', 'times']" class="text-red"/>
                  Exit
                </button>
              </div>
              <div class="card-footer d-flex justify-content-between border-top-0 py-0">{{ post.date }}

              </div>
            </div>
          </li>
        </ul>

      </div>
    </div>
  </main>
</template>

<script lang="ts">

import {defineComponent, reactive, ref} from 'vue'
export default defineComponent({
  name: "OnePostCompo"
})
</script>

<style lang="scss" scoped>
@import '../../scss/main';
</style>