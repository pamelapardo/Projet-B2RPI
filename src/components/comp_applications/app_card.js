import React from 'react'
import './app_card.scss'
import { useState } from 'react';
import AppModal from './app_modal';

export default function App_card(props) {
  const [show, setShow] = useState(false)

  return (
    <div>
      <div className='app_card_container' onClick={() => setShow(true)}>
        <div className='app_card_logo'>{props.logo}</div>
        <div className='app_card_txt_container'>
          <h3 className='card_app_title'>{props.title}</h3>
          <div>
            <p className='card_app_description'>{props.description}</p>
          </div>
        </div>
      </div>

      <AppModal
        title={props.title}
        description={props.description}
        onClose={() => setShow(false)}
        show={show}
      />
    </div>
  )
}
