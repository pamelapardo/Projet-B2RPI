import React, { useState } from 'react'
import './appModal.scss'
import './appCard.scss'
import { NavLink } from 'react-router-dom'
import './appLaunch.scss';

export default function AppModal(props) {
  const [style, setStyle] = useState("appLaunch_page_container")
  const handleClick = () => {
    setStyle("appLaunch_page_container_active")
  }

  return (
    <div className={`app_modal_container ${props.show ? 'show' : ' '}`} onClick={props.onClose}>
    
    {/* The code under displays the launch page **************** */}
      <div className={style}>
        <p className='appLaunch_title'>Lancement de l'application...</p>
        <div className='appLaunch_btn'>Appuyez n'importe ou pour revenir...</div>
      </div>
    {/* The code up displays the launch page ***************** */}

      <div className='modal_items_container' onClick={e => e.stopPropagation()}>
        <div className='app_card_logo modal_logo_position'></div>
        <div className='modal_content'>
          <h3 className='card_app_title'>{props.title}</h3>
          <p className='card_app_description'>{props.description}</p>
          <div className='modal_btn_container'>
            <div onClick={handleClick} className='common_btn'>Ouvrir</div>



            <NavLink to='/wiki/*' className='common_btn'>Wiki</NavLink>
            {/* Mettre le bon lien. Ce lien doit redirect vers le wiki demandé */}
          </div>
        </div>
      </div>

    </div>
  )
}
