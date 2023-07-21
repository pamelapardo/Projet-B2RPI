import React from 'react'
import './app_modal.scss'
import './app_card.scss'

export default function App_modal(props) {

  return (
    <div className={`app_modal_container ${props.show ? 'show' : ' '}`} onClick={props.onClose}>

      <div className='modal_items_container' onClick={e => e.stopPropagation()}>
        <div className='app_card_logo modal_logo_position'></div>
        <div className='modal_content'>
          <h3 className='card_app_title'>{props.title}</h3>
          <p className='card_app_description'>{props.description}</p>
          <div className='modal_btn_container'>
            <button onClick={ props.onClose} className='common_btn'>Annuler</button>
            <button className='common_btn'>Ouvrir</button>
          </div>
        </div>
      </div>

    </div>
  )
}
