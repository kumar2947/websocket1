import React, { useEffect, useState, useRef } from 'react'
import Accordions from '../../../../components/accordions/accordions'
import Buttons from '../../../../components/buttons/buttons'
import AddeditView from './add-edit'
import Settingssubaccordion from './subaccordions'
const SettingsPMG = (props:any) => {
  const [changed, setHeightChange] = useState(false)
  const elementRef = useRef<any>(null)
  const [showAddPopup, setshowAddPopup] = useState(false)
  const [showedit, setshowedit] = useState(false)
  function addeditValue (showAddPopup:any) {
    setshowAddPopup(showAddPopup)
  }

  const accordionitems = [
    {
      Templates: '',
      Created: 'Brandon Green | 02/28/2023',
      'Is Archived': 'No',
      is_active: 'true',
      content: acordioncontent(
        'Financial services is the area Airmen perhaps are most familiar with. This is where transactions occur. A "transaction" is the series of paperwork and button-pushing events when an Airman needs just about anything done at his or her base finance office. A transaction could be the filing of a travel voucher, adjusting an allotment or correcting a pay error. It is the processing of these transactions, said Roger Bick, director of financial management strategic planning and transformation, where the Air Force financial management community starts its transformation efforts.',
        'Travel Reimbursement.Xlsx')
    },
    {
      Templates: '',
      Created: 'Brandon Green | 03/28/2023',
      'Is Archived': 'No',
      content: acordioncontent(
        'Financial services is the area Airmen perhaps are most familiar with. This is where transactions occur. A "transaction" is the series of paperwork and button-pushing events when an Airman needs just about anything done at his or her base finance office. A transaction could be the filing of a travel voucher, adjusting an allotment or correcting a pay error. It is the processing of these transactions, said Roger Bick, director of financial management strategic planning and transformation, where the Air Force financial management community starts its transformation efforts.',
        'Travel Reimbursement.Xlsx')
    },
    {
      Templates: '',
      Created: 'Brandon Green | 04/28/2023',
      'Is Archived': 'No',
      content: acordioncontent(
        'Financial services is the area Airmen perhaps are most familiar with. This is where transactions occur. A "transaction" is the series of paperwork and button-pushing events when an Airman needs just about anything done at his or her base finance office. A transaction could be the filing of a travel voucher, adjusting an allotment or correcting a pay error. It is the processing of these transactions, said Roger Bick, director of financial management strategic planning and transformation, where the Air Force financial management community starts its transformation efforts.',
        'Travel Reimbursement.Xlsx')
    },
    {
      Templates: '',
      Created: 'Brandon Green | 05/28/2023',
      'Is Archived': 'No',
      content: acordioncontent(
        'Financial services is the area Airmen perhaps are most familiar with. This is where transactions occur. A "transaction" is the series of paperwork and button-pushing events when an Airman needs just about anything done at his or her base finance office. A transaction could be the filing of a travel voucher, adjusting an allotment or correcting a pay error. It is the processing of these transactions, said Roger Bick, director of financial management strategic planning and transformation, where the Air Force financial management community starts its transformation efforts.',
        'Travel Reimbursement.Xlsx')
    },
    {
      Templates: '',
      Created: 'Brandon Green | 06/28/2023',
      'Is Archived': 'No',
      content: acordioncontent(
        'Financial services is the area Airmen perhaps are most familiar with. This is where transactions occur. A "transaction" is the series of paperwork and button-pushing events when an Airman needs just about anything done at his or her base finance office. A transaction could be the filing of a travel voucher, adjusting an allotment or correcting a pay error. It is the processing of these transactions, said Roger Bick, director of financial management strategic planning and transformation, where the Air Force financial management community starts its transformation efforts.',
        'Travel Reimbursement.Xlsx')
    }
  ]

  function acordioncontent (Desc?:any, AttachedFileName?:any) {
    return (
      (
            <Settingssubaccordion />
      )
    )
  }

  useEffect(() => {
    props?.findHeight(elementRef.current.offsetHeight)
    setHeightChange(false)
  }, [changed, elementRef])

  const setFun = () => {
    setHeightChange(true)
  }
  return (
            <div className='container' ref={elementRef}>
                <div className='row'>
                    <div className='mt-0 p-0 d-flex align-items-center'>
                        <h2 tabIndex={0} aria-label='Policy Memos & Guidelines'>Policy Memos & Guidelines</h2>
                    </div>
                    <div className='p-0 settings-main'>
                        {showAddPopup && (
                            <AddeditView showAddPopup={showAddPopup} filtersvalue={addeditValue} />
                        )}
                        {<Accordions
                            items={accordionitems}
                            headerextras={[{ name: 'Templates', classq: 'me-auto' }, { name: 'Created', classq: 'min-w-md-100 min-w-xl-175' }, { name: 'Is Archived', classq: 'text-nowrap maxfitcontent-lg' }]
                            }
                            className="accordions p-2"
                            accordionitemclass=" shadow card mb-2"
                            titleIcon="icon-open-folder font-16 color-primary pe-2"
                            titlecollapsedIcon="icon-close-folder pe-2 font-16 color-primary"
                            titleclassName="subtitle-color1 font-12"
                            titlecontentclassName="darktext lineClamp1 pe-2"
                            defaultActivekey='1'
                            dividerClass="dividerdashed vertical mx-2 mx-lg-3 d-none d-md-block"
                            extrasClass="d-flex flex-column align-items-center flex-md-row flex-nowrap w-100 last-child-hide"
                            count="bordered px-1 ms-1 border-radius"
                            setheight={setFun}
                            inputProps={{
                              className: 'justify-content-start poppins-medium font-13 w-100 p-0',
                              accordionheadClass: 'd-flex align-items-center p-2',
                              contentclassName: 'p-0'
                            }}

                            // actions={
                            //     <div className='d-flex gap-1'>
                            //         <Buttons
                            //             label="Edit"
                            //             aria-label="Edit"
                            //             icon="icon-pencil me-xl-1"
                            //             className='btn-border btn-xs font-0 font-xl-14 btn-border-radius3 ms-auto color-primary text-nowrap'
                            //             onClick={() => {
                            //                 setshowedit(true);
                            //                 setshowAddPopup(false);
                            //             }}
                            //         />
                            //         <Buttons
                            //             label="Delete"
                            //             aria-label="Delete"
                            //             icon="icon-delete me-xl-1"
                            //             className='btn-border btn-xs font-0 font-xl-14 btn-border-radius3 ms-auto color-primary text-nowrap'
                            //         />
                            //     </div>
                            // }
                        />}
                    </div>
                </div>
            </div>
  )
}
export default SettingsPMG
