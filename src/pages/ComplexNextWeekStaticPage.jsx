export default function ComplexNextWeekStaticPage() {
  return (
    <div>
      <div className="profile profile_complex">
        <div className="profile_complex_day">Понедельник</div>
        <div className="complex_variants_1">
          <div className="complex_selection_name">Комплекс 1</div>
          <div className="complex_menu">
            <p>Горячий бутерброд с сыром «Дабл-клик»</p>
            <p>Каша вязкая молочная пшенная с маслом сливочным или вареньем «Оперативка»</p>
            <p>Чай с сахаром с лимоном</p>
            <p>Фрукт свежий</p>
          </div>
          <input type="radio" id="highload1" name="highload1" />
        </div>
        <div className="complex_variants_2">
          <div className="complex_selection_name">Комплекс 2</div>
          <div className="complex_menu">
            <p>Салат из свежих огурцов с льняным маслом «Джаббер»</p>
            <p>Гуляш из мяса</p>
            <p>Каша гречневая рассыпчатая «Движок»</p>
            <p>Чай с сахаром с лимоном</p>
            <p>Хлеб Крестьянский «Х-гамма»</p>
            <p>Хлеб ржаной «У-гамма»</p>
          </div>
          <input type="radio" id="highload1" name="highload1" />
        </div>
      </div>
      {/* Остальные дни в том же формате можно добавить по мере необходимости */}
      <button type="submit" name="button_complex" className="button">
        <h4>Отправить</h4>
      </button>
    </div>
  )
}


