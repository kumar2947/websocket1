import "./pointsofcontacts.css";
import { Link } from "react-router-dom";
import { pointsofcontact } from './poc-data';
export default function PointsOfContacts() {

  const pointsofcontactItems = pointsofcontact.slice(0, 3).map((pocitems : any) =>
    <div className="d-flex mb-3">
      <div className="POC-thumb m-0 me-2 align-items-center d-flex justify-content-center">
        {/* <img src={pocitems.image}  /> */}
        {pocitems.shortname}
      </div>
      <div className="sourcesanspro">
        <p tabIndex={0} aria-label={pocitems.name} className="m-0 poppins-bold font-14">
          {pocitems.firstname} {pocitems.lastname}
        </p>
        <p tabIndex={0} aria-label={pocitems.desig} className="m-0 subTitleGrey poppins-bold font-11" >
          {pocitems.desig}
        </p>
        <p className="m-0 d-flex align-items-center">
          <span className={pocitems.iconmail}></span>
          <Link to={`mailto: ${pocitems.link}`} title={pocitems.mailid} className="eMail subtitle-color font-12 ms-1">
            {pocitems.mailid}
          </Link>
        </p>
      </div>
    </div>


  );


  return (
    <>
      <div className="card-header pb-0 d-flex justify-content-between align-items-center">
        <div className="d-flex mb-2 title-border">
          <div tabIndex={0} aria-label="Points of Contact" className="poppins-bold font-14" >
            Points of Contact
          </div>
        </div>
        <Link title="View All" to="/poc" className="links-underline font-12 links">
          View All
        </Link>
      </div>

      <div className="d-flex flex-column card-body">
        {pointsofcontactItems}
      </div>
    </>
  );
}
