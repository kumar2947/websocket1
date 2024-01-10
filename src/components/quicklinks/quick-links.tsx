import { Link } from "react-router-dom";
import { quicklinks } from './quicklinks-data';
import "./quicklinks.css";
export default function QuickLinks() {
  const listItems = quicklinks.map(links =>
    <li>
      <Link className="poppins-medium font-12 color-primary" to={links.link} title={links.title}>
        {links.title}
      </Link>
    </li>
  );
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex mb-2 title-border">
          <div tabIndex={0} aria-label="Quick Links" className="poppins-bold font-14">
            Quick Links
          </div>
        </div>
        <Link title="View All" to="/" className="links-underline font-12 links">
          View All
        </Link>
      </div>
      <div className="quickLinks no-icons">
        <ul className="mt-0 ">
          {listItems}
        </ul>
      </div>
    </>
  );
}
