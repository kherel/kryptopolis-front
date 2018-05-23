import axios from 'axios'
import { stringify } from 'qs'

const baseURL = "http://46.101.229.239:4000";

export const initApi = () => {
  axios.defaults.baseURL = baseURL
  axios.defaults.paramsSerializer = params => stringify(params, { encode: false })
}

export const setToken = (token) =>  {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}