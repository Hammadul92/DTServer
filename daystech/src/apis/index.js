import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5000'
  // baseURL: 'http://35.183.144.142:3000'
})
