/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, forwardRef } from 'react'
import Buttons from '../../components/buttons/buttons'
import Instractions from '../../components/instractions/instractions'
import Formvalidationmsgs from '../../components/formvalidation-msgs/formvalidation-msgs'
import './createform.css'
const CreateForm = (props: any, ref: any) => {
  const [show, setShow] = useState(false)
  const handleOpen = () => {
    setShow(!show) // Toggle accordion
  }
  const [showSubmit, setSubmit] = useState(false)
  const [showbottomSubmit, setbottomSubmit] = useState(false)
  const [btnActionshowhide, setActionbtnshowhide] = useState({
    close: false
  })
  const closeRef: any = null
  let clickedType = ''
  function popupCloseOpenFunctionality (type: any, val: any) {
    clickedType = type
    setActionbtnshowhide({
      ...btnActionshowhide,
      close: false
    })
    if (type) {
      setActionbtnshowhide({ ...btnActionshowhide, [type]: true })
      buttonRefferences(type)
    }
    if (val === 'top') {
      setSubmit(!showSubmit)
    } else {
      setbottomSubmit(!showbottomSubmit)
    }
  }
  function buttonRefferences (type: any) {
    if (type !== 'close') {
      closeRef?.current?.closeBtn()
    }
  }
  return (
        <>
            <div className="py-2 px-3 whitebg shadow1 d-flex flex-column flex-sm-row align-items-md-center">
                <div className="d-flex align-items-center py-1"> <h2 className="poppins-semibold font-18" tabIndex={0} aria-label="Form Title">Form Title</h2>
                    <Buttons
                        label="Instructions"
                        className='mx-2 btn-sm d-flex align-items-center whitetext btn-bgcolor3 btn-border-radius3 sourcesanspro font-13'
                        ricon={show ? 'icon-arrow-down ms-1 font-12 rotate' : 'icon-arrow-down ms-1 font-12'}
                        type="button"
                        onClick={handleOpen}
                    />
                </div>
                <div className="ms-auto formbuttons">
                    <ul className='d-flex list-type-none gap-1'>
                        <li>
                            <Buttons
                                label="Close"
                                className='btn-border1 btn-border-radius3 montserratbold font-0 font-md-12 text-uppercase title-color5 btn-hover'
                                icon="icon-close font-10 pe-md-1 title-color6"
                                type="button"
                            />
                        </li>
                        <li>
                            <Buttons
                                label="Save As Draft"
                                className='btn-border1 btn-border-radius3 montserratbold font-0 font-md-12 text-uppercase title-color5 btn-hover'
                                icon="icon-save font-10 pe-md-1 title-color6"
                                type="button"
                            />
                        </li>
                        <li>
                            <Buttons
                                label="Submit"
                                className={showSubmit ? 'btn-border1 btn-border-radius3 montserratbold font-0 font-md-12 text-uppercase title-color5 btn-hover active' : 'btn-border1 btn-border-radius3 montserratbold font-0 font-md-12 text-uppercase title-color5 btn-hover'}
                                icon="icon-submite font-11 pe-md-1 title-color6"
                                type="button"
                                onClick={() => {
                                  setSubmit(!showSubmit)
                                  setbottomSubmit(false)
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className=" mt-3">
                    <div>
                        {show && (
                            <Instractions />
                        )}
                    </div>
                    <div style={{ display: showSubmit ? '' : 'none' }}>
                        <Formvalidationmsgs popupCloseOpenFunctionality={popupCloseOpenFunctionality} ref={closeRef} qwer="top" />
                    </div>
                    <div className="whitebg border-radius p-3 min-h-400"></div>
                    <div style={{ display: showbottomSubmit ? '' : 'none' }}>
                        <Formvalidationmsgs popupCloseOpenFunctionality={popupCloseOpenFunctionality} ref={closeRef} qwer="bottom" />
                    </div>
                    <div className="formheader d-flex p-3 whitebg mt-3 " >
                        <div className="ms-auto formbuttons">
                            <ul className='d-flex list-type-none gap-1'>
                                <li>
                                    <Buttons
                                        label="Close"
                                        className='btn-border1 btn-border-radius3 montserratbold font-0 font-md-12 text-uppercase title-color5 btn-hover'
                                        icon="icon-close font-10 pe-md-1 title-color6"
                                        type="button"
                                    />
                                </li>
                                <li>
                                    <Buttons
                                        label="Save As Draft"
                                        className='btn-border1 btn-border-radius3 montserratbold font-0 font-md-12 text-uppercase title-color5 btn-hover'
                                        icon="icon-save font-10 pe-md-1 title-color6"
                                        type="button"
                                    />
                                </li>
                                <li>
                                    <Buttons
                                        label="Submit"
                                        className={showSubmit ? 'btn-border1 btn-border-radius3 montserratbold font-0 font-md-12 text-uppercase title-color5 btn-hover active' : 'btn-border1 btn-border-radius3 montserratbold font-0 font-md-12 text-uppercase title-color5 btn-hover'}
                                        icon="icon-submite font-11 pe-md-1 title-color6"
                                        type="button"
                                        onClick={() => {
                                          setbottomSubmit(!showbottomSubmit)
                                          setSubmit(false)
                                        }}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}
export default forwardRef(CreateForm)
