import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import Cookies from 'js-cookie'

const commonConfig = {
  baseURL: 'http://localhost:3000/',
}

export const http = axios.create({...commonConfig})

http.interceptors.request.use((config: AxiosRequestConfig) => {
  const userToken = Cookies.get('userToken')
  if (userToken) {
    config.headers = {Authorization: `Bearer ${userToken}`}
  }
  return config
})

http.interceptors.response.use(
  (response: AxiosResponse) => response,
  error => {
    return Promise.reject(error)
  }
)

