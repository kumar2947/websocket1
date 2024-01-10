
import React, { useState } from "react";
import Buttons from "../../../components/buttons/buttons";
import { FormTooltipsdata } from './formtooltips-data';
import InputText from "../../../utils/controls/input-text";
const FormTooltips = () => {

  const [showedit, setshowedit] = useState(false);
  const listItems = FormTooltipsdata.map(links =>
    <>
      <li tabIndex={0} aria-live="polite" className="border-radius my-2 p-relative list-type-none bordered1  whitebg">
        <div className="d-flex flex-row flex-lg-row align-items-center justify-content-lg-between w-100 flex-wrap settingformtooltips py-2 px-3">
          <div className="my-1 col-12 Labelname">
            <div className="subtitle-color font-12 montserratSemibold pb-1">{links.titlelabel}</div>
            <div className="darktext font-12 montserratSemibold">{links.titlelabelname}</div>
          </div>
          <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>
          <div className="my-1 col-12 LabelID">
            <div className="subtitle-color font-12 montserratSemibold pb-1">{links.labelid}</div>
            <div className="darktext font-12 montserratSemibold">{links.titlelabelid}</div>
          </div>
          <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>
          <div className="my-1 col-12 Description">
            <div className="subtitle-color font-12 montserratSemibold pb-1">{links.Descriptionlabel}</div>
            <div className="darktext font-12 montserratSemibold">{links.Descriptioncontent}</div>
          </div>
          <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>
          <div className="my-1 col-12 Modified">
            <div className="subtitle-color font-12 montserratSemibold pb-1">{links.modifiedlabel}</div>
            <div className="darktext font-12 montserratSemibold">{links.modifiedcontent}</div>
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

              }}

            />




          </div>


        </div>

        {showedit ? (
          <div className="settingseditpopup w-100 position-relative p-3 mb-3 bordered0 border-top ">

            <div className="row">
              <div className="col-sm-12 col-lg-12 mb-2">
                <InputText
                  inputProps={{
                    id: " LabelName ",
                    name: " Label Name",
                    placeholder: "Enter Label Name",
                    className: "latomedium font-13 darktext mb-2",

                  }}
                  label="Label Name"
                  isMandatory
                  infoClassName="tool-tip tooltip-top"
                  info="Label Name"
                  infoIcon="icon-info"
                  isInfo
                  readonly
                  formClassName="d-flex flex-column"



                />
              </div>
              <div className="col-sm-12 col-lg-12 mb-2">
                <InputText
                  inputProps={{
                    id: "LabelID",
                    name: "Label Id",
                    placeholder: "Enter Label Id",
                    className: "latomedium font-13 darktext mb-2",
                  }}
                  label=" Label Id"
                  infoClassName="tool-tip tooltip-top font-12 p-1"
                  info="Label Id"
                  infoIcon="icon-info"
                  isInfo
                  isMandatory
                  readonly
                  formClassName="d-flex flex-column"
                />
              </div>
              <div className="col-sm-12 col-lg-12 mb-2">
                <InputText
                  inputProps={{
                    id: "Description ",
                    name: "Description",
                    placeholder: "Enter Description",
                    className: "latomedium font-13 darktext mb-2",
                  }}
                  label="Description"
                  infoClassName="tool-tip tooltip-top font-12 p-1"
                  info="Description"
                  infoIcon="icon-info"
                  isInfo
                  isMandatory
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
      </li>
    </>
  );
  return (
    <>

      <div className="mb-2 d-flex align-items-center bgcolor-primary px-2 py-1 whitetext border-radius1 ">
        <div className="d-flex align-items-center py-2"><h2 tabIndex={0} aria-label='Form Tooltips' className="font-14 d-flex align-items-center"> <span className="icon-info font-13 pe-2"></span>Form Tooltips</h2></div>

      </div>

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
export default FormTooltips;
