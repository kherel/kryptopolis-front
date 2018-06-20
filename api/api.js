import axios from "axios";
import {safeDA} from "utils";
import {paginator} from 'utils'

const AUTH_API = `/v1/auth/token`;
const NEWS_API = `/v1/news`;
const ARTICLES_API = `/v1/articles`;
const VIDEOS_API = `/v1/videos`;
const WIDGET_API = `/v1/tickers/special`;

const CLOUDINARY_CLOUD = process.env.CLOUDINARY_CLOUD
const UPLOAD_PRESET = 'unsigned_img'

const sendData = res => res.data.attributes || res.data;

const logServerError = err => {
  if (err.response && err.response.status === 500) {
    const dataError = safeDA(err, ["response", "data"], {})
    console.log(dataError.error || dataError.message) //eslint-disable-line
    throw err;
  } else {
    throw err;
  }
};

// Basic api call function
const apiCall = (method, path, data) =>
  axios[method](path, data)
    .then(sendData)
    .catch(logServerError);

export default {
  cloudinary: {
    upload: (file, tag) => {
      if (!file) return
      const formData = new FormData()
      formData.append('file', file)
      formData.append('tags', `${tag}`)
      formData.append('upload_preset', UPLOAD_PRESET) // Replace the preset name with your own
      formData.append('timestamp', (Date.now() / 1000) | 0)

      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios
        .post(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`, formData, {
          transformRequest: [
            (data, headers) => {
              delete headers.common.Authorization
              return data
            },
          ],
        })
        .then(({ data }) => data.secure_url)
    },
  },
  auth: {
    getToken: (email, password) =>
      apiCall("put", AUTH_API, { data: { attributes: { email, password } } })
  },
  news:{
    get: params => apiCall('get', NEWS_API, { params }),
    post: attributes => apiCall('post', NEWS_API, { data: { attributes } }),
    put: (id, attributes) => apiCall('put', `${NEWS_API}/${id}`, { data: { attributes } }),
    delete: id => apiCall('delete', `${NEWS_API}/${id}`),
    show: id => apiCall('get', `${NEWS_API}/${id}`),
  },
  articles:{
    get: () => apiCall('get', ARTICLES_API),
    post: (attributes) => apiCall('post', ARTICLES_API, { data: { attributes } }),
    put: (id, attributes) => apiCall('put', `${ARTICLES_API}/${id}`, { data: { attributes } }),
    delete: (id) => apiCall('delete', `${ARTICLES_API}/${id}`),
    show: id => apiCall('get', `${ARTICLES_API}/${id}`),
  },
  videos:{
    get: () => apiCall('get', VIDEOS_API),
    post: (attributes) => apiCall('post', VIDEOS_API, { data: { attributes } }),
    put: (id, attributes) => apiCall('put', `${VIDEOS_API}/${id}`, { data: { attributes } }),
    delete: (id) => apiCall('delete', `${VIDEOS_API}/${id}`),
    show: id => apiCall('get', `${VIDEOS_API}/${id}`),
  },
  tickers:{
    widget: () => apiCall('get', WIDGET_API),
  }
};