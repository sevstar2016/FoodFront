import { useEffect, useState } from 'react'
import { getNextWeekComplexes, getNextWeekChoices, setNextWeekChoices } from '../services/api'
import ComplexDayGroup from '../components/ComplexDayGroup'
import '../components/ComplexCard.css'
import '../components/ComplexWeek.css'

export default function ComplexNextWeekPage() {
  const [data, setData] = useState(null)
  const [choices, setChoices] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    Promise.all([getNextWeekComplexes(), getNextWeekChoices()])
      .then(([complexes, userChoices]) => {
        if (complexes && typeof complexes === 'object') {
          setData(complexes)
          
          // Подготовка автоматического выбора первых комплексов
          const userChoicesItems = userChoices && userChoices.items ? userChoices.items : []
          const autoSelectChoices = { items: [...userChoicesItems] }
          
          // Для каждого дня недели выбираем первый комплекс, если пользователь еще не сделал выбор
          Object.keys(complexes).forEach(weekdayId => {
            const numWeekdayId = Number(weekdayId)
            // Проверяем, есть ли уже выбор для этого дня недели
            const hasChoice = userChoicesItems.some(item => item.weekday_id === numWeekdayId)
            
            // Если нет выбора и есть комплексы для этого дня, выбираем первый
            if (!hasChoice && complexes[weekdayId] && complexes[weekdayId].length > 0) {
              autoSelectChoices.items.push({
                weekday_id: numWeekdayId,
                complex_id: complexes[weekdayId][0].id
              })
            }
          })
          
          setChoices(autoSelectChoices)
        } else {
          setError('Некорректный ответ сервера')
        }
      })
      .catch(err => setError(err?.data || 'Ошибка загрузки'))
      .finally(() => setLoading(false))
  }, [])

  // Функция для обработки выбора комплекса
  const handleComplexSelect = (weekdayId, complexId) => {
    setChoices(prev => {
      const items = [...(prev?.items || [])]
      const idx = items.findIndex(x => x.weekday_id === weekdayId)
      if (idx >= 0) {
        // Если уже выбран этот комплекс, снимаем выбор
        if (items[idx].complex_id === complexId) {
          items.splice(idx, 1)
        } else {
          // Иначе обновляем выбор
          items[idx] = { weekday_id: weekdayId, complex_id: complexId }
        }
      } else {
        // Добавляем новый выбор
        items.push({ weekday_id: weekdayId, complex_id: complexId })
      }
      return { items }
    })
  }

  // Функция для сохранения выбранных комплексов
  const saveChoices = async () => {
    setSaving(true)
    try {
      await setNextWeekChoices(choices)
      // alert('Выбор комплексов сохранен')
    } catch (e) {
      alert('Ошибка при сохранении выбора')
      console.error(e)
    } finally {
      setSaving(false)
    }
  }

  // Получаем ID выбранного комплекса для каждого дня недели
  const getSelectedComplexId = (weekdayId) => {
    const choice = choices?.items?.find(item => item.weekday_id === weekdayId)
    return choice ? choice.complex_id : null
  }

  if (loading) return <div className="container">Загрузка...</div>
  if (error) return <div className="container" style={{ color: 'red' }}>{String(error)}</div>

  // Получаем все доступные ID дней недели из данных
  const weekdayIds = data ? Object.keys(data).map(Number).sort((a, b) => a - b) : []

  return (
    <div className="profile">
      <h4 className="head_complex_week">Следующая неделя</h4>
      <div className="complex-week-container">
        {weekdayIds.length > 0 ? (
          weekdayIds.map((weekdayId) => (
            <ComplexDayGroup 
              key={weekdayId} 
              complexes={data[weekdayId]} 
              weekdayId={weekdayId}
              onComplexSelect={handleComplexSelect}
              selectable={true}
              selectedComplexId={getSelectedComplexId(weekdayId)}
            />
          ))
        ) : (
          <p className="no-complexes">Нет доступных комплексов на следующую неделю</p>
        )}
      </div>
      
      {choices && choices.items && choices.items.length > 0 && (
        <div className="save-choices-container">
          <button 
            className="save-choices-button" 
            onClick={saveChoices} 
            disabled={saving}
          >
            {saving ? 'Сохранение...' : 'Сохранить выбор'}
          </button>
        </div>
      )}
    </div>
  )
}


