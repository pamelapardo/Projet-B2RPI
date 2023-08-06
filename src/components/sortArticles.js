import React from 'react'

export default function SortArticles() {
  return (
    <div className='sort_container'>
      <p className='trier_text'>Trier par:</p>
      <button className='sort_btn_tout'>Tout</button>
      <button className='sort_btn_solution'>Solution</button>
      <button className='sort_btn_proc'>Procèdure</button>
      <button className='sort_btn_docu'>Documentation</button>
    </div>
  )
}
