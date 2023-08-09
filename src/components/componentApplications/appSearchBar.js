import React from 'react'

export default function AppSearchBar() {
  return (
    <div className='wikiSearchBar_items'>
      <input className='searchBar' type='text' placeholder='Recherche de mot clé'/>
      <button type='submit' className='wikiSearchBar_loupe_btn'><i className='loupe'/></button>
    </div>
  )
}
