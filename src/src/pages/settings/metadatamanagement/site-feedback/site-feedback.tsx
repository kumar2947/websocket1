/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import Buttons from '../../../../components/buttons/buttons'
const Sitefeedback = (props:any) => {
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
      nametitle: 'Subject',
      name: 'Test latest one',
      othertitle: 'Feedback About',
      other: 'Other',
      descriptiontitle: 'Description',
      description: 'Leading example of how the insurance industry sees the individual.',
      attachmenttitle: 'Attachments',
      attachment: 'attachment-file-name.png',
      modifiedtitle: 'Modified',
      modified: 'Brandon Green | 20/09/2023',
      ItemKey: 'item1'
    },
    {
      nametitle: 'Subject',
      name: 'Test latest one',
      othertitle: 'Feedback About',
      other: 'Other',
      descriptiontitle: 'Description',
      description: 'Leading example of how the insurance industry sees the individual.',
      attachmenttitle: 'Attachments',
      attachment: 'attachment-file-name.png',
      modifiedtitle: 'Modified',
      modified: 'Brandon Green | 20/09/2023',
      ItemKey: 'item1'
    },
    {
      nametitle: 'Subject',
      name: 'Test latest one',
      othertitle: 'Feedback About',
      other: 'Other',
      descriptiontitle: 'Description',
      description: 'Leading example of how the insurance industry sees the individual.',
      attachmenttitle: 'Attachments',
      attachment: 'attachment-file-name.png',
      modifiedtitle: 'Modified',
      modified: 'Brandon Green | 20/09/2023',
      ItemKey: 'item1'
    },
    {
      nametitle: 'Subject',
      name: 'Test latest one',
      othertitle: 'Feedback About',
      other: 'Other',
      descriptiontitle: 'Description',
      description: 'Leading example of how the insurance industry sees the individual.',
      attachmenttitle: 'Attachments',
      attachment: 'attachment-file-name.png',
      modifiedtitle: 'Modified',
      modified: 'Brandon Green | 20/09/2023',
      ItemKey: 'item1'
    },
    {
      nametitle: 'Subject',
      name: 'Test latest one',
      othertitle: 'Feedback About',
      other: 'Other',
      descriptiontitle: 'Description',
      description: 'Leading example of how the insurance industry sees the individual.',
      attachmenttitle: 'Attachments',
      attachment: 'attachment-file-name.png',
      modifiedtitle: 'Modified',
      modified: 'Brandon Green | 20/09/2023',
      ItemKey: 'item1'
    }
  ]

  useEffect(() => {
    props?.findHeight(elementRef.current.offsetHeight)
    setHeightChange(false)
  }, [changed, elementRef, props])

  const setFun = () => {
    setHeightChange(true)
  }
  return (

            <div className='container' ref={elementRef}>
                <div className='row'>
                    <div className='mt-0 p-0 d-flex align-items-center'>
                        <h2 tabIndex={0} aria-label='Site Feedback'>Site Feedback</h2>
                        <Buttons
                            label="Download Site Feedback"
                            aria-label="Download Site Feedback"
                            icon="icon-download me-1"
                            className='btn-sm btn-primary ms-auto whitetext text-nowrap border-radius uppercase'
                        />
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
                                            <span className='subtitle-color1 font-12'>{poclist.othertitle}</span>
                                            <span>{poclist.other}</span>
                                        </div>
                                        <div className="dividerdashed vertical mx-2 mx-lg-3 d-none d-md-block"></div>
                                        <div className="d-flex flex-column me-auto">
                                            <span className='subtitle-color1 font-12'>{poclist.descriptiontitle}</span>
                                            <span>{poclist.description}</span>
                                        </div>
                                        <div className="dividerdashed vertical mx-2 mx-lg-3 d-none d-md-block"></div>
                                        <div className="d-flex flex-column me-auto">
                                            <span className='subtitle-color1 font-12'>{poclist.attachmenttitle}</span>
                                            <span>{poclist.attachment}</span>
                                        </div>
                                        <div className="dividerdashed vertical mx-2 mx-lg-3 d-none d-md-block"></div>
                                        <div className="d-flex flex-column me-auto">
                                            <span className='subtitle-color1 font-12'>{poclist.modifiedtitle}</span>
                                            <span>{poclist.modified}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
  )
}
export default Sitefeedback
