/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import Buttons from "../../../components/buttons/buttons";
import Accordions from '../../../components/accordions/accordions';
import InputText from "../../../utils/controls/input-text";
import InputSelect from "../../../utils/controls/input-select";
import RichTextEditor from "../../../utils/controls/rich-text";
import FileUpload from "../../../components/upload/upload-file"
const QandA = () => {
  const [showAddPopup, setshowAddPopup] = useState(false);
  const [showedit, setshowedit] = useState(false);
  const accordionitems = [
    {
      title: (
        <>
          <div className="w-100 ">
            <div className="d-flex flex-row flex-lg-row  px-3 my-2 align-items-lg-center  w-100 flex-wrap settingsannouncements">
              <div className="my-1 col-12 Title">
                <div className="subtitle-color font-12 montserratSemibold pb-1">
                  Title
                </div>
                <div className="darktext font-12 montserratSemibold" >
                  Leading example of how the insurance industry sees the
                  individual.
                </div>
              </div>
              <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>
              <div className="my-1 col-12 Created">
                <div className="subtitle-color font-12 montserratSemibold pb-1">
                  Created
                </div>
                <div className="darktext font-12 montserratSemibold">
                  Brandon Green | 02/28/2022
                </div>
              </div>
              <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>
              <div className="my-1 col-12 IsArchived">
                <div className="subtitle-color font-12 montserratSemibold pb-1">
                  Is Archived
                </div>
                <div className="darktext font-12 montserratSemibold">No</div>
              </div>
              <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>


              <div className="d-flex align-items-center col-12 Actions flex-wrap me-2">

                <Buttons
                  label="Edit"
                  className='btn-sm sourcesansprosemibold font-12 btn-bgcolor10  title-color1 border-radius text-uppercase text-nowrap my-1 mx-2'
                  icon="icon-pencil font-10 pe-1"
                  type="button"
                  onClick={() => {
                    setshowedit(true);
                    setshowAddPopup(false);
                  }}

                />


                <Buttons
                  label="Delete"
                  className='btn-sm sourcesansprosemibold font-12 btn-bgcolor10 title-color1 border-radius text-uppercase text-nowrap my-1 mx-2'
                  icon="icon-trashbin font-10 pe-1"
                  type="button"


                />

              </div>

            </div>

          </div>
        </>
      ),
      is_active: "true",
      className: 'no-bordered',
      titlename: "Leading example of how the insurance industry sees the individual",

      content: (
        <>
          {showedit ? (
            <div className="settingseditpopup w-100 position-relative p-3 bordered1 p-2 no-border-top no-border-bottom">

              <div className="row">

                <div className="col-sm-12 col-lg-12 mb-2">
                  <InputText
                    inputProps={{
                      id: " Title ",
                      name: " Title",
                      placeholder: "Enter Title",
                      className: "latomedium font-13 darktext mb-2",
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
                      id: " Description ",
                      name: " Description",
                      placeholder: "Enter Description",
                      className: "latomedium font-13 darktext mb-2",
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
                      id: "Attach files ",
                      name: " Description",
                      className: "latomedium font-13 darktext mb-2",
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


                <div className="col-sm-12 col-lg-4 mb-2">
                  <InputSelect
                    inputProps={{
                      id: "IsArchived ",
                      name: " Is Archived  ",
                      className: "latomedium font13 darktext mb-2",
                    }}
                    label="Is Archived "
                    infoClassName="tool-tip tooltip-top font-12 p-1"
                    info="Is Archived "
                    infoIcon="icon-info"
                    isInfo
                    formClassName="d-flex flex-column"
                  />
                </div>
              </div>
              <div className="d-flex py-1 flex-wrap">
                <div className="ms-auto settingsbtns d-flex">
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
                      setshowedit(false);
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="bordered1 p-2 no-border-top">
            <div className="row">
              <div className="col-md-12">
                <div className="latobold font-13 title-color pb-1">
                  <span tabIndex={0} aria-label="Description">
                    Description
                  </span>
                </div>
                <div tabIndex={0} aria-live="polite">
                  <p className="font-13 sourcesanspro subtitle-color pb-1">
                    Financial services is the area Airmen perhaps are most
                    familiar with. This is where transactions occur. A
                    "transaction" is the series of paperwork and button-pushing
                    events when an Airman needs just about anything done at his
                    or her base finance office. A transaction could be the
                    filing of a travel voucher, adjusting an allotment or
                    correcting a pay error. It is the processing of these
                    transactions, said Roger Bick, director of financial
                    management strategic planning and transformation, where the
                    Air Force financial management community starts its
                    transformation efforts.
                  </p>


                </div>
              </div>
              <div className="col-md-12">
                <div className="divider vertical-line my-2"></div>
                <div className="latobold font-13 title-color pb-1">
                  <span tabIndex={0} aria-label="Attachments">
                    Attachments
                  </span>
                </div>
                <ul className="my-2 p-0 attachmentslist">
                  <li className="me-2">
                    <div className="attachedfiles">
                      <a
                        title="Travel Reimbursement.Xlsx"
                        className="pe-2"
                        tabIndex={0}
                        aria-label="Travel Reimbursement.Xlsx"
                        href="javascript:void(0)"
                      >
                        <span className="icon-excel pe-2"></span>Travel
                        Reimbursement.Xlsx
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </>
      )
    },




  ];
  return (
    <>

      <div className="mb-2 d-flex align-items-center bgcolor-primary px-2 py-1 whitetext border-radius1 ">
        <div className="d-flex align-items-center py-2"><h2 tabIndex={0} aria-label='Q & A' className="font-14 d-flex align-items-center"> <span className="icon-queans font-13 pe-2"></span> Q & A</h2></div>
        <div className='ms-auto'>
          <Buttons
            label="Add"
            className="btn-xs montserratBold font-12 text-uppercase text-color1 addbtn border-radius px-2 "
            icon="icon-add font-10 pe-1"
            type="button"
            onClick={() => {
              setshowAddPopup(!showAddPopup);
            }}

          />
        </div>
      </div>
      {showAddPopup ? (
        <div className="settingsaddpopup w-100 my-2 border-radius whitebg d-inline-block bordered1">
          <div className="p-3 border-bottom1 ">
            <h4 className="m-0 p-0 d-inline-block font15 montserratsemibold textcolor4 text-uppercase">
              <span tabIndex={0} aria-label="Add Knowledge Articles">
                Add Q & A
              </span>
            </h4>
          </div>

          <div className="px-3 py-1">
            <div className="row">
              <div className="col-sm-12 col-lg-12 mb-2">
                <InputText
                  inputProps={{
                    id: " Title ",
                    name: " Title",
                    placeholder: "Enter Title",
                    className: "latomedium font-13 darktext mb-2",
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
                    id: " Description ",
                    name: " Description",
                    placeholder: "Enter Description",
                    className: "latomedium font-13 darktext mb-2",
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
                    id: "Attach files ",
                    name: " Description",
                    className: "latomedium font-13 darktext mb-2",
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

            </div>

            <div className=" d-flex py-1 flex-wrap">
              <div className="ms-auto settingsbtns d-flex">
                <Buttons
                  label="Save"
                  className="border-radius py-1 px-2 btn-bgcolor9 ms-2 whitetext montserratbold font-12 text-uppercase btn-xs"
                  icon="icon-save font-11 pe-1"
                  type="button"
                />

                <Buttons
                  label="Cancel"
                  className="py-1 px-2 border-radius bordered ms-2 montserratbold font-12 text-uppercase btn-xs"
                  icon="icon-close color-primary font-9 pe-1"
                  type="button"
                  onClick={() => {
                    setshowAddPopup(false);
                  }}
                />
              </div>
            </div>

          </div>
        </div>

      ) : (
        ""
      )}
      <div className="py-1 ">
        <div className="">
          <Accordions
            items={accordionitems}
            className="accordions accordian-bordered whitebg"
            titleIcon="icon-minusform"
            titlecollapsedIcon="icon-plusform"
            defaultActivekey='1'
            title=''
            inputProps={{
              className: 'test'
            }}
          />



        </div>
      </div>


    </>
  );
};
export default QandA;
