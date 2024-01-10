import { Link } from "react-router-dom";
import { announcementdata } from './announcement-data';
export default function Announcements() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center pb-0 card-header">
        <div className="d-flex mb-2 title-border">
          <div tabIndex={0} aria-label="Announcements" className="poppins-bold font-14">
            Announcements
          </div>
        </div>
        <Link title="View All" to="/announcements" className="links-underline font-12 links">
          View All
        </Link>
      </div>
      <div className="d-flex flex-column card-body pt-0">
        <div className="font-13 pe-1">
          {announcementdata.slice(0, 3).map(announcement =>
            <div className="mb-3">
              <p className="m-0">
                <Link
                  to={announcement.link}
                  title={announcement.title}
                  className="poppins-semibold font13 color-primary"
                >
                  {announcement.title}
                </Link>
              </p>
              <p tabIndex={0} aria-label={announcement.content} className="m-0 lineClamp2 sourcesanspro">
                {announcement.content}
              </p>
              <p tabIndex={0} aria-label={announcement.subcontent} className="m-0 sourcesanspro subtitle-color">
                {announcement.subcontent}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}