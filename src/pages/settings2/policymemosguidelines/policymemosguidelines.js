/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Accordions from '../../../components/accordions/accordions';
import InnerAccrodions from "./inneraccrodions";
const PolicyMemosGuidelines = () => {

  const accordionitems = [
    {
      title: (
        <>
          <div className="w-100 ">
            <div className="d-flex flex-row flex-lg-row  px-3 my-2 align-items-lg-center  w-100 flex-wrap settingPMG">
              <div className="my-1 col-12 foldername">
                <div className="subtitle-color font-12 montserratSemibold pb-1">
                  Templates
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
              <div className="my-1 col-12 Modified">
                <div className="subtitle-color font-12 montserratSemibold pb-1">
                  Modified
                </div>
                <div className="darktext font-12 montserratSemibold">
                  Brandon Green | 02/28/2022
                </div>
              </div>



            </div>

          </div>
        </>
      ),
      is_active: "true",
      className: 'no-bordered',
      titlename: "Templates",

      content: (
        <>

          <div className="bordered1 p-2 no-border-top">
            <InnerAccrodions />
          </div>
        </>
      )
    },




  ];
  return (
    <>

      <div className="mb-2 d-flex align-items-center bgcolor-primary px-2 py-1 whitetext border-radius1 ">
        <div className="d-flex align-items-center py-2"><h2 tabIndex={0} aria-label='Policy Memos & Guidelines' className="font-14 d-flex align-items-center"> <span className="icon-policyfile font-13 pe-2"></span> Policy Memos & Guidelines</h2></div>

      </div>

      <div className="py-1 ">
        <div className="">
          <Accordions
            items={accordionitems}
            className="accordions accordian-bordered whitebg"
            titleIcon="icon-open-folder font-20"
            titlecollapsedIcon="icon-close-folder font-20"
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
export default PolicyMemosGuidelines;
