import axios from "axios";
import {safeDA} from "utils";


// axios.defaults.headers.common['Content-Type'] = 'application/json';

const AUTH_API = `/v1/auth/token`;
const NEWS_API = `/v1/news`;

const sendData = res => res.data.attributes || res.data;

const logServerError = err => {
  if (err.response.status === 500) {
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
  auth: {
    getToken: (email, password) =>
      apiCall("put", AUTH_API, { data: { attributes: { email, password } } })
  },
  news:{
    get: () => apiCall('get', NEWS_API),
    delete: (id) => apiCall('delete', `${NEWS_API}/${id}`)

  }
};
