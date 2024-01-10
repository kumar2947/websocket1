/* eslint-disable jsx-a11y/aria-props */
/* eslint-disable react/no-unknown-property */
import React from 'react'
import './detailview.css'
import Buttons from '../../components/buttons/buttons'
import Detailviewfiles from './files/files'
import Teammembers from './team-members/team-members'
import Details from './details/details'
import Discussions from './discussions/discussions'
import Progressbar from './progress-steps/progress'
const DetailedView = () => {
  return (
        <>
            <div className="py-2 px-3 whitebg shadow1 d-flex flex-column flex-sm-row align-items-md-center">
                <div className="d-flex align-items-center py-1"><h2 className='poppins-semibold font-18' tabIndex={0} aria-lable='Title'>Title</h2></div>
                <div className='d-flex ms-auto gap-1'>
                    <Buttons
                        label="Cancel"
                        aria-label="Cancel"
                        icon="icon-formcancel me-1"
                        className='btn-sm font-14 btn-primary whitetext text-nowrap border-radius'
                    />
                    <Buttons
                        label="Back"
                        aria-label="Back"
                        icon="icon-left-arrow me-1"
                        className='btn-sm font-14 btn-bgcolor7 whitetext text-nowrap border-radius'
                    />
                </div>
            </div>
            <div className='pb-2 w-100'>
                <div className='container'>
                    {/* <div className='row'>
                        <div className='col-sm-12'>
                            <div className="shadow card w-100 h-100">
                                <div className='card-header'>
                                <Infosteps />
                                </div>
                                <div className="card-body ">
                                    <Progressbar />
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className='row'>
                        <div className='col-sm-12 col-md-3 col-lg-2'>
                            <div className="shadow card w-100 h-100">
                                <div className="card-body ">
                                    <Progressbar />
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-9 col-lg-6 col-xl-7'>
                            <div className="shadow card w-100 mb-3">
                                <Details />
                            </div>
                            <div className="shadow card w-100">
                                <Discussions />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-4 col-xl-3'>
                            <Detailviewfiles />
                            <Teammembers />
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}
export default DetailedView
