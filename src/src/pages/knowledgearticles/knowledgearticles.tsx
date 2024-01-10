import React from 'react'
import { Link } from 'react-router-dom'
import { knowledgearticlesdata } from './knowledge-articles-data'
import InputSearch from '../../utils/controls/input-search'
import Buttons from '../../components/buttons/buttons'
export default function KnowledgeArticles () {
  const listItems = knowledgearticlesdata.map(knowledgearticles =>
    <div className="mb-3" key={knowledgearticles.title}>
      <p className="m-0">
        <Link
          to={knowledgearticles.link}
          title={knowledgearticles.title}
          className="latoMedium title-color1"
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
  )
  const redirecttoHome = () => {
    window.location.href = '#'
  }
  return (
    <>
      <div className="py-2 px-3 whitebg shadow1 d-flex flex-column flex-sm-row align-items-md-center">
        <div className="d-flex align-items-center py-1"> <h2 className="poppins-semibold font-18" tabIndex={0} aria-label="Knowledge Articles"> Knowledge Articles</h2>

        </div>
        <div className="ms-auto d-flex align-items-center ">
          <div>
            <InputSearch
              inputProps={{
                placeholder: 'Search'
              }}
              className='no-border w-100'
              searchgroup=' w-100 d-flex align-items-center border-bottom2 border-radius0'
              formClassName="col-sm-12"
              icon='icon-search pe-2'
            />
          </div>
          <Buttons
            label="Clear All"
            className='ms-auto btn-sm d-flex align-items-center links text-decoration-underline'
            type="button"
          />
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
            <div className="font-13 max-h-250 overflow-auto pe-1">
              {listItems}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
