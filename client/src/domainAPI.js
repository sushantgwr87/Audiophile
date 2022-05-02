import axios from 'axios';

const domainurl = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    "Content-Type": "application/json",
  },
});

// domainurl.interceptors.request.use(function (config) {
//   const currentAuthToken = localStorage.getItem('token');
//   // const currentAuthRefToken = localStorage.getItem('refToken');
//   config.headers.Authorization =  currentAuthToken;
//   // config.headers.common['x-auth-refToken'] = currentAuthRefToken;
//   config.headers.common['x-auth-token'] = currentAuthToken;
//   console.log(config);
//   return config;
// });

export default domainurl;