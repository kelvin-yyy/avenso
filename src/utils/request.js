import axios from 'axios'
// create an axios instance
const service = axios.create({
  // baseURL: "https://dev-admin.soulsmint.com/api", // 服务器
  baseURL: "http://34.235.28.87:8082",
  timeout: 50000 // request timeout
})



export default service