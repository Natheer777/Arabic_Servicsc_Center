import './Vision.css'
import { useTranslation } from 'react-i18next'

export default function Vision() {
    const [t] = useTranslation() 

  return (
    <>
     <div className="container same">
      <div className="row">
        <div className='text-container'>
          <p className="vision-details right">{t("Vision-p")}</p>
        </div>
      
      </div>
    </div>
    </>
  )
}
