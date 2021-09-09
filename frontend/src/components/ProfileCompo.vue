<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="@/assets/profile/VGM.png" class="img-fluid rounded-start" alt="Profile picture">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title text-primary">{ user.name }}</h5>
          <p class="card-text"><strong>Date de naissance: </strong>{ user.birthday }}</p>
          <p class="card-text"><strong>Pseudo: </strong>{ user.pseudo }}</p>
          <p class="card-text"><strong>Email: </strong>{ user.email }}</p>
          <p class="card-text"><small class="text-muted">Inscrit depuis le { user.signupDate }}</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {loggedUser} from "../config/axios.config"
import {PostModel} from "../models/postModel"

//---------------------------------------------------
// const createProfile = () => {
//   loggedUser.post<Array<PostModel>>(`/api/profile`)
//     .then((response) => {
//       return response.data
//     })
//     .catch((err) => {
//       return err
//     })
// }
//
// //TODO Not safe
// const getAllProfiles = () => {
//   loggedUser.get<Array<PostModel>>('/api/profile')
//     .then((response) => {
//       return response.data
//     })
//     .catch((err) => {
//       return err
//     })
// }
//
// const getOneProfile = (id:number) => {
//   loggedUser.get<Array<PostModel>>(`/api/profile/${id}`)
//     .then((response) => {
//       return response.data
//     })
//     .catch((err) => {
//       return err
//     })
// }
//
// const editProfile = (id:number) => {
//   loggedUser.put<Array<PostModel>>(`/api/profile/${id}`)
//     .then((response) => {
//       return response.data
//     })
//     .catch((err) => {
//       return err
//     })
// }
//
// const deleteProfile = (id:number) => {
//   loggedUser.delete<Array<PostModel>>(`/api/profile/${id}`)
//     .then((response) => {
//       return response.data
//     })
//     .catch((err) => {
//       return err
//     })
// }
//---------------------------------------------------

export default defineComponent({
  name: "Profile",
  setup() {
    const user = ref({
      name: "Virgile Guglielmi",
      birthday: "30/05/1991",
      pseudo: "VGMSoft",
      email: "virgile.gug@gmail.com",
      signupDate: "30/05/2018",
      avatarUrl: "https://i.pravatar.cc/400"
    })
    // return { user, getAllProfiles, getOneProfile, createProfile, editProfile, deleteProfile}
    return {user}
  }
})
</script>

<style scoped>

</style>