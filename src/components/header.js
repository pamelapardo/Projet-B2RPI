import React from 'react'
import './header.scss'
import Logo from '../images/Logo.png'
import { Link, Nav, NavLink, useMatch, useResolvedPath } from 'react-router-dom'

export default function Header() {
  return (
    <div className='container_header'>
      <div>
        <img className='logo_header' src={Logo} alt="Arkhe_logo"/>
      </div>

      <div className='tabs_container_header'>
        <NavLink to="/" className={({ isActive}) => isActive ? 'tab_header_active' : "tab_header" }>App</NavLink>
        <NavLink to="wiki" className={({ isActive}) => isActive ? 'tab_header_active' : "tab_header" }>Wiki</NavLink>
      </div>

      <div>
        <div>User</div>
      </div>
    </div>
  )
}

// function CustonLink({to, children, ...props}){
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({path: resolvedPath.pathname})
//   return(
//     <Link className={isActive ? "active" : " "} to={to} {...props}>
//       {children}
//     </Link>
//   )
// }
