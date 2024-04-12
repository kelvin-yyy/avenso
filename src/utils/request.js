import axios from 'axios'
// create an axios instance
const service = axios.create({
  // baseURL: "https://dev-admin.soulsmint.com/api", // 服务器
  baseURL: "https://avenso-1818427028.us-east-1.elb.amazonaws.com",
  timeout: 50000 // request timeout
})



export default service
