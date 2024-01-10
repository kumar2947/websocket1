/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable camelcase */
import React, { useState } from 'react'
import './tabs.css'
export default function Vtabs (props : any) {
  const [items, setItems] = useState(props.items)
  function show (event : any, index: number) {
    const tabs = items
    tabs.map((item : any, index_item : any) => {
      item.is_active = 'false'
      if (index === index_item) {
        item.is_active = 'true'
      }
      return item
    })
    setItems([...tabs])
  }
  return (
        <div className={props?.mainTabsclass ? `tabs ${props?.mainTabsclass}` : 'tabs'}>
            <div className={props?.className ? `customTabs ${props?.className}` : 'customTabs'} >
                <ul className={props?.tabsul}>
                    <div className={props?.tablistclassName ? `customtabs-list ${props?.tablistclassName}` : 'customtabs-list'}>
                        {
                            items.map((item : any, index : number) => {
                              return (
                                    <>
                                    <li>
                                        <a tabIndex={0} href="javascript:void(0)" title={item?.title || item?.tabtitle} key={index} onClick={(event) => show(event, index)} className={item.is_active === 'true' ? props?.anchorclass ? `active ${props?.anchorclass}` : 'active' : props?.anchorclass ? `${props?.anchorclass}` : ''}>
                                            {item?.icon && <span className={item?.icon}></span>} {item?.tabtitle} {props?.badge && <span className={props?.badge}>{item?.count}</span>}
                                        </a>

                                    </li>
                                                      { item.is_active === 'true' && <div key={index} className={`customTabs-content ${item.is_active === 'true' ? 'active' : ''}`}>

                                                                <div className={props?.contentstyles}>{item?.content}</div>
                                                        </div>}

                                        </>
                              )
                            })
                        }
                    </div>
                    {props?.isButtons}
                </ul>
            </div>

        </div>
  )
}
