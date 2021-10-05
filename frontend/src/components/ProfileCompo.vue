<template>
  <div class="d-flex justify-content-center mt-3">
    <div class="d-flex flex-column">
      <h1 class="dark-text fw-bold">profile</h1>
      <div class="card " v-if="user">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="@/assets/profile/avatar.png" class="img-fluid rounded-start" alt="Profile picture">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title text-red fw-bold">{{ user.pseudo }}</h5>

                <!--Dropdown-->
                <div class="dropdown mb-2">
                  <button class="btn btn-secondary btn-sm dropdown-toggle text-end" type="button"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <font-awesome-icon :icon="['fas', 'cog']" class="me-1"/>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div class="dropdown-item mb-0 p-1" @click="toggleEdit()">
                      <font-awesome-icon :icon="['fas', 'pen']" class="me-1"/>
                      <span v-if="edit">Undo Edit</span>
                      <span v-else>Edit Profile</span>
                    </div>
                    <div class="dropdown-item mb-0 p-1">
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
              <input v-if="edit" type="text"
                     class="form-control border border-warning mb-3"
                     placeholder="Nouveau pseudo"
                     required
                     v-model.trim="editValues.pseudo"/>

              <p class="card-text mb-3"><strong>Type de compte : </strong>{{ user.role }}</p>

              <!--Names-->
              <p class="card-text"><strong>Nom complet : </strong>{{ user.firstname }} {{ user.lastname }}</p>
              <div class="row mb-3">
                <div class="col">
                  <input v-if="edit" type="text"
                         class="form-control border border-warning"
                         placeholder="Nouveau prénom"
                         required
                         v-model.trim="editValues.firstname"/>
                </div>
                <div class="col">
                  <input v-if="edit" type="text"
                         class="form-control border border-warning"
                         placeholder="Nouveau nom"
                         required
                         v-model.trim="editValues.lastname"/>
                </div>
              </div>

              <!--Mail-->
              <p class="card-text"><strong>Email : </strong>{{ user.email }}</p>

              <input v-if="edit" type="email"
                     class="form-control border border-warning mb-3"
                     placeholder="Nouvel email"
                     required
                     v-model.trim="editValues.email">

              <p class="card-text">Inscrit depuis le {{ user.signup_date }}</p>
              <div>
                <label for="formFile" class="form-label"><strong class="text-muted">Upload un avatar ?</strong></label>
                <input class="form-control form-control" id="formFile" type="file" disabled>
              </div>
              <button v-if="edit" type="submit" class="btn btn-outline-warning rounded-pill m-2" @click="editProfile()">
                <font-awesome-icon :icon="['fas', 'pen']" class="text-blue"/>
                Edit
              </button>
              <button v-if="edit" type="submit" class="btn btn-outline-warning rounded-pill m-2" @click="toggleEdit()">
                <font-awesome-icon :icon="['fas', 'times']" class="text-red"/>
                Exit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <Spinner/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, ref} from 'vue'
import {http} from "@/config/axios.config"
import {UserModel} from "@/models/userModel"
import Cookies from "js-cookie";
import Spinner from "@/components/SpinnerCompo.vue";
import {useRouter} from "vue-router"


export default defineComponent({
  name: "Profile",
  components: {Spinner},
  setup() {
    let user = ref<UserModel | null>(null);
    const userId = Cookies.get('userId')
    let edit = ref(false)
    const editValues = reactive({
      pseudo: "",
      email: "",
      firstname: "",
      lastname: ""
    })

    const router = useRouter()

    onMounted(async () => {
      edit.value = false
      const axiosResponse = await http.get<UserModel>(`/api/profile/${userId}`);
      user.value = axiosResponse.data
    })

    const getProfile = async () => {
      try {
        const axiosResponse = await http.get<UserModel>(`/api/profile/${userId}`);
        user.value = axiosResponse.data
        return axiosResponse.data
      } catch (err) {
        return err
      }
    }

    const toggleEdit = () => {
      if (edit.value === false) {
        edit.value = true
      } else if (edit.value === true) {
        edit.value = false
      }
      return edit.value
    }

    const editProfile = async () => {
      try {
        const editReq = await http.put<UserModel>(`/api/profile/${userId}`, {...editValues})
        edit.value = false
        getProfile()
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
    return {user, editProfile, deleteProfile, edit, toggleEdit, editValues}
  }
})
</script>

<style lang="scss" scoped>

.card {
  width: 80vw;
}

.dark-text {
  font-variant: small-caps;
  color: #091E43;
  //background-color: #AEAEB0;
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

.profile-pic {
  border-radius: 50%;
}
</style>