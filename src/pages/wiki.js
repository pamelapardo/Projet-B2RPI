import React from 'react'
import NavbarWiki from '../components/componentWiki/navbarWiki'
import { Outlet } from "react-router-dom"


export default function Wiki() {
  return (
    <div className='wiki_page_container'>
      <NavbarWiki/>
      <div className='wiki_content_space'>
        <Outlet/>
      </div>
    </div>
  )
}
