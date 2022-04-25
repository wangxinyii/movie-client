/*
*  封装请求
* */

import axios from "axios";

const request = axios.create({
  baseURL: '/api'
})

export default request