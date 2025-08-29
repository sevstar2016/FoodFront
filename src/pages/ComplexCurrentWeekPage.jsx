import { useEffect, useState } from 'react'
import { getCurrentWeekComplexes } from '../services/api'

export default function ComplexCurrentWeekPage() {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCurrentWeekComplexes()
      .then(setData)
      .catch(err => setError(err?.data || 'Ошибка загрузки'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="container">Загрузка...</div>
  if (error) return <div className="container" style={{ color: 'red' }}>{String(error)}</div>

  return (
    <div className="container">
      <h1>Текущая неделя</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}


