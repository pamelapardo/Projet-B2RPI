import React from 'react'
import './appModal.scss'
import './appCard.scss'
import { Link, NavLink } from 'react-router-dom'

export default function AppModal(props) {

  return (
    <div className={`app_modal_container ${props.show ? 'show' : ' '}`} onClick={props.onClose}>

      <div className='modal_items_container' onClick={e => e.stopPropagation()}>
        <div className='app_card_logo modal_logo_position'></div>
        <div className='modal_content'>
          <h3 className='card_app_title'>{props.title}</h3>
          <p className='card_app_description'>{props.description}</p>
          <div className='modal_btn_container'>
            <Link to="appLaunch" className='common_btn'>Ouvrir</Link>
            <NavLink to='/wiki/*' className='common_btn'>Wiki</NavLink>
            {/* Mettre le bon lien. Ce lien doit redirect vers le wiki demandé */}
          </div>
        </div>
      </div>

    </div>
  )
}
