import request from "@/utils/request";

/* 
用户请求封装
*/

export function login(phone, password) {
  return request({
    url: '/user/login',
    method: 'post',
    params: {
      user_phone: phone,
      user_pwd: password
    }
  })
}

export function sendCode(phone) {
  return request({
    url: '/user/sendCode',
    method: 'GET',
    params: {
      phone
    }
  })
}

export function addUser(data) {
  return request({
    url: '/user/addUser',
    method: 'POST',
    data
  })
}

export function updateUserInfo(data) {
  return request({
    url: '/user/updateUserInfo',
    method: 'PUT',
    data
  })
}

export function findUserById(user_id) {
  return request({
    url: `/user/findUserById/` + user_id,
    method: 'get'
  })
}

export function faceLogin(data) {
  return request({
    url: '/user/faceLogin',
    method: 'POST',
    data
  })
}