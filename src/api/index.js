import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/auth',
    method: 'post',
    data
  })
}
export function getInfo() {
  return request({
    url: '/user/auth',
    method: 'get',
  })
}
export function getClass(params) {
  return request({
    url: '/user/auth',
    method: 'get',
    params: { params }
  })
}