import axios from 'axios';

const domainurl = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    "Content-Type": "application/json",
  },
});

export default domainurl;