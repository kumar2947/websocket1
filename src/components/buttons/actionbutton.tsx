/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */
import React, { useImperativeHandle, forwardRef } from 'react'

interface Props {
    props?:any,
    ref:any,
    inputProps?:any,
    onClick?:any,
     reference?:any,
     label: any,
     className: any,
     type : any,
     btnclassName? : any,
     id?: any,
     isClick: any,
     badgeinfo?: any,
     badge? : any,
     ricon? : any,
     icon?: any,
     name : any,
     showhide: any,
     displayname?: any,
     'aria-label'?: any,
     popupCloseOpenFunctionality: (params: any, a : any, b: any, c: any, d: any, f: any, g: any) => any;
  }
const ActionButtons = React.forwardRef((props: Props, ref: any) => {
// const ActionButtons = (props : Props, ref : any, inputProps : any, onClick : any, reference : any) => {
  let showhide = false
  useImperativeHandle(ref, () => ({
    buttonRefs: () => {
      showhide = false
    }
  }))
  const popupopenclose = (ele:any) => {
    const elementHeight = ele.currentTarget.offsetHeight
    const offsettopValue = ele.currentTarget.offsetTop
    const offsetWidthValue = ele.currentTarget.offsetWidth
    const offsetLeftValue = ele.currentTarget.offsetLeft
    const popupTop = ((elementHeight + offsettopValue))
    const popupLeft = ((offsetWidthValue + offsetLeftValue))
    const data = ele.currentTarget.attributes
    let displayName = ''
    for (let i = 0; i < data.length; i++) {
      if (data[i].nodeName === 'value' && data[i].nodeValue === 'false') {
        showhide = true
      }
      if (data[i].nodeName === 'data-displayname') {
        displayName = data[i].nodeValue
      }
    }
    props?.props?.popupCloseOpenFunctionalityWork(displayName)
    props.popupCloseOpenFunctionality(displayName, showhide, popupTop, popupLeft, offsetLeftValue, elementHeight, offsetWidthValue)
  }
  return (
        <div className={props?.className ? `button-container ${props?.btnclassName}` : 'button-container'}>
            <button type={props?.type || 'button'} id={props?.id} aria-label={props['aria-label'] || props?.label} className={`btn ${props?.className}`} onClick={popupopenclose} data-displayname={props?.isClick} value={props?.showhide} title={props['aria-label'] || props?.label}>{props?.icon && <span className={props?.icon}></span>} {props?.name} {props?.ricon && <span className={props?.ricon}></span>} {props?.badgeinfo && <sup className={props?.badge}>{props?.badgeinfo}</sup>}</button>
        </div>
  )
}
)
export default ActionButtons
