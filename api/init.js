import axios from 'axios'
import { stringify } from 'qs'

const baseURL = "http://46.101.229.239:4000";

export const initApi = () => {
  console.log('api init')

  axios.defaults.baseURL = baseURL
  axios.defaults.paramsSerializer = params => stringify(params, { encode: false })
}

export const setToken = (token) =>  {
  console.log('token set')
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}