// import { ref } from 'vue';
// import {UserModel} from "@/models/userModel";
// import {http} from "@/config/axios.config";
//
// const userModel = ref(null as UserModel | null);
// const userData = {
//   email: "",
//   password: ""
// }
// async function authenticate(email: string, password: string): Promise<UserModel> {
//   const response = await http.post('/auth/login', userData)
// // in case of success, store the logged-in user
//   userModel.value = response.data;
//   return userModel.value
// }
// function logout(): void { // ...
//   userModel.value = null; }
// // ...
// export function useUserService() { return {
//   userModel,
//   authenticate,
//   logout
// }; }