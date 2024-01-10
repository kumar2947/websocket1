/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { formvalidationmsgs } from './formvalidation-msgs-data'
import { Link } from 'react-router-dom'
import './formvalidation-msgs.css'
// export default function Formvalidationmsgs() {
const Formvalidationmsgs = (props : any, ref : any) => {
  const [showSubmit, setSubmit] = useState(false)
  useImperativeHandle(ref, () => ({
    closeBtn: () => {
      setSubmit(false)
    }
  }))
  const showHideCancel = () => {
    setSubmit(false)
    if (props.qwer === 'top') {
      props.popupCloseOpenFunctionality('Close', 'top')
    } else {
      props.popupCloseOpenFunctionality('Close', 'bottom')
    }
  }
  /* onClick={() => setSubmit(false)} */
  return (
        <>
            <div className="pt-2 validation-msgs mb-3 py-2 ps-2 whitebg shadow text-color5 bordered7 border-radius p-relative" >
                <h2 className='px-2 title-color1 font-15 sourcesansprosemibold text-uppercase'><span tabIndex={0} aria-label="Please Fill The Below Mandatory Fields">PLEASE FILL THE BELOW MANDATORY FIELDS</span></h2>
                <button type='button' title='Close' aria-label="Close" className='anchorclosebutton py-2 px-2 bgcolor-primary whitetext btn-border-radius3' onClick={showHideCancel}><span className="icon-close text-color1 font-10"></span></button>
                <ul tabIndex={0} aria-live="polite" className='marker-color list-type-circle font-13 sourcesanspro'>
                    {formvalidationmsgs.map(msgs =>
                        <li key={msgs.title}>
                            <Link to={msgs.link} title={msgs.title}>
                                {msgs.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </>
  )
}
export default forwardRef(Formvalidationmsgs)
