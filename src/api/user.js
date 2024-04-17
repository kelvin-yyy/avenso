import request from '@/utils/request'
export function apiRead(data) {
  return request({
    url: '/api/read',
    method: 'post',
	data
  })
}
export function apiDetails(data) {
  return request({
    url: '/api/details',
    method: 'post',
	data
  })
}
export function collectionUpdate(data) {
  return request({
    url: '/api/collectionUpdate',
    method: 'post',
	data
  })
}
export function apiFinancials(data) {
  return request({
    url: '/api/Financials',
    method: 'post',
	data
  })
}
export function apiNews(data) {
  return request({
    url: '/api/news',
    method: 'post',
	data
  })
}
export function apiSimilar(data) {
  return request({
    url: '/api/Similar',
    method: 'post',
	data
  })
}
export function apiEmployee(data) {
  return request({
    url: '/api/employee',
    method: 'post',
	data
  })
}
export function employeeSearch(data) {
  return request({
    url: '/api/employeeSearch',
    method: 'post',
	data
  })
}
