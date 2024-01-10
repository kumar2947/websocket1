import React from 'react'
import { Link } from 'react-router-dom'
import { qadata } from './qa-data'
import InputSearch from '../../utils/controls/input-search'
import Buttons from '../../components/buttons/buttons'
export default function QandA () {
  const listItems = qadata.map(qalist =>
    <div className="mb-3" key={qalist.title}>
      <p className="m-0">
        <Link
          to={qalist.link}
          title={qalist.title}
          className=" title-color9"
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
  )
  const redirecttoHome = () => {
    window.location.href = '#'
  }
  return (
    <>
      <div className="py-2 px-3 whitebg shadow1 d-flex flex-column flex-sm-row align-items-md-center">
        <div className="d-flex align-items-center py-1"> <h2 tabIndex={0} className="poppins-semibold font-18" aria-label="Q & A"> Q & A</h2>
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
            onClick={(e:any) => redirecttoHome()}
          />
        </div>
      </div>
      <div className="container">
        <div className="mt-3">
          <div className="whitebg border-radius p-3 ">
            <div className="font-13 pe-1">
              {listItems}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
