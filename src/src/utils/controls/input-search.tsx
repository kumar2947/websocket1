/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import InputLabel from './input-label'
const InputSearch = (inputProps:any) => {
  return (
    <div className={inputProps?.formClassName}>
      {inputProps?.label && <InputLabel labelProps={{ htmlFor: inputProps?.inputProps?.id }} label={inputProps?.label} className={inputProps?.inputProps?.className} infoLabel={inputProps?.info} isinfoLabel={inputProps?.isInfo} isinfoIcon={inputProps?.infoIcon} mandatory={inputProps?.isMandatory}/>}
      <div className={inputProps?.searchgroup}>
      {inputProps?.licon && <a onChange={inputProps?.onChange}><span className={inputProps?.licon}></span></a>}
      <input
        name={inputProps?.inputProps?.name}
        id={inputProps?.inputProps?.id}
        value={inputProps?.inputProps?.value}
        maxLength={inputProps?.inputProps?.maxLength}
        onChange={inputProps?.onChange}
        disabled={inputProps?.disabled}
        readOnly={inputProps?.readonly}
        className={inputProps?.className}
        style={inputProps?.style}
        aria-label={inputProps['aria-label'] || inputProps?.inputProps?.arialabel || inputProps?.label}
        aria-required={inputProps?.isMandatory}
        size={inputProps?.inputProps?.size || 'sm'}
        type={inputProps?.type || 'search'}
        placeholder={inputProps?.inputProps?.placeholder}
      />
      {inputProps?.icon && <a onChange={inputProps?.onChange}><span className={inputProps?.icon}></span></a>}
      </div>
      </div>
  )
}
export default InputSearch
