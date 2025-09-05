import React from 'react'
import ComplexCard from './ComplexCard'
import './ComplexCard.css'
import './ComplexDayGroup.css'

/**
 * Компонент для группировки комплексов по дням недели
 * @param {Object} complexes - Массив комплексов для определенного дня недели
 * @param {number} weekdayId - ID дня недели (1-7)
 * @param {Function} onComplexSelect - Функция обработки выбора комплекса
 * @param {boolean} selectable - Флаг, указывающий, можно ли выбрать комплексы
 * @param {number} selectedComplexId - ID выбранного комплекса
 */
export default function ComplexDayGroup({ 
  complexes, 
  weekdayId, 
  onComplexSelect, 
  selectable = false, 
  selectedComplexId = null 
}) {
  const weekdays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
  const dayName = weekdays[weekdayId - 1] || `День ${weekdayId}`

  if (!complexes || complexes.length === 0) {
    return null
  }

  return (
    <div className="complex-day-group">
      <h2 className="complex-day-title">{dayName}</h2>
      <div className="complex-cards-container">
        {complexes.map((complex) => (
          <ComplexCard 
            key={complex.id} 
            complex={complex} 
            dayName={dayName} 
            onClick={onComplexSelect ? () => onComplexSelect(weekdayId, complex.id) : undefined}
            selectable={selectable}
            selected={selectedComplexId === complex.id}
          />
        ))}
      </div>
    </div>
  )
}