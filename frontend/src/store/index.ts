import {createStore} from "vuex"

const store = createStore({
  state: {
    userInfos: {
      pseudo: "",
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    },
  },
  actions: {
    createAccount: ({commit}, userInfos) => {
      commit
      console.log(userInfos)
    }
  }
})
export default store