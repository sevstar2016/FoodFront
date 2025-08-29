import { Link } from 'react-router-dom'

export default function InterestingPage() {
  return (
    <div className="interesting_block">
      <div className="interesting_info">
        <svg className="rectangle3" width="136" height="131" viewBox="0 0 136 131" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.2264 85.8216C-9.20164 64.9799 82.1132 35.7073 82.1132 35.7073L95.3039 40.0915C95.3039 40.0915 118.733 107.501 64.2797 93.816C54.5862 91.3799 49.0253 89.5317 40.2264 85.8216Z" fill="#F0B526" fillOpacity="0.32"/>
        </svg>
        <svg className="rectangle4" width="149" height="132" viewBox="0 0 149 132" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M61.0778 100.652C-5.82258 99.0782 61.2629 32.2064 61.2629 32.2064L78.1344 31.4137C78.1344 31.4137 157.811 91.3897 91.8431 99.2061C80.0998 100.598 72.9871 100.932 61.0778 100.652Z" fill="#FF6C4A" fillOpacity="0.33"/>
        </svg>
        <div className="interesting_img" id="profile_photo"></div>
        <div className="interesting_name_box">
          <div className="profile_name interesting_name">
            <h4 id="nameP" name="nameP">Что такое жирные кислоты Омега-3?</h4>
            <h5 id="className" name="className"></h5>
          </div>
          <Link to="/interesting/1" className="button button_interesting">
            <h4>Читать</h4>
          </Link>
        </div>
      </div>
    </div>
  )
}


