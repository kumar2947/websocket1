import React from 'react'
import './buttons.css'
const Buttons = (props: any) => {
  return (
        <button type={props?.type || 'button'} aria-label={props['aria-label'] || props?.label} className={`btn ${props?.className}`} value={props?.showhide} onClick={props?.onClick} title={props['aria-label'] || props?.label}>{props?.icon && <span className={`${props?.icon}`}></span>} {props?.label} {props?.ricon && <span className={`${props?.ricon}`}></span>}
            {props?.isInfo && <span className={props?.infoClassName} data-tip={props?.info} >
                <span className={props?.infoIcon}></span>
            </span>}
        </button>
  )
}
export default (Buttons)
