/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import ActionButtons from '../../../components/buttons/actionbutton'
import FileUpload from '../../../components/upload/upload-file'
import InputCheck from '../../../utils/controls/input-checkbox'
import { fileitems } from './files-data'
import { Link } from 'react-router-dom'
import './files.css'
import Buttons from '../../../components/buttons/buttons'
let popupTop: number
let xpositionvalue: any
let offsetLeftValue: number
let offsetTopValue: number
let elementHeightValue: number
let offsetWidthValue: number
export default function Detailviewfiles () {
  /** *** Responsive Popup Code Start*****/
  const addfiles = useRef<any>(null)
  const popupbtnRef = useRef<any>(null)
  const [xpositionvalueupdate, setpopupwidthupdate] = useState<number>()
  const [popupheight, setpopupheight] = useState<number>()
  const [showActionPopups, setShowActionPopups] = useState({
    addfiles: false
  })
  const initialValues = ['addfiles']
  const [btnActionshowhide, setActionbtnshowhide] = useState({
    addfiles: false
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
        <div className="shadow card w-100 p-relative">
            <div className='card-header border-bottom1 gap-2 d-flex'>
                <InputCheck
                    inputProps={{
                      id: 'files',
                      name: 'Files',
                      label: 'Files',
                      arialabel: 'Select All',
                      type: 'checkbox',
                      className: 'color-primary',
                      badgecount: '23',
                      badge: 'badge bgcolor-primary whitetext px-1 border-radius3'
                    }}
                    className='me-1 title-color4 poppins-bold'
                    formClassName="d-flex align-items-center form-xs"
                />
                <div className="ms-auto d-flex align-items-center gap-1">
                    <ActionButtons
                        label="Add"
                        name='Add'
                        className={btnActionshowhide?.addfiles ? 'btn-border btn btn-xs font-0 font-xxl-14 color-primary btn-border-radius3 p-relative popup-arrow  ms-auto' : 'btn-border btn btn-xs font-0 font-xxl-14 color-primary btn-border-radius3 p-relative  ms-auto'}
                        icon="icon-add color-primary font-12 me-xl-1 bold"
                        isClick='addfiles'
                        type="button"
                        ref={addfiles}
                        popupCloseOpenFunctionality={popupCloseOpenFunctionality}
                        showhide={showActionPopups.addfiles}
                    />

                    <Buttons
                        label="Delete"
                        aria-label="Delete"
                        icon="icon-trashbin font-12"
                        className='btn-xs font-0 btn-border color-primary uppercase text-nowrap border-radius4 px-2'
                        type="button"
                    />
                    <Buttons
                        label="Download"
                        aria-label="Download"
                        icon="icon-download me-xl-1 font-12"
                        className='btn-xs font-0 font-xxl-14 btn-border color-primary uppercase text-nowrap border-radius3'
                        type="button"
                    />
                </div>
            </div>

            {btnActionshowhide?.addfiles
              ? <div className='popup popup-sm' ref={popupbtnRef} style={{ top: popupTop + 8, position: 'absolute', overflow: 'auto', left: xpositionvalueupdate, maxHeight: popupheight }}>
                    <h3>Add Files</h3>
                    <div className="pt-2">
                        <FileUpload
                            label="Add file (s)"
                            hint="Hint: Only Files with the following extensions are allowed: .png, .gif, .jpeg, .xlsx, .doc, .pdf, .ppt, .txt, .msg"
                        />
                    </div>
                    <div className='pt-2 d-flex gap-2'>
                        <Buttons
                            label="Ok"
                            aria-label="Ok"
                            icon="icon-checked font-12 me-1"
                            className='btn btn-sm btn-primary whitetext font-14 btn-border-radius3 ms-auto '
                        />
                        <ActionButtons
                            label="Cancel"
                            name="Cancel"
                            className='btn-bgcolor5 whitetext btn btn-sm font-14 btn-border-radius3'
                            icon="icon-close font-10 me-1"
                            type="button"
                            isClick='addfiles'
                            ref={addfiles}
                            popupCloseOpenFunctionality={popupCloseOpenFunctionality}
                            showhide={showActionPopups.addfiles} />
                    </div>
                </div>
              : ''}

            <div className="card-body ">
                {fileitems.map(filedata =>
                    <div className="d-flex align-items-center mb-2 pb-2 border-bottom1" key={filedata.title}>
                        <InputCheck
                            inputProps={{
                              id: filedata.title,
                              label: filedata.title,
                              arialabel: filedata.title,
                              type: 'checkbox',
                              className: 'form-xs font-0'
                            }}
                            formClassName="d-flex align-items-center me-2"
                        />
                        <div>
                            <div>
                                <Link className="color-primary" to={filedata.link} title={filedata.title}>
                                    {filedata.title}
                                </Link>
                            </div>
                            <div className="subtitle-color1 latoregular font-14">
                                <span>{filedata.uploadername}</span> <span> | </span>
                                <span>{filedata.date}</span> <span>{filedata.time}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
  )
}
