/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import ActionButtons from '../../../components/buttons/actionbutton'
import InputTextarea from '../../../utils/controls/input-textarea'
import Buttons from '../../../components/buttons/buttons'
import InputText from '../../../utils/controls/input-text'
let popupTop: number
let xpositionvalue: any
let offsetLeftValue: number
let offsetTopValue: number
let elementHeightValue: number
let offsetWidthValue: number
export default function Reply () {
  /** *** Responsive Popup Code Start*****/
  const reply = useRef<any>(null)
  const popupbtnRef = useRef<any>(null)
  const [xpositionvalueupdate, setpopupwidthupdate] = useState<number>()
  const [popupheight, setpopupheight] = useState<number>()
  const [showActionPopups, setShowActionPopups] = useState({
    reply: false
  })
  const initialValues = ['reply']
  const [btnActionshowhide, setActionbtnshowhide] = useState({
    reply: false
  })
  useEffect(() => {
    setpopupheight(window.innerHeight - (offsetTopValue + 30))
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
  const showhide: any = { ...btnActionshowhide }
  function popupCloseOpenFunctionality (type: any, value: number, top: number, xposition: number, left: number, elementHeight: number, offsetWidth: number) {
    popupTop = top
    xpositionvalue = xposition
    offsetLeftValue = left
    offsetTopValue = top
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
            <ActionButtons
                label="Reply"
                name='Reply'
                className={btnActionshowhide?.reply ? 'btn btn-xs font-12 color-primary popup-arrow p-relative ms-auto' : 'btn btn-xs font-12 color-primary p-relative ms-auto'}
                isClick='reply'
                type="button"
                ref={reply}
                popupCloseOpenFunctionality={popupCloseOpenFunctionality}
                showhide={showActionPopups.reply}
            />
            {btnActionshowhide?.reply
              ? <div className='popup popup-sm' ref={popupbtnRef} style={{ top: popupTop + 8, position: 'absolute', overflow: 'auto', left: xpositionvalueupdate, maxHeight: popupheight }}>
                    <h3>Reply</h3>
                    <div className="pt-2">
                        <InputText
                            inputProps={{
                              id: 'input',
                              name: 'Input',
                              className: 'font-12',
                              placeholder: 'Input'
                            }}
                            label='Input'
                            className='form-sm'
                            isMandatory
                            formClassName="ms-auto form-vertical"
                        />
                    </div>
                    <div className="pt-2">
                        <InputTextarea
                            inputProps={{
                              id: 'message',
                              name: 'Message',
                              className: 'font-12',
                              placeholder: 'Message'

                            }}
                            label='Message'
                            isMandatory
                            formClassName="ms-auto form-vertical"
                        />
                    </div>

                    <div className='pt-2 d-flex gap-2'>
                        <Buttons
                            label="Ok"
                            aria-label="Ok"
                            icon="icon-checked font-12 me-1"
                            className='btn btn-sm btn-primary whitetext font-0 font-md-14 btn-border-radius3 ms-auto '
                        />
                        <ActionButtons
                            label="Cancel"
                            name="Cancel"
                            className='btn-bgcolor5 whitetext btn btn-sm font-0 font-md-14 btn-border-radius3'
                            icon="icon-close font-10 me-1"
                            type="button"
                            isClick='reply'
                            ref={reply}
                            popupCloseOpenFunctionality={popupCloseOpenFunctionality}
                            showhide={showActionPopups.reply} />
                    </div>
                </div>
              : ''}
        </>
  )
}
