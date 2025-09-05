import { httpRequest, setAuthToken } from './http'

const API_BASE_URL = 'https://food.se.215sozvezdie.ru/api'

export async function loginWithPassword({ username, password }) {
  const form = new URLSearchParams()
  form.set('username', username)
  form.set('password', password)
  form.set('grant_type', 'password')

  const res = await fetch(API_BASE_URL + '/auth/login', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: form,
  })
  const data = await res.json()
  if (!res.ok) {
    const error = new Error('Login failed')
    error.status = res.status
    error.data = data
    throw error
  }
  setAuthToken(data.access_token)
  return data
}

export function logout() {
  setAuthToken('')
}


