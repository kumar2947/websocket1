import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import './richtext.css'
import InputLabel from './input-label'

// import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js'
const RichTextEditor = (inputProps:any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const onSetEditorState = (newState:any) => {
    setEditorState(newState)
  }
  return (
    <>
      <div className={inputProps?.formClassName}>

        {inputProps?.label && <InputLabel labelProps={{ htmlFor: inputProps?.inputProps?.id }} className={inputProps?.inputProps?.className} label={inputProps?.label} infoLabel={inputProps?.info} isinfoLabel={inputProps?.isInfo} isinfoIcon={inputProps?.infoIcon} isinfoClassName={inputProps?.infoClassName} mandatory={inputProps?.isMandatory} />}

        <Editor
          editorState={editorState}
          onEditorStateChange={onSetEditorState}
          toolbar={{
            options: ['blockType', 'inline', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'image', 'remove'],
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true }

          }}
          placeholder={inputProps?.placeholder || `Enter ${inputProps?.label}`}
          aria-label={inputProps?.label}
        />

      </div>
      {inputProps?.hint && <div>{inputProps?.hint}</div>}
    </>
  )
}
export default RichTextEditor
