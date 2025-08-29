import { useEffect, useState } from 'react'
import { getNextWeekComplexes } from '../services/api'

export default function ComplexNextWeekPage() {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getNextWeekComplexes()
      .then((res) => {
        if (res && typeof res === 'object') setData(res)
        else setError('Некорректный ответ сервера')
      })
      .catch(err => setError(err?.data || 'Ошибка загрузки'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="container">Загрузка...</div>
  if (error) return <div className="container" style={{ color: 'red' }}>{String(error)}</div>

  return (
    <div className="profile">
      <h4 className="head_complex_week">Следующая неделя</h4>
    </div>
  )
}


