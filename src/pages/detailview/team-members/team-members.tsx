/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import ActionButtons from '../../../components/buttons/actionbutton'
import InputCheck from '../../../utils/controls/input-checkbox'
import { membersitems } from './team-members-data'
import './team-members.css'
import Buttons from '../../../components/buttons/buttons'
import InputText from '../../../utils/controls/input-text'
let popupTop: number
let xpositionvalue: any
let offsetLeftValue: number
let offsetTopValue: number
let elementHeightValue: number
let offsetWidthValue: number
export default function Teammembers () {
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
        <div className="shadow card w-100 mt-3 p-relative">
            <div className='card-header border-bottom1 gap-2 flex-wrap d-flex align-items-center'>
                <InputCheck
                    inputProps={{
                      id: 'team-members',
                      name: 'Team Members',
                      label: 'Team Members',
                      arialabel: 'Select All',
                      type: 'checkbox',
                      className: 'color-primary',
                      badgecount: '23',
                      badge: 'badge bgcolor-primary whitetext px-1 border-radius3',
                      isInfo: 'true',
                      info: 'Team Members',
                      infoIcon: 'icon-info',
                      tooltip: 'tool-tip tooltip-top'
                    }}
                    className='me-1 title-color4 poppins-bold'
                    formClassName="d-flex align-items-center form-xs"
                />
                <div className="ms-auto d-flex align-items-center gap-1">
                    <ActionButtons
                        label="Add"
                        name='Add'
                        className={btnActionshowhide?.addfiles ? 'btn-border btn btn-xs font-0 font-xl-14  color-primary btn-border-radius3 p-relative popup-arrow  ms-auto' : 'btn-border btn btn-xs font-0 font-xl-14 color-primary btn-border-radius3 p-relative  ms-auto'}
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
                </div>
            </div>

            {btnActionshowhide?.addfiles
              ? <div className='popup popup-sm' ref={popupbtnRef} style={{ top: popupTop + 8, position: 'absolute', overflow: 'auto', left: xpositionvalueupdate, maxHeight: popupheight }}>
                    <h3>Add Members</h3>
                    <div className="pt-2">
                        <InputText
                            inputProps={{
                              id: 'teammember',
                              name: 'Team Member',
                              className: 'font-12',
                              placeholder: 'Subject'

                            }}
                            label='Team Member'
                            className='form-sm'
                            isMandatory
                            formClassName="ms-auto form-vertical"
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
                {membersitems.map(membersdata =>
                    <div className="d-flex align-items-center mb-2 pb-2 border-bottom1" key={membersdata.title}>
                        <InputCheck
                            inputProps={{
                              id: membersdata.title,
                              label: membersdata.title,
                              arialabel: membersdata.title,
                              type: 'checkbox',
                              className: 'form-xs font-0'
                            }}
                            formClassName="d-flex align-items-center me-2"
                        />
                        <div>
                            <div className="color-primary">
                                {membersdata.title}
                            </div>
                            <div className="subtitle-color1 latoregular font-14">
                                <a className="subtitle-color1 latoregular font-14" href={`mailto:${membersdata.mailid}`} title={membersdata.title}>
                                    {membersdata.mailid}
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
  )
}
