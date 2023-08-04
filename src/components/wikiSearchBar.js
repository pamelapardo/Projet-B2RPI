import React from 'react'
import './wikiSearchBar.scss'
import SortArticles from './sortArticles'

export default function WikiSearchBar() {
  return (
    <div className='wikiSearchBar_container'>
      <div className='wikiSearchBar_writeArticle_container'>
        <div className='wikiSearchBar_items'>
          <input className='searchBar' type='text' placeholder='Recherche de mot clé'/>
          <button type='submit' className='wikiSearchBar_loupe_btn'><i className='loupe'/></button>
        </div>
    
        <div className='writeArticle_btn'><i className='edit_icon'/></div>
      </div>

      <div className='wikiSearchBar_sort_container'>
      <SortArticles/>
      </div>
    </div>
  )
}