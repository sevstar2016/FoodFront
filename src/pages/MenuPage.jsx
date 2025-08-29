export default function MenuPage() {
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
      <div className="all_menu">
        <div className="name_of_dish"><a name="gorachee"><b>Привет!<br/>Раздел еще в разработке, но <br/>ты уже можешь <br/>посмотреть его<p>Горячее</p></b></a></div>
        <div className="all_of_dish">
          {[
            { src: '/img/products/4.jpg', title: 'Кибер-блинчик', price: '100p' },
            { src: '/img/products/6.jpg', title: 'Индейка в горшочке', price: '100p' },
            { src: '/img/products/10.jpg', title: 'Плов из куры', price: '100p' },
            { src: '/img/products/15.jpg', title: 'Тефтели ёжики', price: '100p' },
            { src: '/img/products/20.jpg', title: 'Шницель', price: '100p' },
            { src: '/img/products/23.jpg', title: 'Гуляш', price: '100p' },
            { src: '/img/30.jpg', title: 'Азу из мяса с картофелем', price: '100p' },
            { src: '/img/34.jpg', title: 'Миясо тушённое в сметанном соусе', price: '100p' },
            { src: '/img/37.jpg', title: 'Гратен картофельный', price: '100p' },
            { src: '/img/39.jpg', title: 'Омлет натуральный', price: '100p' },
            { src: '/img/40.jpg', title: 'Рыба запечённая с сыром', price: '100p' },
            { src: '/img/45.jpg', title: 'Жаркое из мяса с овощами', price: '100p' },
            { src: '/img/47.jpg', title: 'Филе куриное с овощами', price: '100p' },
            { src: '/img/50.jpg', title: 'Плов из мяса с томатом', price: '100p' },
            { src: '/img/51.jpg', title: 'Котлета детская', price: '100p' },
          ].map((x, idx) => (
            <div className="block_food" key={`hot-${idx}`}>
              <div className="picture_food"><img src={x.src} width="80"/></div>
              <div className="text_of_food">
                <p><h1>{x.title}</h1></p>
                <p><h2>{x.price}</h2></p>
              </div>
            </div>
          ))}
        </div>

        <div className="name_of_dish"><a name="garnir"><b>Гарнир</b></a></div>
        <div className="all_of_dish">
          {[
            { src: '/img/products/16.jpg', title: 'Картофельное пюре' },
            { src: '/img/products/25.jpg', title: 'Овощи припущенные' },
            { src: '/img/products/28.jpg', title: 'Макароны "Болоньезе"' },
            { src: '/img/products/41.jpg', title: 'Картофель отварной' },
            { src: '/img/products/48.jpg', title: 'Макароны отварные' },
          ].map((x, idx) => (
            <div className="block_food" key={`side-${idx}`}>
              <div className="picture_food"><img src={x.src} width="80"/></div>
              <div className="text_of_food">
                <p><h1>{x.title}</h1></p>
                <p><h2>100p</h2></p>
              </div>
            </div>
          ))}
        </div>

        <div className="name_of_dish"><a name="drinks"><b>Напитки</b></a></div>
        <div className="all_of_dish">
          {[
            { src: '/img/products/3.jpg', title: 'Чай с сахаром' },
            { src: '/img/products/11.jpg', title: 'Шиповник' },
            { src: '/img/products/17.jpg', title: 'Чай с лимоном' },
            { src: '/img/products/49.jpg', title: 'Морс' },
          ].map((x, idx) => (
            <div className="block_food" key={`drink-${idx}`}>
              <div className="picture_food"><img src={x.src} width="80"/></div>
              <div className="text_of_food">
                <p><h1>{x.title}</h1></p>
                <p><h2>100p</h2></p>
              </div>
            </div>
          ))}
        </div>

        <div className="name_of_dish"><a name="cakes"><b>Выпечка</b></a></div>
        <div className="all_of_dish">
          {[
            { src: '/img/products/14.jpg', title: '3Д-ватрушка' },
            { src: '/img/products/26.jpg', title: 'Пирог тигрёнок' },
            { src: '/img/products/29.jpg', title: 'Булочка домашняя' },
            { src: '/img/22.jpg', title: 'Булочка с отрубями' },
            { src: '/img/products/36.jpg', title: 'Маффин' },
            { src: '/img/products/42.jpg', title: 'Манник' },
            { src: '/img/products/46.jpg', title: 'Пирожок ягодный' },
            { src: '/img/7.jpg', title: 'Хлеб крестьянский витаминный' },
            { src: '/img/products/8.jpg', title: 'Хлеб ржаной' },
            { src: '/img/18.jpg', title: 'Батон с отрубями' },
          ].map((x, idx) => (
            <div className="block_food" key={`cake-${idx}`}>
              <div className="picture_food"><img src={x.src} width="80"/></div>
              <div className="text_of_food">
                <p><h1>{x.title}</h1></p>
                <p><h2>100p</h2></p>
              </div>
            </div>
          ))}
        </div>

        <div className="name_of_dish"><a name="zakuski"><b>Закуски</b></a></div>
        <div className="all_of_dish">
          {[
            { src: '/img/products/1.jpg', title: 'Бутерброд с маслом и сыром' },
            { src: '/img/5.jpg', title: 'Овощи свежие в нарезке' },
            { src: '/img/32.jpg', title: 'Горячий бутерброд с сыром' },
          ].map((x, idx) => (
            <div className="block_food" key={`snack-${idx}`}>
              <div className="picture_food"><img src={x.src} width="80"/></div>
              <div className="text_of_food">
                <p><h1>{x.title}</h1></p>
                <p><h2>100p</h2></p>
              </div>
            </div>
          ))}
        </div>

        <div className="name_of_dish"><a name="kasha"><b>Каша</b></a></div>
        <div className="all_of_dish">
          {[
            { src: '/img/2.jpg', title: 'Каша вязкая ячневая' },
            { src: '/img/12.jpg', title: 'Каша вязкая молочная' },
            { src: '/img/21.jpg', title: 'Каша вязкая гречневая' },
            { src: '/img/33.jpg', title: 'Каша молочная пшённая' },
            { src: '/img/38.jpg', title: 'Каша рисовая' },
            { src: '/img/44.jpg', title: 'Каша гречневая' },
            { src: '/img/35.jpg', title: 'Булгур с овощами' },
          ].map((x, idx) => (
            <div className="block_food" key={`kasha-${idx}`}>
              <div className="picture_food"><img src={x.src} width="80"/></div>
              <div className="text_of_food">
                <p><h1>{x.title}</h1></p>
                <p><h2>100p</h2></p>
              </div>
            </div>
          ))}
        </div>

        <div className="name_of_dish"><a name="salat"><b>Салат</b></a></div>
        <div className="all_of_dish">
          {[
            { src: '/img/9.jpg', title: 'Салат с помидором' },
            { src: '/img/27.jpg', title: 'Салат "Свежесть"' },
            { src: '/img/43.jpg', title: 'Салат с огурцом' },
          ].map((x, idx) => (
            <div className="block_food" key={`salat-${idx}`}>
              <div className="picture_food"><img src={x.src} width="80"/></div>
              <div className="text_of_food">
                <p><h1>{x.title}</h1></p>
                <p><h2>100p</h2></p>
              </div>
            </div>
          ))}
        </div>

        <div className="name_of_dish"><a name="desert"><b>Десерты</b></a></div>
        <div className="all_of_dish">
          <div className="block_food">
            <div className="picture_food"><img src="/img/13.jpg" width="80"/></div>
            <div className="text_of_food">
              <p><h1>Сырники из творога</h1></p>
              <p><h2>100p</h2></p>
            </div>
          </div>
        </div>

        <div className="name_of_dish"><a name="fructy"><b>Фрукты</b></a></div>
        <div className="all_of_dish">
          {[
            { src: '/img/19.jpg', title: 'Фрукт' },
            { src: '/img/31.jpg', title: 'Яблоко печёное' },
          ].map((x, idx) => (
            <div className="block_food" key={`fruit-${idx}`}>
              <div className="picture_food"><img src={x.src} width="80"/></div>
              <div className="text_of_food">
                <p><h1>{x.title}</h1></p>
                <p><h2>100p</h2></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


