/* eslint-disable react/no-unknown-property */
import React, { useState, useRef } from 'react'
import ActionButtons from '../buttons/actionbutton'
import { workflow } from './workflow-data'
import './workflow.css'
export default function Workflow () {
  const workflowItems = workflow.map(flowitems =>
        <li className="d-flex flex-column align-items-center px-2 px-xl-3" key={flowitems.title}>
            <div className="circle kpi-bg" status-kpis={flowitems.kpicolorcode}><span className={flowitems.icon}></span></div>
            <div tabIndex={0} className="workflow-title1">{flowitems.title}</div>
        </li>
  )
  /** *** Responsive Popup Code Start*****/
  const workflowsteps = useRef(null)
  const [showActionPopups, setShowActionPopups] = useState({
    workflowsteps: false
  })
  const [btnActionshowhide, setActionbtnshowhide] = useState({
    workflowsteps: false
  })

  const showhide = { ...btnActionshowhide }
  function popupCloseOpenFunctionality (type:any, value:number, top:number, xposition:number, left:number, elementHeight:number, offsetWidth:number) {
    showhide.workflowsteps = false
    setActionbtnshowhide(showhide)
    if (type) {
      setActionbtnshowhide({ ...showhide, [type]: value })
      setShowActionPopups({ ...showhide, [type]: value })
    }
  }

  return (
    <>
      <div className="ms-auto">
      {btnActionshowhide?.workflowsteps
        ? ''
        : <ul className={btnActionshowhide?.workflowsteps ? 'list-type-none d-flex workflow' : 'list-type-none d-flex workflow  workflow-collapsed'}>
          {workflowItems}
        </ul>
}
        {btnActionshowhide?.workflowsteps
          ? <ul className='list-type-none d-flex workflow'>
         {workflowItems}
       </ul>
          : ''}
        <ActionButtons
                    label=""
                    name=''
                    className='btn-sm p-0 workflow-icon'
                    icon="icon-sitemap border-primary color-primary p-2 border-radius4"
                    isClick='workflowsteps'
                    type="button"
                    ref={workflowsteps}
                    popupCloseOpenFunctionality={popupCloseOpenFunctionality}
                    showhide={showActionPopups.workflowsteps}
                />
        {/* <a href="javascript:void(0)" onClick={handleOpen} className="workflow-icon icon-sitemap border-primary color-primary p-2 border-radius4"></a> */}
      </div>
    </>
  )
}
