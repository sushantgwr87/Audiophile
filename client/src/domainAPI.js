import axios from 'axios';

const dev = process.env.NODE_ENV !== 'production';

let { REACT_APP_PUBLIC_API_URL, REACT_APP_PRODUCTION_API_URL } = process.env;

const apiUrl = dev ? REACT_APP_PUBLIC_API_URL : REACT_APP_PRODUCTION_API_URL;

const domainurl = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default domainurl;