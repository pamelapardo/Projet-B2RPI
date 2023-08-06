import React from 'react'
import { Link } from 'react-router-dom'
import './appLaunch.scss';

export default function AppLaunch() {
  return (
    <div className='appLaunch_page_container'>
      <p className='appLaunch_title'>Lancement de l'application...</p>
      <Link to="/" className='appLaunch_btn'>Revenir au bureau d'applications</Link>
    </div>
  )
}
