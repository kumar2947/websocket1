import { Link } from "react-router-dom";
import { qadata } from './qa-data';
export default function QuestionAnswers() {
  const listItems = qadata.slice(0, 3).map(qalist =>
    <div className="mb-3">
      <p className="m-0">
        <Link
          to={qalist.link}
          title={qalist.title}
          className="poppins-semibold font13 color-primary"
        >
          {qalist.title}
        </Link>
      </p>
      <p tabIndex={0} aria-label={qalist.content} className="m-0 lineClamp2 sourcesanspro">
        {qalist.content}
      </p>
      <p tabIndex={0} aria-label={qalist.subcontent} className="m-0 sourcesanspro subtitle-color">
        {qalist.subcontent}
      </p>
    </div>
  );
  return (
    <>
      <div className="d-flex justify-content-between align-items-center pb-0 card-header">
        <div className="d-flex mb-2 title-border">
          <div tabIndex={0} aria-label="quetions & Answers" className="poppins-bold font-14">
            Q & A
          </div>
        </div>
        <Link title="View All" to="/qa" className="links-underline font-12 links">
          View All
        </Link>
      </div>
      <div className="d-flex flex-column pt-0 card-body">
        <div className="font-13">
          {listItems}
        </div>
        <div className="text-end mt-auto">
          <Link title="View More" to="/qa" className="links-underline font-12 links">
            View More
          </Link>
        </div>
      </div>
    </>
  );
}
