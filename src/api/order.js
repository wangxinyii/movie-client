import request from '@/utils/request'

export function addOrder(data) {
  return request({
    url: '/orderInfo/addOrder',
    method: 'POST',
    data
  })
}

export function findRefundOrderByUserId(user_id, page, limit) {
  return request({
    url: '/orderInfo/findRefundOrderByUserId',
    method: 'GET',
    params: {
      user_id,
      page,
      limit
    }
  })
}