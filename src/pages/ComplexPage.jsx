import { Link } from 'react-router-dom'

export default function ComplexPage() {
  return (
    <div className="profile">
      <div className="profile_menu">
        <Link to="/complex/current-week">
          <div className="menu_buttons menu_buttons_first_button">
            <p>Текущая неделя</p>
            <svg className="list" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.90039 13L7.90039 7L1.90039 1" stroke="#7B8794" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Link>
        <Link to="/complex/next-week">
          <div className="menu_buttons">
            <p>Следующая неделя</p>
            <svg className="list" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.90039 13L7.90039 7L1.90039 1" stroke="#7B8794" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  )
}


