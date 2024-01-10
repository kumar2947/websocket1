/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import React, { useState, useRef, useEffect } from 'react'
import ActionButtons from '../buttons/actionbutton'
import InputSelect from '../../utils/controls/input-select'
import Notificationtabcontent from './notification-items'
import './notifications.css'
import Tabs from '../tabs/tabs'
let popupTop : number
let xpositionvalue : any
let offsetLeftValue : number
let offsetTopValue : number
let elementHeightValue : number
let offsetWidthValue : number
export default function Notifications () {
  const notification_items = [
    {
      tabtitle: 'All (08)',
      is_active: 'true',
      content: (<><Notificationtabcontent tabId={'all'} /></>)
    },
    {
      tabtitle: 'Actions (02)',
      is_active: 'false',
      content: (<><Notificationtabcontent tabId={'actions'} /></>)
    },
    {
      tabtitle: 'Notifications (06)',
      is_active: 'false',
      content: (<><Notificationtabcontent tabId={'notifications'} /></>)
    }
  ]
  /** *** Responsive Popup Code Start*****/
  const notification = useRef<any>(null)
  const popupbtnRef = useRef<any>(null)
  const [xpositionvalueupdate, setpopupwidthupdate] = useState('')
  const [popupheight, setpopupheight] = useState<number>()
  const [showActionPopups, setShowActionPopups] = useState({
    notification: false
  })
  const [btnActionshowhide, setActionbtnshowhide] = useState({
    notification: false
  })
  useEffect(() => {
    setpopupheight(window.innerHeight - (offsetTopValue + 58))
    const popupwidthdata = popupbtnRef.current ? popupbtnRef.current.offsetWidth : 0
    // setpopupwidth(popupwidthdata)
    if (popupwidthdata < xpositionvalue) {
      xpositionvalue = xpositionvalue - popupwidthdata
      setpopupwidthupdate(xpositionvalue)
    } else if (popupwidthdata > offsetLeftValue && popupwidthdata < (window.innerWidth - (offsetLeftValue + offsetWidthValue))) {
      xpositionvalue = offsetLeftValue
      setpopupwidthupdate(xpositionvalue)
    } else if (popupwidthdata > offsetLeftValue && popupwidthdata > (window.innerWidth - (offsetLeftValue + offsetWidthValue))) {
      xpositionvalue = 0
      setpopupwidthupdate(xpositionvalue)
    }
  }, [showActionPopups])
  const showhide = { ...btnActionshowhide }
  function popupCloseOpenFunctionality (type:any, value:number, top:number, xposition:number, left:number, elementHeight:number, offsetWidth:number) {
    popupTop = top
    xpositionvalue = xposition
    offsetLeftValue = left
    offsetTopValue = top
    elementHeightValue = elementHeight
    offsetWidthValue = offsetWidth
    showhide.notification = false
    setActionbtnshowhide(showhide)
    if (type) {
      setActionbtnshowhide({ ...showhide, [type]: value })
      setShowActionPopups({ ...showhide, [type]: value })
    }
  }
  return (
        <>
            <div className="notification">
                <ActionButtons
                    label="Notifications"
                    name=''
                    className={btnActionshowhide?.notification ? 'btn btn-sm p-0 p-relative popup-arrow' : 'btn btn-sm p-0 p-relative'}
                    icon="icon-bell font-16 darktext bold"
                    isClick='notification'
                    type="button"
                    badgeinfo="22"
                    badge="badge bgcolor-primary border-radius3 px-1 font-10 whitetext"
                    ref={notification}
                    popupCloseOpenFunctionality={popupCloseOpenFunctionality}
                    showhide={showActionPopups.notification}
                />
                {btnActionshowhide?.notification
                  ? <div className='popup' ref={popupbtnRef} style={{ top: popupTop + 8, position: 'absolute', overflow: 'auto', left: xpositionvalueupdate, maxHeight: popupheight }}>
                        <div className="d-flex w-100 p-relative align-items-center border-bottom1 pb-1">
                            <h2 tabIndex={0} aria-label="Alerts" className="d-flex align-items-center font-16">
                                <span className="icon-bell font-16 pe-1"></span> Alerts
                            </h2>
                            <div className="d-flex align-items-center ms-auto">
                                <div className="d-flex align-items-center ms-1">
                                    <InputSelect
                                        inputProps={{
                                          id: 'FilterBy',
                                          name: 'Filter By',
                                          placeholder: 'Select',
                                          className: 'font-11'
                                        }}
                                        label='Filter By'
                                        type='select'
                                        className='font-11  form-xs'
                                        formClassName="ms-auto form-horizontal"
                                    />

                                </div>
                                <div className="d-flex align-items-center ms-1 mb-1">
                                    <InputSelect
                                        inputProps={{
                                          id: 'Date',
                                          name: 'Date',
                                          placeholder: 'Select',
                                          className: 'font-11'
                                        }}
                                        label='Date'
                                        type='select'
                                        className='font-11 form-xs'
                                        formClassName="form-horizontal"
                                    />
                                </div>
                                <div className="font-11 links ms-1" >days</div>
                            </div>
                            <div className='close'>
                                <ActionButtons
                                    label="Cancel"
                                    name=""
                                    className='btn-bgcolor6 whitetext p-0 btn btn-sm font-0 btn-border-radius3'
                                    icon="icon-close font-8 p-1"
                                    type="button"
                                    isClick='notification'
                                    ref={notification}
                                    popupCloseOpenFunctionality={popupCloseOpenFunctionality}
                                    showhide={showActionPopups.notification} />
                            </div>
                        </div>
                        <div>
                            <Tabs items={notification_items} contentstyles="pe-1" anchorclass="darktext" className="latobold darktext" tablistclassName="font-13" />
                        </div>

                    </div>
                  : ''}
            </div>
        </>
  )
}
