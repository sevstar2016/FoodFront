import { useEffect, useMemo, useState } from 'react'
import { getNextWeekChoices, setNextWeekChoices, getNextWeekComplexes } from '../services/api'

export default function ComplexNextWeekChoicesPage() {
  const [choices, setChoices] = useState(null)
  const [catalog, setCatalog] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    Promise.all([getNextWeekChoices(), getNextWeekComplexes()])
      .then(([c, cat]) => { setChoices(c); setCatalog(cat) })
      .catch(err => setError(err?.data || 'Ошибка загрузки'))
      .finally(() => setLoading(false))
  }, [])

  const weekdays = useMemo(() => ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'], [])

  function updateChoice(weekday_id, complex_id) {
    setChoices(prev => {
      const items = [...(prev?.items || [])]
      const idx = items.findIndex(x => x.weekday_id === weekday_id)
      if (idx >= 0) items[idx] = { weekday_id, complex_id }
      else items.push({ weekday_id, complex_id })
      return { items }
    })
  }

  async function onSave() {
    setSaving(true)
    try {
      await setNextWeekChoices(choices)
      alert('Сохранено')
    } catch (e) {
      alert('Ошибка сохранения')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="profile">Загрузка...</div>
  if (error) return <div className="profile" style={{ color: 'red' }}>{String(error)}</div>

  return (
    <div className="profile">
      <h1>Выбор на следующую неделю</h1>
      <div style={{ display: 'grid', gap: 16 }}>
        {weekdays.map((name, i) => {
          const weekday_id = i + 1
          const options = (catalog?.[weekday_id] || [])
          const selected = choices?.items?.find(x => x.weekday_id === weekday_id)?.complex_id || ''
          return (
            <div key={weekday_id} style={{ display: 'grid', gap: 8 }}>
              <label>{name}</label>
              <select value={selected} onChange={e => updateChoice(weekday_id, Number(e.target.value))}>
                <option value="">— не выбрано —</option>
                {options.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
          )
        })}
      </div>
      <button onClick={onSave} disabled={saving} style={{ marginTop: 16 }}>Сохранить</button>
    </div>
  )
}


