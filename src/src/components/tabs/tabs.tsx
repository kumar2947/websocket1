/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable camelcase */
import React, { useState } from 'react'
import './tabs.css'
interface Props {
    items:any,
    mainTabsclass?:any,
    tabsul?:any,
    tablistclassName?:any,
     className: any,
     type? : any,
     anchorclass?: any,
     id?: any,
     isButtons?: any,
     tabscontentarea?: any,
     badge? : any,
     contentstyles? : any,
     isInfo?:any,
     infoClassName?:any,
     info?:any,
     infoIcon?:any,
  }
export default function Tabs (props : Props) {
  const [items, setItems] = useState(props.items)
  function show (event : any, index:number) {
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
                                    <li key={item?.tabtitle}>
                                        <a tabIndex={0} href="javascript:void(0)" title={item?.title || item?.tabtitle} key={index} onClick={(event) => show(event, index)} className={item.is_active === 'true' ? props?.anchorclass ? `active ${props?.anchorclass}` : 'active' : props?.anchorclass ? `${props?.anchorclass}` : ''}>
                                            {item?.icon && <span className={item?.icon}></span>} {item?.tabtitle} {props?.badge && <span className={props?.badge}>{item?.count}</span>}
                                            {props?.isInfo && <span className={props?.infoClassName} data-tip={props?.info || item?.tabtitle} >
                                                <span className={props?.infoIcon}></span>
                                            </span>}
                                        </a>
                                    </li>
                              )
                            })
                        }
                    </div>
                    {props?.isButtons}
                </ul>
            </div>
            <div className={props?.tabscontentarea}>
                {
                    items.map((item : any, index : number) => {
                      return (
                            <>
                            {item.is_active === 'true' && <div key={index} className={`customTabs-content ${item.is_active === 'true' ? 'active' : ''}`}>
                                <div className={props?.contentstyles}>{item?.content}</div>
                            </div> }</>
                      )
                    })
                }
            </div>
        </div>
  )
}
