
import React, { useState } from "react";
import Buttons from "../../../components/buttons/buttons";
import { POCdata } from './pointsofcontact-data';
import InputText from "../../../utils/controls/input-text";
import InputSelect from "../../../utils/controls/input-select";

const PointsofContact = () => {
  const [showAddPopup, setshowAddPopup] = useState(false);
  const [showedit, setshowedit] = useState(false);
  const listItems = POCdata.map(links =>
    <>
      <li tabIndex={0} aria-live="polite" className="border-radius my-2 p-relative list-type-none bordered1  whitebg">
        <div className="d-flex flex-row flex-lg-row align-items-center justify-content-lg-between w-100 flex-wrap settingPoc py-2 px-3">
          <div className="my-1 col-12 Name">
            <div className="subtitle-color font12 montserratSemibold pb-1">{links.titlelabel}</div>
            <div className="darktext font12 montserratSemibold">{links.title}</div>
          </div>
          <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>
          <div className="my-1 col-12 PhoneNumber">
            <div className="subtitle-color font12 montserratSemibold pb-1">{links.phonelabel}</div>
            <div className="darktext font12 montserratSemibold">{links.phone}</div>
          </div>
          <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>
          <div className="my-1 col-12 Modified">
            <div className="subtitle-color font12 montserratSemibold pb-1">{links.modifiedlabel}</div>
            <div className="darktext font12 montserratSemibold">{links.modifiedcontent}</div>
          </div>
          <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>
          <div className="my-1 col-12 IsArchived">
            <div className="subtitle-color font12 montserratSemibold pb-1">{links.archivedlabel}</div>
            <div className="darktext font12 montserratSemibold">{links.archivedcontent}</div>
          </div>
          <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>


          <div className="d-flex align-items-center col-12 Actions flex-wrap me-2">

            <Buttons
              label="Edit"
              className='btn-sm sourcesansprosemibold font12 btn-bgcolor10 title-color1 border-radius text-uppercase text-nowrap my-1 mx-2'
              icon="icon-pencil font-10 pe-1"
              type="button"
              onClick={() => {
                setshowedit(true);
                setshowAddPopup(false);
              }}

            />


            <Buttons
              label="Delete"
              className='btn-sm sourcesansprosemibold font12 btn-bgcolor10 title-color1 border-radius text-uppercase text-nowrap my-1 mx-2'
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
                    id: " PointsofContact ",
                    name: " Points of Contact ",
                    placeholder: "Enter Name or email address..",
                    className: "latomedium font13 darktext mb-2",
                  }}
                  label=" Points of Contact "
                  isMandatory
                  infoClassName="tool-tip tooltip-top"
                  info=" Points of Contact "
                  infoIcon="icon-info"
                  isInfo
                  type="peopel-picker"
                  formClassName="d-flex flex-column"
                />
              </div>
              <div className="col-sm-12 col-lg-4 mb-2">
                <InputText
                  inputProps={{
                    id: "PhoneNumber",
                    name: " Phone Number ",
                    placeholder: "Enter Phone Number",
                    className: "latomedium font13 darktext mb-2",
                  }}
                  label=" Phone Number"
                  infoClassName="tool-tip tooltip-top font12 p-1"
                  info="Phone Number"
                  infoIcon="icon-info"
                  isInfo
                  formClassName="d-flex flex-column"
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
                  infoClassName="tool-tip tooltip-top font12 p-1"
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
                  className="border-radius py-1 px-2 btn-bgcolor11 ms-2 whitetext montserratbold font12 text-uppercase btn-xs"
                  icon="icon-update font-11 pe-1"
                  type="button"
                />

                <Buttons
                  label="Cancel"
                  className="py-1 px-2 border-radius btn-border1  ms-2 montserratbold font12 text-uppercase btn-xs"
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
        <div className="d-flex align-items-center py-2"><h2 tabIndex={0} aria-label=' Points of Contact' className="font-14 d-flex align-items-center"> <span className="icon-adduser font-12 pe-2"></span> Points of Contact</h2></div>
        <div className='ms-auto'>
          <Buttons
            label="Add"
            className="btn-xs montserratBold font12 text-uppercase text-color1 addbtn border-radius px-2"
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
              <span tabIndex={0} aria-label="Add Points Of Contact">
                Add Points Of Contact
              </span>
            </h4>
          </div>

          <div className="px-3 py-1">
            <div className="row">
              <div className="col-sm-12 col-lg-6 mb-2">
                <InputText
                  inputProps={{
                    id: " PointsofContact  ",
                    name: " Points of Contact ",
                    placeholder: "Enter Name or email address..",
                    className: "latomedium font13 darktext mb-2",
                  }}
                  label=" Points of Contact "
                  isMandatory
                  infoClassName="tool-tip tooltip-top"
                  info=" Points of Contact "
                  infoIcon="icon-info"
                  isInfo
                  type="peopel-picker"
                  formClassName="d-flex flex-column"
                />
              </div>
              <div className="col-sm-12 col-lg-6 mb-2">
                <InputText
                  inputProps={{
                    id: "PhoneNumber",
                    name: " Phone Number ",
                    placeholder: "Enter Phone Number",
                    className: "latomedium font13 darktext mb-2",
                  }}
                  label=" Phone Number"
                  infoClassName="tool-tip tooltip-top font12 p-1"
                  info="Phone Number"
                  infoIcon="icon-info"
                  isInfo
                  formClassName="d-flex flex-column"
                />
              </div>
            </div>

            <div className=" d-flex py-1 flex-wrap">
              <div className="ms-auto settingsbtns d-flex">
                <Buttons
                  label="Save"
                  className="border-radius py-1 px-2 btn-bgcolor9 ms-2 whitetext montserratbold font12 text-uppercase btn-xs"
                  icon="icon-save font-11 pe-1"
                  type="button"
                />

                <Buttons
                  label="Cancel"
                  className="py-1 px-2 border-radius bordered ms-2 montserratbold font12 text-uppercase btn-xs"
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
export default PointsofContact;
