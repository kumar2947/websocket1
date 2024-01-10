/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/aria-props */
import React, { useState, useRef, useEffect } from 'react'
import ActionButtons from '../buttons/actionbutton'
import './helpdesk.css'
import Buttons from '../buttons/buttons'
let popupTop : number
let xpositionvalue : number
let offsetLeftValue : number
let offsetTopValue : number
let elementHeightValue : number
let offsetWidthValue : number
export default function Helpdesk () {
  /** *** Responsive Popup Code Start*****/
  const helpdesk = useRef<any>(null)
  const popupbtnRef = useRef<any>(null)
  const [xpositionvalueupdate, setpopupwidthupdate] = useState<number>()
  const [popupheight, setpopupheight] = useState<number>()
  const [showActionPopups, setShowActionPopups] = useState({
    helpdesk: false
  })
  const initialValues = ['helpdesk']
  const [btnActionshowhide, setActionbtnshowhide] = useState({
    helpdesk: false
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
  const showhide:any = { ...btnActionshowhide }
  function popupCloseOpenFunctionality (type : any, value : number, top : number, xposition : number, left : number, elementHeight : number, offsetWidth : number) {
    popupTop = top
    xpositionvalue = xposition
    offsetLeftValue = left
    offsetTopValue = top
    elementHeightValue = elementHeight
    offsetWidthValue = offsetWidth
    initialValues.forEach(element => {
      showhide[element] = false
    })
    setActionbtnshowhide(showhide)
    if (type) {
      setActionbtnshowhide({ ...showhide, [type]: value })
      setShowActionPopups({ ...showhide, [type]: value })
    }
  }
  return (
        <>
            <div className="help-desk">
                <div className="mx-2">
                    <ActionButtons
                        label="Help Desk"
                        name='Help Desk'
                        className={btnActionshowhide?.helpdesk ? 'btn-border btn-sm font-0 font-md-14 btn-border-radius3 p-relative popup-arrow' : 'btn-border btn btn-sm font-0 font-md-14 btn-border-radius3 p-relative'}
                        icon="icon-helpdesk color-primary font-16 me-md-1 bold"
                        isClick='helpdesk'
                        type="button"
                        ref={helpdesk}
                        popupCloseOpenFunctionality={popupCloseOpenFunctionality}
                        showhide={showActionPopups.helpdesk}
                    />
                </div>
                {btnActionshowhide?.helpdesk
                  ? <div className='popup p-relative' ref={popupbtnRef} style={{ top: popupTop + 8, position: 'absolute', overflow: 'auto', left: xpositionvalueupdate, maxHeight: popupheight }}>
                        <div className="p-relative">
                            <h3 tabIndex={0} aria-lable="System Help Desk">System Help Desk</h3>
                            <div className="pt-2 d-flex align-items-center" id="helpdesk-timings" tabIndex={0} aria-aria-labelledby="helpdesk-timings">
                                <div className="icon-timing me-1"></div>
                                <div><p className="font-12 subtitle-color1">Hours of operation:</p>
                                    <p>8 AM - 6 PM  EST </p></div>
                            </div>
                            <p className="d-flex align-items-center pt-2">
                                <span className="icon-mail me-1"></span>
                                <a title="info@rhybus.com" href="mailto:info@rhybus.com" className="links">info@rhybus.com</a>
                            </p>
                            <p className="d-flex align-items-center pt-2">
                                <span className="icon-phone me-1"></span>
                                <a title="(123)555-6789" href="tel:(123)555-6789" >(123)555-6789</a>
                            </p>
                            <div className='close'>
                                <ActionButtons
                                    label="Cancel"
                                    name=""
                                    className='btn-bgcolor6 whitetext p-0 btn btn-sm font-0 btn-border-radius3'
                                    icon="icon-close font-8 p-1"
                                    type="button"
                                    isClick='helpdesk'
                                    ref={helpdesk}
                                    popupCloseOpenFunctionality={popupCloseOpenFunctionality}
                                    showhide={showActionPopups.helpdesk} />
                            </div>
                        </div>
                    </div>
                  : ''}
            </div>
        </>
  )
}
