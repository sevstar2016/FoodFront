import { useEffect, useState } from 'react'
import { getCurrentWeekChoices } from '../services/api'
import ComplexDayGroup from '../components/ComplexDayGroup'
import '../components/ComplexCard.css'
import '../components/ComplexWeek.css'

export default function ComplexCurrentWeekPage() {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCurrentWeekChoices()
      .then((res) => {
        if (res && typeof res === 'object') setData(res)
        else setError('Некорректный ответ сервера')
      })
      .catch(err => setError(err?.data || 'Ошибка загрузки'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="container">Загрузка...</div>
  if (error) return <div className="container" style={{ color: 'red' }}>{String(error)}</div>

  // Получаем все доступные ID дней недели из данных
  const weekdayIds = data ? Object.keys(data).map(Number).sort((a, b) => a - b) : []

  return (
    <div className="profile">
      <h4 className="head_complex_week">Текущая неделя</h4>
      <div className="complex-week-container">
        {weekdayIds.length > 0 ? (
          weekdayIds.map((weekdayId) => (
            <ComplexDayGroup 
              key={weekdayId} 
              complexes={data[weekdayId]} 
              weekdayId={weekdayId} 
            />
          ))
        ) : (
          <p className="no-complexes">Нет доступных комплексов на текущую неделю</p>
        )}
      </div>
    </div>
  )
}


