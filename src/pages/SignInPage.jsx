import { useState } from 'react'
import { loginWithPassword } from '../services/auth'
import { useAuth } from '../context/AuthContext'

export default function SignInPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { setToken } = useAuth()

  async function onSubmit(e) {
    e.preventDefault()
    setError('')
    try {
      const data = await loginWithPassword({ username, password })
      setToken(data.access_token)
      window.location.replace('/')
    } catch (err) {
      setError('Неверный логин или пароль')
    }
  }

  return (
    <div>
      <div className="profile_sign_in">
        <div className="logo_container"><div className="logo"></div></div>
        <div className="error" id="errorM" style={{ display: error ? 'block' : 'none' }}>
          <h3>Неверный логин или пароль</h3>
        </div>
        <div className="sign_in_block">
          <div className="text_sign_in">LOGIN</div>
          <input type="email" id="login" className="email" autoFocus value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="sign_in_block">
          <div className="text_sign_in">PASSWORD</div>
          <input type="password" id="password" className="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
      </div>
      <button type="submit" name="button_sign_in" className="button" onClick={onSubmit}>
        <h4>Отправить</h4>
      </button>
    </div>
  )
}


