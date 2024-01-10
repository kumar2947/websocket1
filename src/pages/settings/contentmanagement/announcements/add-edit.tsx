import React, { useState } from 'react'
import Buttons from '../../../../components/buttons/buttons'
import InputText from '../../../../utils/controls/input-text'
import InputSelect from '../../../../utils/controls/input-select'
import RichTextEditor from '../../../../utils/controls/rich-text'
import FileUpload from '../../../../components/upload/upload-file'
import { scrollToTop } from '../../../../assets/js/global'
const AddeditView = (props:any) => {
  const [showedit, setshowedit] = useState(false)
  const [setshowAddPopup] = useState(false)
  if (props?.showAddPopup) {
    scrollToTop()
  }
  return (

            <div className={props?.showAddPopup ? 'mx-2 border-radius whitebg border-primary p-2' : 'settingseditpopup w-100 position-relative border-top1 p-2'} id='scroll'>
                {props?.showAddPopup && <div className="py-2 border-bottom1 ">
                    <h4 tabIndex={0} aria-label="Add Announcements" className="m-0 p-0 d-inline-block font-15 montserratsemibold textcolor4 text-uppercase">
                        Add Announcements
                    </h4>
                </div>}
                <div className="row">
                    <div className="col-sm-12 col-lg-12 mb-2">
                        <InputText
                            inputProps={{
                              id: ' Title ',
                              name: ' Title',
                              placeholder: 'Enter Title',
                              className: 'latomedium font-13 darktext mb-2'
                            }}
                            label=" Title "
                            isMandatory
                            infoClassName="tool-tip tooltip-top font-12 sourcesanspro"
                            info="Title "
                            infoIcon="icon-info"
                            isInfo
                            formClassName="d-flex flex-column"
                        />
                    </div>
                    <div className="col-sm-12 col-lg-12 mb-2">
                        <RichTextEditor
                            inputProps={{
                              id: ' Description ',
                              name: ' Description',
                              placeholder: 'Enter Description',
                              className: 'latomedium font-13 darktext mb-2'
                            }}
                            label="Description "
                            isMandatory
                            infoClassName="tool-tip tooltip-top font-12 sourcesanspro"
                            info="Description "
                            infoIcon="icon-info"
                            isInfo
                            formClassName="d-flex flex-column"
                        />
                    </div>
                    <div className="col-sm-12 col-lg-12 mb-2">
                        <FileUpload
                            inputProps={{
                              id: 'Attach files ',
                              name: ' Description',
                              className: 'latomedium font-13 darktext mb-2'
                            }}
                            label="Attach file (s) "
                            infoClassName="tool-tip tooltip-top font-12 sourcesanspro"
                            info="Attach file (s) "
                            infoIcon="icon-info"
                            isInfo
                            formClassName="d-flex flex-column"
                            hint="Hint: Only Files with the following extensions are allowed: .png, .gif, .jpeg, .xlsx, .doc, .pdf, .ppt, .txt, .msg"
                        />
                    </div>
                    {!props?.showAddPopup &&
                        <div className="col-sm-12 col-lg-4 mb-2">
                            <InputSelect
                                inputProps={{
                                  id: 'IsArchived ',
                                  name: ' Is Archived  ',
                                  className: 'latomedium font13 darktext mb-2'
                                }}
                                label="Is Archived "
                                infoClassName="tool-tip tooltip-top font-12 p-1"
                                info="Is Archived "
                                infoIcon="icon-info"
                                isInfo
                                formClassName="d-flex flex-column"
                            />
                        </div>
                    }
                </div>
                <div className="d-flex py-1 flex-wrap">
                    <div className="ms-auto settingsbtns d-flex">
                        {props?.showAddPopup &&
                            <>
                                <Buttons
                                    label="Save"
                                    className="border-radius py-1 px-2 btn-bgcolor9  ms-2 whitetext montserratbold font-12 text-uppercase btn-xs"
                                    icon="icon-save font-11 pe-1"
                                    type="button"
                                />
                                <Buttons
                                    label="Cancel"
                                    className="py-1 px-2 border-radius bordered ms-2 montserratbold font-12 text-uppercase btn-xs"
                                    icon="icon-close color-primary font-9 pe-1"
                                    type="button"
                                    onClick={() => {
                                      props?.filtersvalue(!props?.showAddPopup)
                                    }}
                                /> </>}
                        {!props?.showAddPopup &&
                            <>
                                <Buttons
                                    label="Update"
                                    className="border-radius py-1 px-2 btn-bgcolor11 ms-2 whitetext montserratbold font-12 text-uppercase btn-xs"
                                    icon="icon-update font-11 pe-1"
                                    type="button"
                                />
                                <Buttons
                                    label="Cancel"
                                    className="py-1 px-2 border-radius btn-border1  ms-2 montserratbold font-12 text-uppercase btn-xs"
                                    icon="icon-close color-primary font-9 pe-1"
                                    type="button"
                                    onClick={() => {
                                      setshowedit(false)
                                    }}
                                /></>}
                    </div>
                </div>
            </div>
  )
}
export default AddeditView
