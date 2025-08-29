export default function ChangePasswordPage() {
  return (
    <div>
      <div className="error" id="errorM"><h3>Неверный пароль</h3></div>
      <div className="profile_sign_in">
        <div className="sign_in_block">
          <div className="text_sign_in">ТЕКУЩИЙ ПАРОЛЬ</div>
          <input type="password" id="password1" className="password" autoFocus />
        </div>
        <div className="sign_in_block">
          <div className="text_sign_in">НОВЫЙ ПАРОЛЬ</div>
          <input type="password" id="password2" className="password" />
        </div>
        <div className="sign_in_block">
          <div className="text_sign_in">ПВТОРИТЕ НОВЫЙ ПАРОЛЬ</div>
          <input type="password" id="password3" className="password" />
        </div>
      </div>
      <button type="submit" id="button_sign_in" className="button">
        <h4>Отправить</h4>
      </button>
    </div>
  )
}


