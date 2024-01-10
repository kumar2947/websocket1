import React from 'react'
import InputLabel from '../input-label'
import Select from './select'
import Option from './option'
import './selectstyles.css'
import { SELECT_MESSAGE } from '../../constants/rhybusconfig'
interface Props {
  props?:any,
  readonly?:any,
  formClassName?:any,
  inputProps?:any,
   label: any,
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
   onChange?:any,
   disabled?:any,
   isMandatory?:any,
   infoClassName?:any,
   info?:any,
   infoIcon?:any,
   isInfo?:any,
   placeholder?:any,
}
const InputSelect1 = (inputProps:Props) => {
  return (
    <div className={inputProps?.formClassName}>
      {inputProps?.label && <InputLabel labelProps={{ htmlFor: inputProps?.inputProps?.id }} label={inputProps?.label} className={inputProps?.inputProps?.className} infoLabel={inputProps?.info} isinfoLabel={inputProps?.isInfo} isinfoIcon={inputProps?.infoIcon} isinfoClassName={inputProps?.infoClassName} mandatory={inputProps?.isMandatory}/>}
      <Select
        placeholder={inputProps?.inputProps?.placeholder}
        aria-readonly={inputProps?.readonly}
        aria-label={inputProps['aria-label'] || inputProps?.label}
        aria-required={inputProps?.isMandatory}
      >
        <Option value='select'>Select</Option>
        <Option value='select'>Select1</Option>
        <Option value='select'>Select2</Option>
        <Option value='select'>Select3</Option>
        </Select>
        <p className='errormsg d-none'>{SELECT_MESSAGE} {inputProps?.label || inputProps['aria-label']}</p>
      </div>
  )
}
export default InputSelect1
