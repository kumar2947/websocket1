import React from 'react'
import { Link } from 'react-router-dom'
import { pointsofcontact } from './poc-data'
import Buttons from '../../components/buttons/buttons'
export default function PointsOfContacts () {
  const pointsofcontactItems = pointsofcontact.map((pocitems: any) =>
    <div className=" col-xxl-3 col-md-6 col-sm-12 " key={pocitems.name}>
      <div className="bordered1 p-2 border-radius d-flex mb-3">
        <div className="POC-thumb m-0 me-2 align-items-center d-flex justify-content-center ">
          {/* <img src={pocitems.image}  /> */}
          {pocitems.shortname}
        </div>
        <div className="sourcesanspro">
          <p tabIndex={0} aria-label={pocitems.name} className="m-0 font-15">
            {pocitems.firstname} {pocitems.lastname}
          </p>
          <p tabIndex={0} aria-label={pocitems.desig} className="m-0 subTitleGrey font-12 sourcesansproSemiBold" >
            {pocitems.desig}
          </p>
          <p className="m-0">
            <span className={pocitems.iconmail}></span>
            <Link to={`mailto: ${pocitems.link}`} title={pocitems.mailid} className="eMail subtitle-color font-12 ms-1">
              {pocitems.mailid}
            </Link>
          </p>
          <p className="m-0">
            <span className={pocitems.iconphone}></span>
            <Link to={`tel: ${pocitems.contactno}`} title={pocitems.contactno} className="phone subtitle-color font-12 ms-1">
              {pocitems.contactno}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
  const redirecttoHome = () => {
    window.location.href = '#'
  }
  return (
    <>
      <div className="py-2 px-3 whitebg shadow1 d-flex flex-column flex-sm-row align-items-md-center">
        <div className="d-flex align-items-center py-1"> <h2 tabIndex={0} className="poppins-semibold font-18" aria-label="Points Of Contacts"> Points Of Contacts</h2>
        </div>
        <div className="ms-auto d-flex align-items-center ">

          <Buttons
            label="Back"
            aria-label="Back"
            icon="icon-left-arrow me-1"
            className='btn-sm font-14 btn-bgcolor7 whitetext text-nowrap border-radius'
            onClick={(e: any) => redirecttoHome()}
          />
        </div>
      </div>
      <div className="container">
        <div className="mt-3">
          <div className="whitebg border-radius p-3 ">
            <div className="font-13 pe-1 row">
              {pointsofcontactItems}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
