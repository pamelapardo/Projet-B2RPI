import React, { Fragment } from 'react'
import './header.scss'
import Logo from '../images/Logo.png'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
  return (
    <Fragment>
      <div className='container_header'>
        <div>
          <img className='logo_header' src={Logo} alt="Arkhe_logo" />
        </div>

        <div className='tabs_container_header'>
          <NavLink to="/redirect/*/Application" className={({ isActive }) => isActive ? 'tab_header_active' : "tab_header"}>Apps</NavLink>
          <NavLink to="/redirect/*/wiki/*" className={({ isActive }) => isActive ? 'tab_header_active' : "tab_header"}>Wiki</NavLink>
        </div>

        <div>
          <NavLink to='/profile/'><div className='tiny_profile_pic' ></div></NavLink>
        </div>
      </div>
      <div>
        <Outlet/>
      </div>

    </Fragment>

  )
}
