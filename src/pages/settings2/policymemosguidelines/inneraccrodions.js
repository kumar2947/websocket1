/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import Buttons from "../../../components/buttons/buttons";
import Accordions from '../../../components/accordions/accordions';
import InputText from "../../../utils/controls/input-text";
import FileUpload from "../../../components/upload/upload-file"

const InnerAccrodions = () => {
    const [showAddPopup, setshowAddPopup] = useState(false);
    const [showfileedit, setshowfileedit] = useState(false);
    const [showAdddocumentPopup, setshowAdddocumentPopup] = useState(false);
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
                            <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>

                            <div className="d-flex align-items-center col-12 Actions flex-wrap me-2">



                                <Buttons
                                    label="Add"
                                    className="btn-sm sourcesansprosemibold font-12 btn-primary whitetext border-radius text-uppercase text-nowrap my-1 mx-2"
                                    icon="icon-add font-10 pe-1 whitetext"
                                    type="button"
                                    onClick={() => {
                                        setshowAdddocumentPopup(
                                            !showAdddocumentPopup
                                        );
                                    }}
                                />





                            </div>

                        </div>

                    </div>
                </>
            ),
            is_active: "true",
            className: 'no-bordered',
            label: '',
            titlename: "Templates",

            content: (
                <>
                    {showAdddocumentPopup ? (
                        <div className="w-100 border-radius whitebg d-inline-block bordered1">
                            <div className="p-3 border-bottom1 ">
                                <h4 className="m-0 p-0 d-inline-block font15 montserratsemibold textcolor4 text-uppercase">
                                    <span tabIndex={0} aria-label="Add Document">
                                        Add Document
                                    </span>
                                </h4>
                            </div>

                            <div className="px-3 py-1">

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
                                                setshowAdddocumentPopup(false);
                                            }}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                    ) : (
                        ""
                    )}
                    <div className="bordered1 p-2 no-border-top">
                        <div className="inneraccrodioncontent w-100">
                            <ul className="m-0 p-0">
                                <li aria-live="polite" tabIndex={0}>
                                    <div className="d-flex flex-row flex-lg-row py-2 px-3 my-2 align-items-lg-center w-100 flex-wrap settingPMG">


                                        <div className="my-1 col-12 foldername">
                                            <div className="pmgfolder">
                                                <span className="icon-emptyfile pe-3"></span>
                                            </div>
                                            <div>
                                                <div className="font-13 montserratSemibold text-color57">
                                                    BVT notes.txt
                                                </div>
                                            </div>
                                        </div>

                                        <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>
                                        <div className="my-1 col-12 Created">
                                            <div className="text-color46 font-12 montserratSemibold pb-1">
                                                Created
                                            </div>
                                            <div className="text-color5 font-12 montserratSemibold">
                                                Brandon Green | 02/28/2022
                                            </div>
                                        </div>
                                        <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>
                                        <div
                                            className="my-1 col-12 Modified"
                                            aria-live="polite"
                                            tabIndex={0}
                                        >
                                            <div className="text-color46 font-12 montserratSemibold pb-1">
                                                Modified
                                            </div>
                                            <div className="text-color5 font-12 montserratSemibold">
                                                Brandon Green | 02/28/2022
                                            </div>
                                        </div>
                                        <div className="dividerdashed vertical mx-2 d-none d-lg-block"></div>



                                        <div className="d-flex align-items-center col-12 Actions flex-wrap me-2">

                                            <Buttons
                                                label="Edit"
                                                className='btn-sm sourcesansprosemibold font-12 btn-bgcolor10 title-color1 border-radius text-uppercase text-nowrap my-1 mx-2'
                                                icon="icon-pencil font-10 pe-1"
                                                type="button"
                                                onClick={() => {
                                                    setshowfileedit(true);
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
                                    {showfileedit ? (
                                        <>
                                            <div className="divider vertical-line my-2"></div>
                                            <div className="w-100 border-radius whitebg d-inline-block ">


                                                <div className="px-3 py-1">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-lg-12 mb-2 p-relative">
                                                            <InputText
                                                                inputProps={{
                                                                    id: " Title ",
                                                                    name: " Title",
                                                                    placeholder: "Enter Title",
                                                                    className: "latomedium font-13 darktext mb-2",
                                                                }}
                                                                label=" Title "
                                                                isMandatory
                                                                infoClassName="tool-tip tooltip-top font-12 p-1"
                                                                info="Title "
                                                                infoIcon="icon-info"
                                                                isInfo
                                                                formClassName="d-flex flex-column"
                                                                className="extentions "
                                                            />
                                                            <span className="extension ps-2 font-14 subtitle-color sourcesanspro">
                                                                .docx
                                                            </span>
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
                                                                    setshowfileedit(false);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        ""
                                    )}

                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        },




    ];
    return (
        <>




            <div className="py-1 ">
                <div className="card-body">
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
export default InnerAccrodions;
