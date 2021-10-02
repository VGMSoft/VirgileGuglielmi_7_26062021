<template>
  <div class="card " v-if="user">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="@/assets/profile/avatar.png" class="img-fluid rounded-start" alt="Profile picture">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5 class="card-title text-red fw-bold">{{ user.pseudo }}</h5>
            <div class="dropdown">
              <button class="btn btn-secondary btn-sm dropdown-toggle text-end" type="button" id="dropdownMenuButton"
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <font-awesome-icon :icon="['fas', 'cog']" class="me-1"/>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div class="dropdown-item mb-0 p-1" @click="editProfile()">
                  <font-awesome-icon :icon="['fas', 'pen']" class="me-1"/>
                  Edit Profile
                </div>
                <div class="dropdown-item mb-0 p-1">
                  <font-awesome-icon :icon="['fas', 'lock']" class="me-1"/>
                  Changer mot de passe
                </div>
                <div class="dropdown-item mb-0 p-1" @click="deleteProfile()">
                  <font-awesome-icon :icon="['fas', 'trash']" class="me-1"/>
                  Supprimmer le compte
                </div>
              </div>
            </div>
          </div>
          <p class="card-text"><strong>Type de compte :</strong>{{ user.role }}</p>
          <p class="card-text"><strong>Nom complet : </strong>{{ user.firstname }} {{ user.lastname }}</p>
          <p class="card-text"><strong>Mail : </strong>{{ user.email }}</p>
          <p class="card-text"><small class="text-muted">Inscrit depuis le {{ user.signup_date }}</small></p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <Spinner/>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
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

    onMounted(async () => {
      const axiosResponse = await http.get<UserModel>(`/api/profile/${userId}`);
      user.value = axiosResponse.data

      const email = axiosResponse.data.email
    })


    const router = useRouter()

    // const getProfile = async (id: number) => {
    //   try {
    //     const response = await http.get<UserModel>(`/api/profile/${id}`)
    //     return response.data
    //   } catch (err) {
    //     return err
    //   }
    // }

    const editProfile = async () => {
      try {
        const response = await http.put<UserModel>(`/api/profile/${userId}`)
        return response.data
      } catch (err) {
        return err
      }
    }

    const deleteProfile = async () => {
      try {
        const response = await http.delete<UserModel>(`/api/profile/${userId}`)
        await router.push({name: 'home'})
        return response.data
      } catch (err) {
        return err
      }
    }
    return {user, editProfile, deleteProfile}
  }
})
</script>

<style scoped>

</style>