import { Link } from 'react-router-dom'
import React from 'react'
import { knowledgearticlesdata } from './knowledge-articles-data'
export default function KnowledgeArticles () {
  return (
    <>
      <div className="card-header pb-0 d-flex justify-content-between align-items-center">
        <div className="d-flex mb-2 title-border">
          <div tabIndex={0} aria-label="Quick Links" className="poppins-bold font-14">
            Knowledge Articles
          </div>
        </div>
        <Link title="View All" to="/knowledgearticles" className="links-underline font-12 links">
          View All
        </Link>
      </div>

      <div className="d-flex flex-column pt-0 card-body">
        <div className="font-13 pe-1">
          {knowledgearticlesdata.slice(0, 3).map(knowledgearticles =>
            <div className="mb-3" key={knowledgearticles.title}>
              <p className="m-0">
                <Link
                  to={knowledgearticles.link}
                  title={knowledgearticles.title}
                  className="poppins-semibold font13 color-primary"
                >
                  {knowledgearticles.title}
                </Link>
              </p>
              <p tabIndex={0} aria-label={knowledgearticles.content} className="m-0 lineClamp2 sourcesanspro">
                {knowledgearticles.content}
              </p>
              <p tabIndex={0} aria-label={knowledgearticles.subcontent} className="m-0 sourcesanspro subtitle-color">
                {knowledgearticles.subcontent}
              </p>
            </div>
          )}
        </div>

        <div className="text-end mt-auto">
          <Link title="View More" to="/qa" className="links-underline font-12 links">
            View More
          </Link>
        </div>
      </div>
    </>
  )
}
