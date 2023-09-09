import React, { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'

export default function MDEditorArticle(props) {
  const [value, setValue] = useState("Ceci est un article...")
  return (
    <div className={`mdeditor_page_container ${props.show ? 'show' : ' '}`}>
      <div className='mdeditor_header'>
        <button className='md_editor_btn'>Enregistrer</button>
        <button className='md_editor_btn'>Détails</button>
        <button onClick={props.onClose} className='md_editor_btn quitter'>Quitter</button>
      </div>
      <MDEditor value={value} onChange={setValue} />
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  )
}