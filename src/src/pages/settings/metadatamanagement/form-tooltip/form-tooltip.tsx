/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import Buttons from '../../../../components/buttons/buttons'
import AddeditView from './add-edit'
const FormTooltip = (props:any) => {
  const [height1, setHeight] = useState(0)
  const [changed, setHeightChange] = useState(false)
  const elementRef = useRef<any>(null)
  const [showAddPopup, setshowAddPopup] = useState(false)
  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null
  })
  function addeditValue (showAddPopup:any) {
    setshowAddPopup(showAddPopup)
  }
  /* Function call on clicking Add button */
  const onclickADD = () => {
    setFun()
    setshowAddPopup(!showAddPopup)
    setInEditMode({
      status: false,
      rowKey: null
    })
  }
  /* Function call on edit */
  const onEdit = (item:any) => {
    setFun()
    setInEditMode({
      status: true,
      rowKey: item.ItemKey
    })
  }
  /* Function call on cancel */
  const onCancel = () => {
    setFun()
    setInEditMode({
      status: false,
      rowKey: null
    })
  }

  const pocitems = [
    {
      nametitle: 'Label Name',
      name: 'Sub Category',
      labelidtitle: 'Label ID',
      labelid: 'helpSubCategory',
      descriptiontitle: 'Description',
      description: 'Applicable sub category for inquiry',
      modifiedtitle: 'Modified',
      modified: 'Brandon Green | 20/09/2023',
      ItemKey: 'item1'
    },
    {
      nametitle: 'Label Name',
      name: 'Sub Category',
      labelidtitle: 'Label ID',
      labelid: 'helpSubCategory',
      descriptiontitle: 'Description',
      description: 'Applicable sub category for inquiry',
      modifiedtitle: 'Modified',
      modified: 'Brandon Green | 20/09/2023',
      ItemKey: 'item1'
    },
    {
      nametitle: 'Label Name',
      name: 'Sub Category',
      labelidtitle: 'Label ID',
      labelid: 'helpSubCategory',
      descriptiontitle: 'Description',
      description: 'Applicable sub category for inquiry',
      modifiedtitle: 'Modified',
      modified: 'Brandon Green | 20/09/2023',
      ItemKey: 'item1'
    },
    {
      nametitle: 'Label Name',
      name: 'Sub Category',
      labelidtitle: 'Label ID',
      labelid: 'helpSubCategory',
      descriptiontitle: 'Description',
      description: 'Applicable sub category for inquiry',
      modifiedtitle: 'Modified',
      modified: 'Brandon Green | 20/09/2023',
      ItemKey: 'item1'
    },
    {
      nametitle: 'Label Name',
      name: 'Sub Category',
      labelidtitle: 'Label ID',
      labelid: 'helpSubCategory',
      descriptiontitle: 'Description',
      description: 'Applicable sub category for inquiry',
      modifiedtitle: 'Modified',
      modified: 'Brandon Green | 20/09/2023',
      ItemKey: 'item1'
    }
  ]

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
                        <h2 tabIndex={0} aria-label='Form Tooltips'>Form Tooltips</h2>

                    </div>
                    <div className='p-0 settings-main'>
                        {pocitems.map(poclist =>
                            <div className="d-flex flex-column shadow card poppins-medium mb-2 p-2" key={poclist.name}>
                                <div className="d-flex">
                                    <div className='d-flex flex-column flex-md-row flex-nowrap w-100'>
                                        <div className="d-flex flex-column me-auto">
                                            <span className='subtitle-color1 font-12'>{poclist.nametitle}</span>
                                            <span>{poclist.name}</span>
                                        </div>
                                        <div className="dividerdashed vertical mx-2 mx-lg-3 d-none d-md-block"></div>
                                        <div className="d-flex flex-column me-auto">
                                            <span className='subtitle-color1 font-12'>{poclist.labelidtitle}</span>
                                            <span>{poclist.labelid}</span>
                                        </div>
                                        <div className="dividerdashed vertical mx-2 mx-lg-3 d-none d-md-block"></div>
                                        <div className="d-flex flex-column me-auto">
                                            <span className='subtitle-color1 font-12'>{poclist.descriptiontitle}</span>
                                            <span>{poclist.description}</span>
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
export default FormTooltip
