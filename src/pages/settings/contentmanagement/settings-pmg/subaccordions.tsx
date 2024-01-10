/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import Accordions from '../../../../components/accordions/accordions'
import Buttons from '../../../../components/buttons/buttons'
import AddeditView from './add-edit'
import PmgData from './pmgdata'
const Settingssubaccordion = (props: any) => {
  const [showAddPopup, setshowAddPopup] = useState(false)
  const [showedit, setshowedit] = useState(false)
  function addeditValue (showAddPopup: any) {
    setshowAddPopup(showAddPopup)
  }

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null
  })
  /* Function call on clicking Add button */
  const onclickADD = () => {
    setshowAddPopup(!showAddPopup)
    setInEditMode({
      status: false,
      rowKey: null
    })
  }
  /* Function call on edit */
  const onEdit = (item: any) => {
    setInEditMode({
      status: true,
      rowKey: item.ItemKey
    })
  }
  /* Function call on cancel */
  const onCancel = (item: any) => {
    setInEditMode({
      status: false,
      rowKey: null
    })
  }
  const inneraccordionitems = [
    {
      Templates: '',
      Created: 'Brandon Green | 02/28/2023',
      Modified: 'Brandon Green | 02/28/2023',
      is_active: 'true',
      content: acordioninnercontent(
        'Financial services is the area Airmen perhaps are most familiar with. This is where transactions occur. A "transaction" is the series of paperwork and button-pushing events when an Airman needs just about anything done at his or her base finance office. A transaction could be the filing of a travel voucher, adjusting an allotment or correcting a pay error. It is the processing of these transactions, said Roger Bick, director of financial management strategic planning and transformation, where the Air Force financial management community starts its transformation efforts.',
        'Travel Reimbursement.Xlsx')
    },
    {
      Templates: '',
      Created: 'Brandon Green | 03/28/2023',
      Modified: 'Brandon Green | 02/28/2023',
      content: acordioninnercontent(
        'Financial services is the area Airmen perhaps are most familiar with. This is where transactions occur. A "transaction" is the series of paperwork and button-pushing events when an Airman needs just about anything done at his or her base finance office. A transaction could be the filing of a travel voucher, adjusting an allotment or correcting a pay error. It is the processing of these transactions, said Roger Bick, director of financial management strategic planning and transformation, where the Air Force financial management community starts its transformation efforts.',
        'Travel Reimbursement.Xlsx')
    },
    {
      Templates: '',
      Created: 'Brandon Green | 04/28/2023',
      Modified: 'Brandon Green | 02/28/2023',
      content: acordioninnercontent(
        'Financial services is the area Airmen perhaps are most familiar with. This is where transactions occur. A "transaction" is the series of paperwork and button-pushing events when an Airman needs just about anything done at his or her base finance office. A transaction could be the filing of a travel voucher, adjusting an allotment or correcting a pay error. It is the processing of these transactions, said Roger Bick, director of financial management strategic planning and transformation, where the Air Force financial management community starts its transformation efforts.',
        'Travel Reimbursement.Xlsx')
    },
    {
      Templates: '',
      Created: 'Brandon Green | 05/28/2023',
      Modified: 'Brandon Green | 02/28/2023',
      content: acordioninnercontent(
        'Financial services is the area Airmen perhaps are most familiar with. This is where transactions occur. A "transaction" is the series of paperwork and button-pushing events when an Airman needs just about anything done at his or her base finance office. A transaction could be the filing of a travel voucher, adjusting an allotment or correcting a pay error. It is the processing of these transactions, said Roger Bick, director of financial management strategic planning and transformation, where the Air Force financial management community starts its transformation efforts.',
        'Travel Reimbursement.Xlsx')
    },
    {
      Templates: '',
      Created: 'Brandon Green | 06/28/2023',
      Modified: 'Brandon Green | 02/28/2023',
      content: acordioninnercontent(
        'Financial services is the area Airmen perhaps are most familiar with. This is where transactions occur. A "transaction" is the series of paperwork and button-pushing events when an Airman needs just about anything done at his or her base finance office. A transaction could be the filing of a travel voucher, adjusting an allotment or correcting a pay error. It is the processing of these transactions, said Roger Bick, director of financial management strategic planning and transformation, where the Air Force financial management community starts its transformation efforts.',
        'Travel Reimbursement.Xlsx')
    }
  ]

  function acordioninnercontent (Desc: any, AttachedFileName: any) {
    return (
      (
                <PmgData />
      )
    )
  }
  return (
            <div className='container'>
                <div className='row'>
                    <div className='p-0 settings-main'>
                        {showAddPopup && (
                            <AddeditView showAddPopup={showAddPopup} filtersvalue={addeditValue} />
                        )}
                        {<Accordions
                            items={inneraccordionitems}
                            headerextras={[{ name: 'Templates', classq: 'me-auto' }, { name: 'Created', classq: 'min-w-md-100 min-w-xl-175' }, { name: 'Modified', classq: 'text-nowrap maxfitcontent-lg' }]
                            }
                            className="accordions p-2"
                            accordionitemclass=" shadow card mb-2"
                            titleIcon="icon-open-folder font-16 color-primary pe-2"
                            titlecollapsedIcon="icon-close-folder pe-2 font-16 color-primary"
                            titleclassName="subtitle-color1 font-12"
                            titlecontentclassName="darktext lineClamp1 pe-2"
                            defaultActivekey='1'
                            dividerClass="dividerdashed vertical mx-2 mx-lg-3 d-none d-md-block"
                            extrasClass="d-flex flex-column align-items-center flex-md-row flex-nowrap w-100"
                            count="bordered px-1 ms-1 border-radius"
                            inputProps={{
                              className: 'justify-content-start poppins-medium font-13 w-100 p-0',
                              accordionheadClass: 'd-flex align-items-center p-2',
                              contentclassName: 'p-0'
                            }}
                            actions={
                                <div className='d-flex gap-1'>
                                    <Buttons
                                        label="ADD"
                                        aria-label="ADD"
                                        icon="icon-add me-1"
                                        className='btn-sm btn-primary ms-auto whitetext text-nowrap border-radius'
                                        onClick={() => {
                                          setshowAddPopup(!showAddPopup)
                                        }}
                                    />
                                </div>
                            }
                        />}
                    </div>
                </div>
            </div>
  )
}
export default Settingssubaccordion
