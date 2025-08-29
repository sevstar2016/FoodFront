import { httpRequest } from './http'

// Auth
export async function registerUser(payload) {
  return httpRequest('/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export const getMe = () => httpRequest('/auth/me')

// Users
export const listUsers = () => httpRequest('/users/')
export const getUser = (id) => httpRequest(`/users/${id}`)
export const updateUser = (id, payload) => httpRequest(`/users/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
export const deleteUser = (id) => httpRequest(`/users/${id}`, { method: 'DELETE' })
export const createUser = (payload) => httpRequest('/users/', { method: 'POST', body: JSON.stringify(payload) })

// Products
export const listProducts = () => httpRequest('/products/')
export const getProduct = (id) => httpRequest(`/products/${id}`)
export const updateProduct = (id, payload) => httpRequest(`/products/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
export const deleteProduct = (id) => httpRequest(`/products/${id}`, { method: 'DELETE' })
export const createProduct = (payload) => httpRequest('/products/', { method: 'POST', body: JSON.stringify(payload) })

// Complexes
export const listComplexes = () => httpRequest('/complexes/')
export const getComplex = (id) => httpRequest(`/complexes/${id}`)
export const updateComplex = (id, payload) => httpRequest(`/complexes/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
export const deleteComplex = (id) => httpRequest(`/complexes/${id}`, { method: 'DELETE' })
export const createComplex = (payload) => httpRequest('/complexes/', { method: 'POST', body: JSON.stringify(payload) })
export const getNextWeekComplexes = () => httpRequest('/complexes/week/next')
export const getCurrentWeekComplexes = () => httpRequest('/complexes/week/current')
export const getNextWeekChoices = () => httpRequest('/complexes/week/next/choices')
export const setNextWeekChoices = (payload) => httpRequest('/complexes/week/next/choices', { method: 'POST', body: JSON.stringify(payload) })
export const getCurrentWeekChoices = () => httpRequest('/complexes/week/current/choices')
export const setComplexClosed = (id, is_closed) => httpRequest(`/complexes/${id}/close?is_closed=${is_closed}`, { method: 'PATCH' })

// Orders
export const listOrders = () => httpRequest('/orders/')
export const getOrder = (id) => httpRequest(`/orders/${id}`)
export const updateOrder = (id, payload) => httpRequest(`/orders/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
export const deleteOrder = (id) => httpRequest(`/orders/${id}`, { method: 'DELETE' })
export const createOrder = (payload) => httpRequest('/orders/', { method: 'POST', body: JSON.stringify(payload) })

// Classes
export const listClasses = () => httpRequest('/classes/')
export const getClassById = (id) => httpRequest(`/classes/${id}`)
export const updateClass = (id, payload) => httpRequest(`/classes/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
export const deleteClass = (id) => httpRequest(`/classes/${id}`, { method: 'DELETE' })
export const createClass = (payload) => httpRequest('/classes/', { method: 'POST', body: JSON.stringify(payload) })
export const addStudentsToClass = (class_id, user_ids) => httpRequest(`/classes/${class_id}/students`, { method: 'POST', body: JSON.stringify({ user_ids }) })
export const removeStudentFromClass = (class_id, user_id, to_class_id) => httpRequest(`/classes/${class_id}/students/${user_id}${to_class_id ? `?to_class_id=${to_class_id}` : ''}`, { method: 'DELETE' })


