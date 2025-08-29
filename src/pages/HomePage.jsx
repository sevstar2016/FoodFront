import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { getMe } from '../services/api'

export default function HomePage() {
  const { token } = useAuth()
  const [profile, setProfile] = useState({ name: 'Школа 215 "Созвездие"', className: '', avatarUrl: '' })

  useEffect(() => {
    async function load() {
      try {
        const me = await getMe()
        const fullName = [me?.lastname, me?.name].filter(Boolean).join(' ')
        setProfile({
          name: fullName || profile.name,
          className: me?.class ? `Ученик, класс ${me.class.number}${me.class.letter || ''}` : '',
          avatarUrl: me?.avatar_url || me?.avatarUrl || '',
        })
      } catch (_) {
        // ignore; keep defaults
      }
    }
    if (token) load()
  }, [profile.name, token])

  return (
    <div className="profile">
      <div className="profile_info">
        <svg className="rectangle1" width="112" height="115" viewBox="0 0 112 115" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.9404 47.9236C35.1034 14.699 76.3674 56.9554 76.3674 56.9554L75.4028 65.4896C75.4028 65.4896 25.7488 97.4709 26.1816 63.4857C26.2586 57.4359 26.6653 53.838 27.9404 47.9236Z" fill="#F0B526" fillOpacity="0.59"/>
        </svg>
        <svg className="rectangle2" width="123" height="114" viewBox="0 0 123 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.9894 55.4194C21.2675 17.9657 88.0605 36.2093 88.0605 36.2093L91.9731 45.3191C91.9731 45.3191 59.2152 106.32 40.1241 72.0311C36.7256 65.9272 35.0761 62.0867 32.9894 55.4194Z" fill="#FF6C4A" fillOpacity="0.64"/>
        </svg>
        <div className="profile_photo" id="profile_photo" style={{ backgroundImage: `url(${profile.avatarUrl || '/img/old/infophoto.png'})` }}></div>
        <div className="profile_name">
          <h4 id="nameP" name="nameP">{profile.name}</h4>
          <h5 id="className" name="className">{profile.className}</h5>
        </div>
      </div>
      <div className="profile_menu">
        <a href="/orders">
          <div className="menu_buttons">
            <p>Мои заказы</p>
            <svg className="list" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.90039 13L7.90039 7L1.90039 1" stroke="#7B8794" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </a>
        <a href="/complex">
          <div className="menu_buttons">
            <p>Комплекс на выбор</p>
            <svg className="list" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.90039 13L7.90039 7L1.90039 1" stroke="#7B8794" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </a>
        <a href="/settings">
          <div className="menu_buttons">
            <p>Настройки</p>
            <svg className="list" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.90039 13L7.90039 7L1.90039 1" stroke="#7B8794" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </a>
        <a href="/help">
          <div className="menu_buttons">
            <p>Помощь</p>
            <svg className="list" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.90039 13L7.90039 7L1.90039 1" stroke="#7B8794" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </a>
        <a href="/auth/sign-in" onClick={e => { e.preventDefault(); localStorage.removeItem('access_token'); window.location.href = '/auth/sign-in' }}>
          <div className="menu_buttons menu_buttons_exit">
            <p>Выйти</p>
            <svg className="list" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.90039 13L7.90039 7L1.90039 1" stroke="#7B8794" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}


