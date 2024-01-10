
import React, { useState } from "react";
import Buttons from "../../../components/buttons/buttons";
import { Quicklinksdata } from './quicklinks-data';
import InputText from "../../../utils/controls/input-text";
import InputSelect from "../../../utils/controls/input-select";
const QuickLinks = () => {
  const [showAddPopup, setshowAddPopup] = useState(false);
  const [showedit, setshowedit] = useState(false);
  const listItems = Quicklinksdata.map(links =>
    <>
      <li tabIndex={0} aria-live="polite" className="border-radius my-2 p-relative list-type-none bordered1  whitebg">

        <div className="d-flex flex-row flex-lg-row align-items-center justify-content-lg-between w-100 flex-wrap settingsquicklinks py-2 px-3 ">
          <div className="my-1 col-12 Title">
            <div className="subtitle-color font-12 montserratSemibold pb-1">{links.titlelabel}</div>
            <div className="darktext font-12 montserratSemibold">{links.title}</div>
          </div>
          <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>
          <div className="my-1 col-12 Created">
            <div className="subtitle-color font-12 montserratSemibold pb-1">{links.createdlabel}</div>
            <div className="darktext font-12 montserratSemibold">{links.created}</div>
          </div>

          <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>
          <div className="my-1 col-12 IsArchived">
            <div className="subtitle-color font-12 montserratSemibold pb-1">{links.archivedlabel}</div>
            <div className="darktext font-12 montserratSemibold">{links.archivedcontent}</div>
          </div>
          <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>



          <div className="d-flex align-items-center col-12 Actions flex-wrap me-2">

            <Buttons
              label="Edit"
              className='btn-sm sourcesansprosemibold font-12 btn-bgcolor10 title-color1 border-radius text-uppercase text-nowrap my-1 mx-2'
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
        {showedit ? (
          <div className="settingseditpopup w-100 position-relative p-3 mb-3 bordered0 border-top ">

            <div className="row">
              <div className="col-sm-12 col-lg-4 mb-2">
                <InputText
                  inputProps={{
                    id: " Name ",
                    name: " Name",
                    placeholder: "Enter Name",
                    className: "latomedium font-13 darktext mb-2",
                  }}
                  label="Name"
                  isMandatory
                  infoClassName="tool-tip tooltip-top"
                  info="Name"
                  infoIcon="icon-info"
                  isInfo

                  formClassName="d-flex flex-column"
                />
              </div>
              <div className="col-sm-12 col-lg-8 mb-2">
                <InputText
                  inputProps={{
                    id: "URL",
                    name: "URL",
                    placeholder: "https://example.com",
                    className: "latomedium font-13 darktext mb-2",
                  }}
                  label="URL"
                  infoClassName="tool-tip tooltip-top font-12 p-1"
                  info="URL"
                  infoIcon="icon-info"
                  isInfo
                  formClassName="d-flex flex-column"
                />
                <span className="sourcesanspro font-12 subtitle-color">Hint: (http://example.com or https://example.com)</span>
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
              <div className="ms-auto settingsbtns d-flex ">
                <Buttons
                  label="Update"
                  className="border-radius py-1 px-2 btn-bgcolor11 ms-2 whitetext montserratbold font-12 text-uppercase btn-xs"
                  icon="icon-update font-11 pe-1 "
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
      </li>
    </>

  );
  return (
    <>

      <div className="mb-2 d-flex align-items-center bgcolor-primary px-2 py-1 whitetext border-radius1 ">
        <div className="d-flex align-items-center py-2"><h2 tabIndex={0} aria-label='Quick Links' className="font-14 d-flex align-items-center"> <span className="icon-quicklinks font-13 pe-2"></span>  Quick Links</h2></div>
        <div className='ms-auto'>
          <Buttons
            label="Add"
            className="btn-xs montserratBold font-12 text-uppercase text-color1 addbtn border-radius px-2"
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
            <h4 className="m-0 p-0 d-inline-block font15 montserratSemibold textcolor4 text-uppercase">
              <span tabIndex={0} aria-label="Add Quick Link">
                Add Quick Link
              </span>
            </h4>
          </div>

          <div className="px-3 py-1">
            <div className="row">
              <div className="col-sm-12 col-lg-12 mb-2">
                <InputText
                  inputProps={{
                    id: " Name ",
                    name: " Name",
                    placeholder: "Enter Name",
                    className: "latomedium font-13 darktext mb-2",
                  }}
                  label="Name"
                  isMandatory
                  infoClassName="tool-tip tooltip-top"
                  info="Name"
                  infoIcon="icon-info"
                  isInfo

                  formClassName="d-flex flex-column"
                />
              </div>
              <div className="col-sm-12 col-lg-12 mb-2">
                <InputText
                  inputProps={{
                    id: "URL",
                    name: "URL",
                    placeholder: "https://example.com",
                    className: "latomedium font13 darktext mb-2",
                  }}
                  label="URL"
                  infoClassName="tool-tip tooltip-top font-12 p-1"
                  info="URL"
                  infoIcon="icon-info"
                  isInfo
                  formClassName="d-flex flex-column"
                />
                <span className="sourcesanspro font-12 subtitle-color">Hint: (http://example.com or https://example.com)</span>
              </div>

            </div>

            <div className="d-flex py-1">
              <div className="ms-auto settingsbtns d-flex">
                <Buttons
                  label="Save"
                  className="border-radius py-1 px-2 btn-bgcolor9 ms-2 whitetext montserratbold font-12 text-uppercase btn-xs"
                  icon="icon-save font-11 pe-1"
                  type="button"
                />

                <Buttons
                  label="Cancel"
                  className="py-1 px-2 border-radius btn-border1  ms-2 montserratbold font-12 text-uppercase btn-xs"
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
      <div className="py-0">
        <div className="">
          <div className="list w-100">
            <ul className="m-0 p-0">
              {listItems}
            </ul>
          </div>


        </div>
      </div>


    </>
  );
};
export default QuickLinks;
