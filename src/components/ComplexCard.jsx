import React from 'react'
import './ComplexCard.css'

/**
 * Компонент карточки для отображения комплекса питания
 * @param {Object} complex - Объект комплекса
 * @param {string} dayName - Название дня недели
 * @param {Function} onClick - Функция обработки клика по карточке
 * @param {boolean} selectable - Флаг, указывающий, можно ли выбрать карточку
 * @param {boolean} selected - Флаг, указывающий, выбрана ли карточка
 */
export default function ComplexCard({ complex, dayName, onClick, selectable = false, selected = false }) {
  if (!complex) return null

  const handleClick = () => {
    if (selectable && onClick) {
      onClick(complex.id);
    }
  };

  return (
    <div 
      className={`complex-card ${selectable ? 'selectable' : ''} ${selected ? 'selected' : ''}`} 
      onClick={handleClick}
    >
      <div className="complex-card-header">
        <h3>{dayName}</h3>
        <h4>{complex.name}</h4>
      </div>
      <div className="complex-card-content">
        {complex.products && complex.products.length > 0 ? (
          <ul className="complex-products-list">
            {complex.products.map((product) => (
              <li key={product.id} className="complex-product-item">
                <span className="product-name">{product.name}</span>
                {product.weight && <span className="product-weight">{product.weight} г</span>}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-products">Нет информации о продуктах</p>
        )}
      </div>
      {complex.price && (
        <div className="complex-card-footer">
          <span className="complex-price">{complex.price} ₽</span>
        </div>
      )}
    </div>
  )
}