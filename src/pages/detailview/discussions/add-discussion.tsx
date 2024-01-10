import React, { useState, useRef, useEffect } from 'react'
import ActionButtons from '../../../components/buttons/actionbutton'
import FileUpload from '../../../components/upload/upload-file'
import InputTextarea from '../../../utils/controls/input-textarea'
import Buttons from '../../../components/buttons/buttons'
let popupTop: number
let xpositionvalue: any
let offsetLeftValue: number
let offsetTopValue: number
let elementHeightValue: number
let offsetWidthValue: number
export default function Adddiscussion () {
  /** *** Responsive Popup Code Start*****/
  const adddiscussion = useRef<any>(null)
  const popupbtnRef = useRef<any>(null)
  const [xpositionvalueupdate, setpopupwidthupdate] = useState<number>()
  const [popupheight, setpopupheight] = useState<number>()
  const [showActionPopups, setShowActionPopups] = useState({
    adddiscussion: false
  })
  const initialValues = ['adddiscussion']
  const [btnActionshowhide, setActionbtnshowhide] = useState({
    adddiscussion: false
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
    initialValues.forEach((element: any) => {
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
                label="Add Discussion"
                name='Add Discussion'
                className={btnActionshowhide?.adddiscussion ? 'btn-border btn btn-xs font-0 font-lg-14 color-primary btn-border-radius3 p-relative popup-arrow  ms-auto' : 'btn-border btn btn-xs font-0 font-xl-14 color-primary btn-border-radius3 p-relative  ms-auto'}
                icon="icon-add color-primary font-12 me-xl-1 bold"
                isClick='adddiscussion'
                type="button"
                btnclassName="ms-auto"
                ref={adddiscussion}
                popupCloseOpenFunctionality={popupCloseOpenFunctionality}
                showhide={showActionPopups.adddiscussion}
            />
            {btnActionshowhide?.adddiscussion
              ? <div className='popup popup-sm' ref={popupbtnRef} style={{ top: popupTop + 8, position: 'absolute', overflow: 'auto', left: xpositionvalueupdate, maxHeight: popupheight }}>
                    <h3>Add Files</h3>
                    <div className="pt-2 text-wrap">
                        <FileUpload
                            label="Add file (s)"
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
                            icon="icon-checked font-12 me-1"
                            className='btn btn-sm btn-primary whitetext font-0 font-md-14 btn-border-radius3 ms-auto '
                        />
                        <ActionButtons
                            label="Cancel"
                            name="Cancel"
                            className='btn-bgcolor5 whitetext btn btn-sm font-0 font-md-14 btn-border-radius3'
                            icon="icon-close font-10 me-1"
                            type="button"
                            isClick='adddiscussion'
                            ref={adddiscussion}
                            popupCloseOpenFunctionality={popupCloseOpenFunctionality}
                            showhide={showActionPopups.adddiscussion} />
                    </div>
                </div>
              : ''}
        </>
  )
}
