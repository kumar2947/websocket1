import React, { useState } from 'react'
import Buttons from '../../../../components/buttons/buttons'
import InputText from '../../../../utils/controls/input-text'
import InputSelect from '../../../../utils/controls/input-select'
import { scrollToTop } from '../../../../assets/js/global'
const AddeditView = (props:any) => {
  const [showedit, setshowedit] = useState(false)
  const [showAddPopup, setshowAddPopup] = useState(false)
  if (props?.showAddPopup) {
    scrollToTop()
  }
  return (
            <div className={props?.showAddPopup ? 'border-radius whitebg border-primary p-2 mb-2' : 'settingseditpopup w-100 position-relative border-top1 p-2 mt-2'} id='scroll'>
                {props?.showAddPopup && <div className="py-2 border-bottom1 ">
                    <h4 tabIndex={0} aria-label="ADD POINTS OF CONTACT" className="m-0 p-0 d-inline-block font-15 montserratsemibold textcolor4 text-uppercase">
                        ADD POINTS OF CONTACT
                    </h4>
                </div>}
                <div className="row">
                    <div className={props?.showAddPopup ? 'col-sm-12 col-md-6 mb-2' : 'col-sm-12 col-md-4 mb-2'}>
                        <InputText
                            inputProps={{
                              id: 'pointsofcontact ',
                              name: 'Points of Contact',
                              placeholder: 'Enter Name or email address..',
                              className: 'latomedium font-13 darktext mb-2'
                            }}
                            label=" Points of Contact "
                            isMandatory
                            infoClassName="tool-tip tooltip-top font-12 sourcesanspro"
                            info="Points of Contact "
                            infoIcon="icon-info"
                            isInfo
                            formClassName="d-flex flex-column"
                        />
                    </div>
                    <div className={props?.showAddPopup ? 'col-sm-12 col-md-6 mb-2' : 'col-sm-12 col-md-4 mb-2'}>
                        <InputText
                            inputProps={{
                              id: ' phonenumber ',
                              name: 'Phone Number',
                              placeholder: 'Enter Phone Number',
                              className: 'latomedium font-13 darktext mb-2'
                            }}
                            label="Phone Number "
                            isMandatory
                            infoClassName="tool-tip tooltip-top font-12 sourcesanspro"
                            info="Phone Number "
                            infoIcon="icon-info"
                            isInfo
                            formClassName="d-flex flex-column"
                        />
                    </div>
                    {!props?.showAddPopup &&
                        <div className="col-sm-12 col-md-4 mb-2">
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
                                      props?.cancel()
                                    }}

                                /></>}
                    </div>
                </div>
            </div>
  )
}
export default AddeditView
