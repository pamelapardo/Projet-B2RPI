import React from 'react'
import './header.scss'
import Logo from '../images/Arkhe_logo.png'

export default function Header() {
  return (
    <div className='background_header'>
      <div>
        <img src={Logo} alt="Arkhe_logo"/>
      </div>

      <div className='tab_container'>
        <div>Tab apps</div>
        <div>Tab Wiki</div>
      </div>

      <div>
        <div>User</div>
      </div>
    </div>
  )
}
