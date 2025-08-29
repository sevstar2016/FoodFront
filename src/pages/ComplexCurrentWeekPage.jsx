import { useEffect, useState } from 'react'
import { getCurrentWeekComplexes } from '../services/api'

export default function ComplexCurrentWeekPage() {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCurrentWeekComplexes()
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
      <h4 className="head_complex_week">Текущая неделя</h4>
      {/* Здесь будет табличное/списочное отображение комплексов; пока скрываем отладочный вывод */}
    </div>
  )
}


