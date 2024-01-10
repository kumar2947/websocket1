/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import Vtabs from '../../../components/tabs/vtabs'
import FormTooltip from './form-tooltip/form-tooltip'
import Sitefeedback from './site-feedback/site-feedback'
import InputSelect from '../../../utils/controls/input-select'
const Usermanagement = () => {
  const [height1, setHeight] = useState(0)
  const elementRef1 = useRef(null)
  const getHeight = (val: any) => {
    setHeight(val)
  }
  const tableitems = [
    {
      tabtitle: 'User Groups',
      is_active: 'true',
      icon: 'icon-info circled-icon font-13 me-1',
      content: (<><FormTooltip findHeight={getHeight} /></>)
    }
  ]
  return (
    <div className='container'>
      <div className='row'>
        <div style={{ height: height1 + 16 }} className='shadow card mt-0 p-0 tabscontent-height' ref={elementRef1}>
          {/* <Vtabs items={tableitems} className="w-100" mainTabsclass="card-body v-tabs" tablistclassName="w-100" tabscontentarea="w-100 border-left1 ps-2" anchorclass="darktext font-13 poppins-bold" /> */}

          <div className="d-flex w-100 p-relative align-items-center p-3 pb-1 ">
            <h2 tabIndex={0} aria-label="Alerts" className="d-flex align-items-center font-16">
              <span className="icon-bell font-16 pe-1"></span> Alerts
            </h2>
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center ms-1">
                <InputSelect
                  inputProps={{
                    id: 'FilterBy',
                    name: 'Filter By1',
                    placeholder: 'Select',
                    className: 'font-11'
                  }}
                  label='Filter By1'
                  type='select'
                  className='font-11  form-xs'
                  formClassName="ms-auto form-horizontal"
                />

              </div>
              <div className="d-flex align-items-center ms-1 mb-1">
                <InputSelect
                  inputProps={{
                    id: 'Date',
                    name: 'Date',
                    placeholder: 'Select',
                    className: 'font-11'
                  }}
                  label='Date'
                  type='select'
                  className='font-11 form-xs'
                  formClassName="form-horizontal"
                />
              </div>
              <div className="font-11 links ms-1" >days</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Usermanagement
