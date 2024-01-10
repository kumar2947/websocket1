/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import InputSelect from '../../utils/controls/input-select'
import ActionButtons from '../buttons/actionbutton'
import InputText from '../../utils/controls/input-text'
import FileUpload from '../upload/upload-file'
import InputTextarea from '../../utils/controls/input-textarea'
import './feedback.css'
import Buttons from '../buttons/buttons'
let popupTop : number
let xpositionvalue : number
let offsetLeftValue : number
let offsetTopValue : number
let elementHeightValue : number
let offsetWidthValue : number

export default function Feedback () {
  /** *** Responsive Popup Code Start*****/
  const sitefeedback = useRef(null)
  const popupbtnRef = useRef<any>(null)
  const [xpositionvalueupdate, setpopupwidthupdate] = useState<number>()
  const [popupheight, setpopupheight] = useState <number>()
  const [showActionPopups, setShowActionPopups] = useState({
    sitefeedback: false
  })
  const [btnActionshowhide, setActionbtnshowhide] = useState({
    sitefeedback: false
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
  function popupCloseOpenFunctionality (type : any, value : number, top : number, xposition : number, left : number, elementHeight : number, offsetWidth : number) {
    popupTop = top
    xpositionvalue = xposition
    offsetLeftValue = left
    offsetTopValue = top
    elementHeightValue = elementHeight
    offsetWidthValue = offsetWidth
    showhide.sitefeedback = false
    setActionbtnshowhide(showhide)
    if (type) {
      setActionbtnshowhide({ ...showhide, [type]: value })
      setShowActionPopups({ ...showhide, [type]: value })
    }
  }
  return (
        <>
            <div className="mx-2">
                <ActionButtons
                    label ="Site Feedback"
                    name='Site Feedback'
                    className={btnActionshowhide?.sitefeedback ? 'btn-border btn btn-sm font-0 font-md-14 btn-border-radius3 p-relative popup-arrow' : 'btn-border btn btn-sm font-0 font-md-14 btn-border-radius3 p-relative'}
                    icon="icon-feedback color-primary font-16 me-md-1 bold"
                    isClick='sitefeedback'
                    type="button"
                    ref={sitefeedback}
                    popupCloseOpenFunctionality={popupCloseOpenFunctionality}
                    showhide={showActionPopups.sitefeedback}
                />
            </div>
            {btnActionshowhide?.sitefeedback
              ? <div className='popup' ref={popupbtnRef} style={{ top: popupTop + 8, position: 'absolute', overflow: 'auto', left: xpositionvalueupdate, maxHeight: popupheight }}>
                    <h3>Site Feedback</h3>
                    <div className="subtitle-color font-9 montserratregular">Please let us know how we can make this site more usefull to you</div>
                    <div className="pt-2">
                        <InputText
                            inputProps={{
                              id: 'subject',
                              name: 'Subject',
                              className: 'font-12',
                              placeholder: 'Subject'
                            }}
                            label='Subject'
                            className='form-sm'
                            isMandatory
                            formClassName="ms-auto form-vertical"
                        />
                    </div>
                    <div className="pt-2">
                        <InputSelect
                            inputProps={{
                              id: 'feedbackabout',
                              name: 'Feedback About',
                              placeholder: 'Select',
                              className: 'font-12'
                            }}
                            label='Feedback About'
                            formClassName="form-vertical"
                            className='form-sm'
                        />
                    </div>
                    <div className="pt-2">
                        <FileUpload
                            label="Attach file (s)"
                            hint="Hint: Only Files with the following extensions are allowed: .png, .gif, .jpeg, .xlsx, .doc, .pdf, .ppt, .txt, .msg"
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
                            icon="icon-checked font-12 me1"
                            className='btn btn-sm btn-primary whitetext font-14 btn-border-radius3 ms-auto '
                        />
                        <ActionButtons
                            label="Cancel"
                            name="Cancel"
                            className='btn-bgcolor5 whitetext btn btn-sm font-14 btn-border-radius3'
                            icon="icon-close font-10 me-1"
                            type="button"
                            isClick='sitefeedback'
                            ref={sitefeedback}
                            popupCloseOpenFunctionality={popupCloseOpenFunctionality}
                            showhide={showActionPopups.sitefeedback} />
                    </div>
                </div>
              : ''}
        </>
  )
}
