<template>
  <main class="container">
    <div class="row">
      <div class="col">
        <h1 class="dark-text fw-bold text-uppercase after mt-2">profile</h1>
        <div class="card" v-if="profile">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="@/assets/profile/avatar.png"
                   class="img-fluid rounded-start"
                   alt="Profile picture"/>
              <!--              <img :src=profile.avatar_url-->
              <!--                   class="img-fluid rounded-start"-->
              <!--                   alt="Profile picture"/>-->
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h2 class="card-title text-red fw-bold">{{ profile.pseudo }}</h2>

                  <!--Dropdown-->
                  <div class="dropdown mb-2">
                    <button class="btn btn-secondary btn-sm dropdown-toggle text-end"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            aria-label="édition du profile">
                      <font-awesome-icon :icon="['fas', 'cog']" class="me-1"/>
                    </button>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                      <div class="dropdown-item mb-0 p-1" @click="toggleEdit()">
                        <font-awesome-icon :icon="['fas', 'pen']" class="me-1"/>
                        <span v-if="editState">Undo Edit</span>
                        <span v-else>Edit Profile</span>
                      </div>

                      <div class="dropdown-item mb-0 p-1 text-muted">
                        <font-awesome-icon :icon="['fas', 'lock']" class="me-1"/>
                        Changer mot de passe
                      </div>

                      <div class="dropdown-item mb-0 p-1" @click="deleteProfile()">
                        <font-awesome-icon :icon="['fas', 'trash']" class="me-1"/>
                        Supprimer le compte
                      </div>

                    </div>
                  </div>
                </div>

                <!--Pseudo-->
                <input v-if="editState" type="text"
                       class="form-control border border-info mb-3"
                       placeholder="Nouveau pseudo"
                       required
                       v-model.trim="profile.pseudo"/>

                <p class="card-text mb-3">
                  <strong class="text-primary">Type de compte : </strong>
                  {{ profile.role }}
                </p>

                <!--Names-->
                <p class="card-text">
                  <strong class="text-primary">Nom complet : </strong>
                  {{ profile.firstname }}
                  {{ profile.lastname }}
                </p>

                <div class="row mb-3">
                  <div class="col">
                    <input v-if="editState" type="text"
                           class="form-control border border-info"
                           placeholder="Nouveau prénom"
                           required
                           v-model.trim="profile.firstname"/>
                  </div>
                  <div class="col">
                    <input v-if="editState" type="text"
                           class="form-control border border-info"
                           placeholder="Nouveau nom"
                           required
                           v-model.trim="profile.lastname"/>
                  </div>
                </div>

                <!--Mail-->
                <p class="card-text">
                  <strong class="text-primary">Email : </strong>
                  {{ profile.email }}
                </p>

                <input v-if="editState"
                       type="email"
                       class="form-control border border-info mb-3"
                       placeholder="Nouvel email"
                       required
                       v-model.trim="profile.email"/>

                <p class="card-text">
                  <strong class="text-primary">Inscrit depuis : </strong>
                  {{ profile.signup_date }}
                </p>

                <!--File upload-->
                <div v-if="editState" class="d-flex flex-row mb-3">
                  <input class="form-control" type="file" @change="onFileSelected"
                         ref="fileInput" disabled/>
                  <!--                  <button class="btn btn-outline-info mx-2" @click="$refs.fileInput.click()">Pick file</button>-->
<!--                  <button class="btn btn-info mx-2" @click="onUpload">Upload</button>-->
                </div>

                <!--Edit buttons-->
                <button v-if="editState"
                        type="submit"
                        class="btn btn-outline-info rounded-pill m-2"
                        @click="editProfile()">
                  <font-awesome-icon :icon="['fas', 'pen']" class="text-blue"/>
                  Edit
                </button>

                <button v-if="editState"
                        type="submit"
                        class="btn btn-outline-info rounded-pill m-2"
                        @click="toggleEdit()">
                  <font-awesome-icon :icon="['fas', 'times']" class="text-primary"/>
                  Exit
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import {http} from "@/config/axios.config"
import {UserModel} from "@/models/userModel"
import Cookies from "js-cookie";
import {useRouter} from "vue-router"

export default defineComponent({
  name: "Profile",
  setup() {
    // check user identity
    const userId = Cookies.get('userId')

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
    const router = useRouter()


    onMounted(async () => {
      // editState.value = false
      await getProfile()
    })

    //Models
    let user = ref<UserModel | undefined>();
    let profile = ref<UserModel | undefined>();
    console.log("profileMod:",profile)
    //Profile
    const getProfile = async () => {
      try {
        const getReq = await http.get<UserModel>(`/api/profile/${userId}`);
        console.log("profile:",profile)
        profile.value = getReq.data
        return getReq.data
      } catch (err) {
        return err
      }
    }

    const editProfile = async () => {
      const formData = new FormData();
      formData.append('file', file)
      try {
        const editReq = await http.put<UserModel>(`/api/profile/${userId}`, profile.value)
        console.log("profileEdit:",profile)
        // await http.put<UserModel>(`/api/profile/${userId}`, formData)
        editState.value = false
        await getProfile()
        return editReq.data
      } catch (err) {
        return err
      }
    }

    const deleteProfile = async () => {
      try {
        const response = await http.delete<UserModel>(`/api/profile/${userId}`)
        Cookies.remove('userToken')
        Cookies.remove('userId')
        Cookies.remove('userRole')
        await router.push({name: 'home'})
        return response.data
      } catch (err) {
        return err
      }
    }

    //Avatar
    let file
    const onFileSelected = (event) => {
      file = event.target.files[0]
    }
    const onUpload = async () => {
      const formData = new FormData();
      formData.append('file', file)
      try {
        await http.put(`/api/profile/${userId}`, formData)
      } catch (error) {
        console.log(error)
      }
        // {
          // headers: {
          //   'Content-Type': 'multipart/form-data'
          // }
          // onUploadProgress: progressEvent => {
          //   console.log("upload progress : " + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%")
          // }
        // }
    }

    return {
      user, profile, editState,
      editProfile, deleteProfile, toggleEdit,
      onFileSelected, onUpload
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../scss/main';
</style>