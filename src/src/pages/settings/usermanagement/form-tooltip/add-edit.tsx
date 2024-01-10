/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import Buttons from '../../../../components/buttons/buttons'
import InputText from '../../../../utils/controls/input-text'
import InputSelect from '../../../../utils/controls/input-select'
import { scrollToTop } from '../../../../assets/js/global'
const AddeditView = (props: any) => {
  const [showedit, setshowedit] = useState(false)
  const [showAddPopup, setshowAddPopup] = useState(false)
  if (props?.showAddPopup) {
    scrollToTop()
  }
  return (
        <div className="settingseditpopup w-100 position-relative border-top1 p-2 mt-2" id='scroll'>
            <div className="row">
                <div className="col-sm-12 mb-2">
                    <InputText
                        inputProps={{
                          id: 'labelname ',
                          name: 'Label Name',
                          placeholder: 'Enter Name or email address..',
                          className: 'latomedium font-13 darktext mb-2'
                        }}
                        label="Label Name"
                        isMandatory
                        infoClassName="tool-tip tooltip-top font-12 sourcesanspro"
                        info="Label Name"
                        infoIcon="icon-info"
                        isInfo
                        formClassName="d-flex flex-column"
                    />
                </div>
                <div className="col-sm-12 mb-2">
                    <InputText
                        inputProps={{
                          id: 'labelid',
                          name: 'Label ID',
                          placeholder: 'Enter Phone Number',
                          className: 'latomedium font-13 darktext mb-2'
                        }}
                        label="Label ID"
                        isMandatory
                        infoClassName="tool-tip tooltip-top font-12 sourcesanspro"
                        info="Label ID"
                        infoIcon="icon-info"
                        isInfo
                        formClassName="d-flex flex-column"
                    />
                </div>
                <div className="col-sm-12 mb-2">
                    <InputText
                        inputProps={{
                          id: 'description ',
                          name: 'Description ',
                          placeholder: 'Enter Phone Number',
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
