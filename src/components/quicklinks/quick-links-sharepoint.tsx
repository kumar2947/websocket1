import { Link } from "react-router-dom";
import { quicklinks } from './quicklinks-data';
import "./quicklinks.css";
export default function QuickLinks1() {
  const listItems = quicklinks.map(links =>
    <li>
      <Link to={links.link} title={links.title} className="color-primary">
        {links.title}
      </Link>
    </li>
  );
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex mb-2 title-border">
          <div>
            <span className="icon-quicklinks"></span>
          </div>
          <div tabIndex={0} aria-label="Quick Links" className="bold">
            Quick Links
          </div>
        </div>
      </div>
      <div className="quickLinks max-h-250 overflow-auto pe-1">
        <ul className="mt-0 ">
          {listItems}
        </ul>
      </div>
    </>
  );
}
