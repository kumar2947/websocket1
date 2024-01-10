import React from 'react'
import InputLabel from './input-label'
import { ENTER_MSG } from '../constants/rhybusconfig'
const InputTextarea = (inputProps:any) => {
  return (
    <>
    <div className={inputProps?.formClassName}>
      {inputProps?.label && <InputLabel labelProps={{ htmlFor: inputProps?.inputProps?.id }} label={inputProps?.label} className={inputProps?.inputProps?.className} infoLabel={inputProps?.info} isinfoLabel={inputProps?.isInfo} isinfoIcon={inputProps?.infoIcon} isinfoClassName={inputProps?.infoClassName} mandatory={inputProps?.isMandatory}/>}
      <textarea
        name={inputProps?.inputProps?.name}
        id={inputProps?.inputProps?.id}
        value={inputProps?.inputProps?.value}
        maxLength={inputProps?.inputProps?.maxLength}
        onChange={inputProps?.onChange}
        disabled={inputProps?.disabled}
        readOnly={inputProps?.readonly}
        className={inputProps?.className}
        style={inputProps?.style}
        aria-label={inputProps['aria-label'] || inputProps?.label}
        aria-required={inputProps?.isMandatory}
        placeholder={inputProps?.inputProps?.placeholder}
        rows={inputProps?.rows}
        cols={inputProps?.cols}
        defaultValue={inputProps?.placeholder}
      />
      <p className='errormsg d-none'>{ENTER_MSG} {inputProps?.label || inputProps['aria-label']}</p>
      </div>
    </>
  )
}
export default InputTextarea
