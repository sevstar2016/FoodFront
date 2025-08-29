export default function BasketPage() {
  return (
    <div className="menu_choice">
      <div className="navigation_menu">
        <div className="food">
          <p><a href="#gorachee">Горячее</a></p>
          <p><a href="#garnir">Гарнир</a></p>
          <p><a href="#drinks">Напитки</a></p>
          <p><a href="#cakes">Выпечка</a></p>
          <p><a href="#zakuski">Закуски</a></p>
          <p><a href="#kasha">Каша</a></p>
          <p><a href="#salat">Салат</a></p>
          <p><a href="#desert">Десерт</a></p>
          <p><a href="#fructy">Фрукты</a></p>
        </div>
      </div>

      <div className="all_korz">
        <div className="all_of_dish_korz">
          <div className="picture_food_b">
            <img src="/img/products/4.jpg" width="150" height="150" />
            <div className="text_of_food_korz">Кибер-блинчик<p>100р</p></div>
          </div>
          <div className="korz_kolich">
            <p>Количество <img src="/img/navigations_icon/minus.png" width="15" height="15" /> 1 <img src="/img/navigations_icon/plus.png" width="15" height="15" /></p>
          </div>
        </div>
        <a href="/basket"><button type="submit" name="button_complex" className="button_korz">
          <h4>Добавить в корзину</h4>
        </button></a>
      </div>
    </div>
  )
}


