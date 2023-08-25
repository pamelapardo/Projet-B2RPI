import React, { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'

export default function WikiBrouillons() {
  const [value, setValue] = useState("**Hello World!**")
  return (
    <>
      <div> 
        <MDEditor value={value} onChange={setValue} boolean={true} />
        <MDEditor.Markdown source={value} style={{whiteSpace: 'pre-wrap'}} />
      </div>
    </>
  )
}
