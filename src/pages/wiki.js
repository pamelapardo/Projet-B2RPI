import React from 'react'
import NavbarWiki from '../components/componentWiki/navbarWiki'

export default function Wiki() {
  return (
    <div className='wiki_page_container'>
      <NavbarWiki/>
      <div>
        this is my content
      </div>
    </div>
  )
}
