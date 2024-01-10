/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './accordions.css'
interface Props {
    setheight?:any,
    items:any,
    inputProps:any,
     titleIcon?:any,
     label?: any,
     className: any,
     isClick?: any,
     icon?: any,
     titlecollapsedIcon: any;
     headerextras?: any;
     extrasClass?: any;
     titleclassName?: any;
     titlecontentclassName?: any;
     actions?: any;
     count?: any;
     defaultActivekey?:any
     'aria-label'?: any,
     accordionitemclass?:any,
     dividerClass?:any,
     content?: any;
  }
export default function Accordions (props : Props) {
  const [clicked, setClicked] = useState<any>(0)
  const toggle = (index : number, value : any) => {
    if (props?.setheight) { props?.setheight(true) }
    if (clicked === index && value === 'expanded') {
      return setClicked(null)
    } else if (value !== 'expanded') {
      return setClicked(index)
    }
    return setClicked(index)
  }
  return (
        <div>
            <div className={props?.className}>
                {props?.items.map((item : any, index : number) => {
                  return (
                            <div className={clicked === index ? `accordion-item active ${props?.accordionitemclass}` : `accordion-item ${props?.accordionitemclass}`} key={item?.title}>
                                <div className={props?.inputProps?.accordionheadClass}>
                                    <a className={props?.inputProps?.className ? `accordion-head ${props?.inputProps?.className}` : 'accordion-head'} href='javascript:void(0)' title={item?.titlename || item?.title} key={index} onClick={() => toggle(index, clicked === index ? 'expanded' : 'collapsed')}>
                                        {item?.extras && <span>{item?.extras}</span>} {props?.titleIcon && <span className={clicked === index ? props?.titleIcon : props?.titlecollapsedIcon}></span>} {item?.title} {item?.count && <span className={props?.count}>{item?.count}</span>}
                                        {props?.icon && <span className={props?.icon}></span>} {item?.extras1 && <span>{item?.extras1}</span>}
                                        {props?.headerextras &&
                                            <div className={props?.extrasClass}>
                                                {props?.headerextras.map((i : any, index : number) =>
                                                <>
                                                    <div className={i?.classq}>
                                                        <div className={props?.titleclassName}> {i.name}</div>
                                                        <div className={props?.titlecontentclassName}>{item?.[i.name]}</div>
                                                    </div>
                                                    <div className={props?.dividerClass}>
                                                    </div>
                                                </>
                                                )
                                                }
                                            </div>
                                        }
                                         {props?.actions && <span>{props?.actions}</span>}
                                    </a>
                                    {item?.actions && <span>{item?.actions}</span>}
                                </div>
                                {item?.content && <div className={props?.inputProps?.contentclassName ? `accordion-content ${props?.inputProps?.contentclassName}` : 'accordion-content'}>{item?.content}</div>}
                                {props?.content && <div className={props?.inputProps?.contentclassName ? `accordion-content ${props?.inputProps?.contentclassName}` : 'accordion-content'}>{props?.content}</div>}
                            </div>
                  )
                })
                }
            </div>
        </div>
  )
}
