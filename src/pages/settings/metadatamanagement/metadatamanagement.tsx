/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import Vtabs from '../../../components/tabs/vtabs'
import FormTooltip from './form-tooltip/form-tooltip'
import Sitefeedback from './site-feedback/site-feedback'
const Matadatamanagement = () => {
  const [height1, setHeight] = useState(0)
  const elementRef1 = useRef(null)
  const getHeight = (val:any) => {
    setHeight(val)
  }
  const tableitems = [
    {
      tabtitle: 'Form Tooltip',
      is_active: 'true',
      icon: 'icon-info circled-icon font-13 me-1',
      content: (<><FormTooltip findHeight={getHeight} /></>)
    },
    {
      tabtitle: 'Site Feedback',
      is_active: 'false',
      icon: 'icon-feedback circled-icon font-13 me-1',
      content: (<><Sitefeedback findHeight={getHeight} /></>)
    }
  ]
  return (
      <div className='container'>
        <div className='row'>
          <div style={{ height: height1 + 16 }} className='shadow card mt-0 p-0 tabscontent-height' ref={elementRef1}>
            <Vtabs items={tableitems} className="w-100" mainTabsclass="card-body v-tabs" tablistclassName="w-100" tabscontentarea="w-100 border-left1 ps-2" anchorclass="darktext font-13 poppins-semibold" />
          </div>
        </div>
      </div>
  )
}
export default Matadatamanagement
