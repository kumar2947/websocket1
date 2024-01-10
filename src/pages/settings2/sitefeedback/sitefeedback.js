
import React from "react";
import Buttons from "../../../components/buttons/buttons";
import { Sitefeedbackdata } from './sitefeedback-data';
const SiteFeedback = () => {
  const listItems = Sitefeedbackdata.map(links =>
    <>
      <li tabIndex={0} aria-live="polite" className="border-radius my-2 p-relative list-type-none bordered1  whitebg">
        <div className="d-flex flex-row flex-lg-row align-items-center justify-content-lg-between w-100 flex-wrap settingssitefeedback py-2 px-3">
          <div className="my-1 col-12 Subject">
            <div className="subtitle-color font12 montserratSemibold pb-1">{links.Subjectlabel}</div>
            <div className="darktext font12 montserratSemibold">{links.Subject}</div>

          </div>
          <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>
          <div className="my-1 col-12 FeedbackAbout">
            <div className="subtitle-color font12 montserratSemibold pb-1">{links.FeedbackAboutlabel}</div>
            <div className="darktext font12 montserratSemibold">{links.FeedbackAbout}</div>
          </div>
          <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>
          <div className="my-1 col-12 Description">
            <div className="subtitle-color font12 montserratSemibold pb-1">{links.Descriptionlabel}</div>
            <div className="darktext font12 montserratSemibold">{links.Descriptioncontent}</div>

          </div>
          <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>
          <div className="my-1 col-12 Attachments">
            <div className="subtitle-color font12 montserratSemibold pb-1">{links.Attachmentslabel}</div>
            <div className="darktext font12 montserratSemibold">{links.Attachmentscontent}</div>
          </div>
          <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>
          <div className="my-1 col-12 Modified">
            <div className="subtitle-color font12 montserratSemibold pb-1">{links.modifiedlabel}</div>
            <div className="darktext font12 montserratSemibold">{links.modifiedcontent}</div>
          </div>




        </div>


      </li>
    </>
  );
  return (
    <>

      <div className="mb-2 d-flex align-items-center bgcolor-primary px-2 py-1 whitetext border-radius1 ">
        <div className="d-flex align-items-center py-2"><h2 tabIndex={0} aria-label='Site Feedback' className="font-14 d-flex align-items-center"> <span className="icon-feedback font-14 pe-2"></span>Site Feedback</h2></div>
        <div className='ms-auto'>
          <Buttons
            label="Download Site Feedback "
            className="btn-xs montserratBold font12 text-uppercase text-color1 addbtn border-radius px-2"
            icon="icon-down-arrow font-10 pe-1"
            type="button"

          />
        </div>
      </div>

      <div className=" py-0">
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
export default SiteFeedback;
