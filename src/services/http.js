const API_BASE_URL = 'https://food.se.215sozvezdie.ru/api'
// const API_BASE_URL = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_BASE) || '/api'

function getAuthToken() {
  return localStorage.getItem('access_token') || ''
}

export async function httpRequest(path, options = {}) {
  const headers = new Headers(options.headers || {})
  if (!headers.has('Content-Type') && options.body && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json')
  }
  if (!headers.has('Accept')) headers.set('Accept', 'application/json')

  const token = getAuthToken()
  if (token) headers.set('Authorization', `Bearer ${token}`)

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: options.method || 'GET',
    headers,
    body: options.body,
  })

  if (!response.ok) {
    // Если получили ошибку авторизации (401), удаляем токен
    if (response.status === 401) {
      setAuthToken('')
      const error = new Error('Unauthorized')
      error.status = response.status
      throw error
    }
    
    // Для других ошибок пытаемся получить данные
    const contentType = response.headers.get('content-type') || ''
    const data = contentType.includes('application/json') ? await response.json() : await response.text()
    const error = new Error('HTTP error')
    error.status = response.status
    error.data = data
    throw error
  }
  
  // Если ответ успешный, получаем данные
  const contentType = response.headers.get('content-type') || ''
  const data = contentType.includes('application/json') ? await response.json() : await response.text()
  return data
}

export function setAuthToken(token) {
  if (token) localStorage.setItem('access_token', token)
  else localStorage.removeItem('access_token')
}


