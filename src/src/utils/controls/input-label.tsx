/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
const InputLabel = (inputProps:any) => {
  interface Props {
    props?:any,
    changeRadio?:any,
    formClassName?:any,
    inputProps?:any,
     label?: any,
     className?: any,
     type? : any,
     id?: any,
     badge? : any,
     icon?: any,
     name? : any,
     badgecount?: any,
     inline?:any,
     style?:any,
     'aria-label'?: any,
     info?:any,
  }
  return (
    <label htmlFor={inputProps?.labelProps?.htmlFor} className={inputProps?.className}>{inputProps?.label} {inputProps?.currency && <span className="currency">$</span>} {inputProps?.isbadge && <span className={inputProps?.badge}>{inputProps?.isbadge}</span>} {inputProps?.mandatory && <span className="mandatory">*</span>}  {inputProps?.isinfoLabel && <span className={inputProps?.isinfoClassName} data-tip={inputProps?.infoLabel} >
      <span className={inputProps?.isinfoIcon}></span>
    </span>}</label>
  )
}

export default InputLabel
