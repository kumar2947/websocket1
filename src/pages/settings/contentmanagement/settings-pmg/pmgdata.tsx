import React, { useEffect, useState, useRef } from 'react'
import Accordions from '../../../../components/accordions/accordions'
import Buttons from '../../../../components/buttons/buttons'
import AddeditView from './add-edit'
const PmgData = (props:any) => {
  const [showAddPopup, setshowAddPopup] = useState(false)
  const [showedit, setshowedit] = useState(false)
  function addeditValue (showAddPopup:any) {
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
  const onEdit = (item:any) => {
    setInEditMode({
      status: true,
      rowKey: item.ItemKey
    })
  }
  /* Function call on cancel */
  const onCancel = () => {
    setInEditMode({
      status: false,
      rowKey: null
    })
  }
  const pocitems = [
    {
      icon: 'icon-emptyfile pe-1 font-14',
      name: 'BVT notes.txt',
      createdtitle: 'Created',
      created: 'Brandon Green | 02/28/2023',
      modifiedtitle: 'Modified',
      modified: 'Brandon Green | 20/09/2023',
      ItemKey: 'item1'
    },
    {
      icon: 'icon-emptyfile pe-1 font-14',
      name: 'BVT notes.txt',
      createdtitle: 'Created',
      created: 'Brandon Green | 02/28/2023',
      modifiedtitle: 'Modified',
      modified: 'Brandon Green | 20/09/2023',
      ItemKey: 'item1'
    },
    {
      icon: 'icon-emptyfile pe-1 font-14',
      name: 'BVT notes.txt',
      createdtitle: 'Created',
      created: 'Brandon Green | 02/28/2023',
      modifiedtitle: 'Modified',
      modified: 'Brandon Green | 20/09/2023',
      ItemKey: 'item1'
    },
    {
      icon: 'icon-emptyfile pe-1 font-14',
      name: 'BVT notes.txt',
      createdtitle: 'Created',
      created: 'Brandon Green | 02/28/2023',
      modifiedtitle: 'Modified',
      modified: 'Brandon Green | 20/09/2023',
      ItemKey: 'item1'
    },
    {
      icon: 'icon-emptyfile pe-1 font-14',
      name: 'BVT notes.txt',
      createdtitle: 'Created',
      created: 'Brandon Green | 02/28/2023',
      modifiedtitle: 'Modified',
      modified: 'Brandon Green | 20/09/2023',
      ItemKey: 'item1'
    }
  ]

  return (
            <div className='container'>
            <div className='row'>
                    <div className='p-0 settings-main'>
                        {pocitems.map(poclist =>
                            <div className="d-flex flex-column shadow card mb-2 p-2" key={poclist.name}>
                                <div className="d-flex">
                                    <div className='d-flex flex-column flex-md-row flex-nowrap w-100'>
                                        <div className="d-flex  align-items-center me-auto">
                                            <span className={poclist.icon}></span>
                                            <span>{poclist.name}</span>
                                        </div>
                                        <div className="dividerdashed vertical mx-2 mx-lg-3 d-none d-md-block"></div>
                                        <div className="d-flex flex-column me-auto">
                                            <span className='subtitle-color1 font-12'>{poclist.createdtitle}</span>
                                            <span>{poclist.created}</span>
                                        </div>
                                        <div className="dividerdashed vertical mx-2 mx-lg-3 d-none d-md-block"></div>
                                        <div className="d-flex flex-column me-auto">
                                            <span className='subtitle-color1 font-12'>{poclist.modifiedtitle}</span>
                                            <span>{poclist.modified}</span>
                                        </div>
                                        <div className="dividerdashed vertical mx-2 mx-lg-3 d-none d-md-block"></div>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <div className='d-flex gap-1'>
                                            <Buttons
                                                label="Edit"
                                                aria-label="Edit"
                                                icon="icon-pencil me-xl-1"
                                                className='btn-border btn-xs font-0 font-xl-14 btn-border-radius3 ms-auto color-primary text-nowrap'
                                                onClick={() => onEdit(poclist)}
                                            />
                                            <Buttons
                                                label="Delete"
                                                aria-label="Delete"
                                                icon="icon-delete me-xl-1"
                                                className='btn-border btn-xs font-0 font-xl-14 btn-border-radius3 ms-auto color-primary text-nowrap'

                                            />
                                        </div>
                                    </div>
                                </div>
                                {inEditMode.status && inEditMode.rowKey === poclist.ItemKey
                                  ? (
                                        <AddeditView cancel={() => onCancel()} />
                                    )
                                  : ''}
                            </div>
                        )}
                    </div>
                </div>
            </div>
  )
}
export default PmgData
