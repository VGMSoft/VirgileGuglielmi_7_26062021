import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {readCookie} from './cookie.utils'

const commonConfig = {
  baseURL: 'http://localhost:3000/',
}

export const loggedUser = axios.create({...commonConfig})

loggedUser.interceptors.request.use((config: AxiosRequestConfig) => {
  //TODO
  const token = readCookie(process.env.userToken)
  if (token) {
    config.headers = {Authorization: `Bearer ${token}`}
  }
  return config
})

loggedUser.interceptors.response.use(
  (response: AxiosResponse) => response,
  error => {
    return Promise.reject(error)
  }
)

